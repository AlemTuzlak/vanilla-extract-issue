import { RemixBrowser } from "@remix-run/react"
import { StrictMode } from "react"

const hydrateCallback = (
	<StrictMode>
		<RemixBrowser />
	</StrictMode>
)

if (window.requestIdleCallback) {
	window.requestIdleCallback(() => hydrateCallback)
} else {
	// Safari doesn't support requestIdleCallback
	// https://caniuse.com/requestidlecallback
	window.setTimeout(() => hydrateCallback, 1)
}
