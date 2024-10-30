import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node"
import { json } from "@remix-run/node"
export const action = async ({ request, context }: ActionFunctionArgs) => {
	return json({})
}

export const loader = async function loader(args: LoaderFunctionArgs) {
	return json({})
}

export default function Index() {
	return (
		<div>
			<h1>Check the terminal console</h1>
			<p>
				Should get something like: Error: No CSS for file:
				C:/X/vanilla-extract-issue/apps/external/marketing-website/@id/C:/X/vanilla-extract-issue/packages/ui/css/_global.css.ts
				at Object.getCssForFile
			</p>
		</div>
	)
}
