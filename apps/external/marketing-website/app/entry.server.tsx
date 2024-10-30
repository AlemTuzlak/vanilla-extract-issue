import { createReadableStreamFromReadable } from "@remix-run/node"

import { PassThrough } from "node:stream"
import type { AppLoadContext, EntryContext } from "@remix-run/node"
import { RemixServer } from "@remix-run/react"
import type { Context } from "hono"
import { isbot } from "isbot"
import { renderToPipeableStream } from "react-dom/server"
import { createHonoServer } from "react-router-hono-server/node"

const ABORT_DELAY = 5000

export default async function handleRequest(
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	remixContext: EntryContext,
	appContext: AppLoadContext
) {
	const callbackName = isbot(request.headers.get("user-agent")) ? "onAllReady" : "onShellReady"

	return new Promise((resolve, reject) => {
		let didError = false

		const { pipe, abort } = renderToPipeableStream(<RemixServer context={remixContext} url={request.url} />, {
			[callbackName]: () => {
				const body = new PassThrough()

				const stream = createReadableStreamFromReadable(body)

				responseHeaders.set("Content-Type", "text/html")

				resolve(
					// @ts-expect-error - We purposely do not define the body as existent so it's not used inside loaders as it's injected there as well
					appContext.body(stream, {
						headers: responseHeaders,
						status: responseStatusCode,
					})
				)

				pipe(body)
			},
			onShellError(error: unknown) {
				reject(error)
			},
			onError(error: unknown) {
				didError = true

				console.error(error)
			},
		})
		setTimeout(abort, ABORT_DELAY)
	})
}

const getLoadContext = async (c: Context) => {
	return {
		// We do not add this to AppLoadContext type because it's not needed in the loaders, but it's used above to handle requests
		body: c.body,
	}
}

interface LoadContext extends Awaited<ReturnType<typeof getLoadContext>> {}

/**
 * Declare our loaders and actions context type
 */
declare module "@remix-run/node" {
	interface AppLoadContext extends Omit<LoadContext, "body"> {}
}

export const server = await createHonoServer({
	defaultLogger: false,
	getLoadContext,
})
