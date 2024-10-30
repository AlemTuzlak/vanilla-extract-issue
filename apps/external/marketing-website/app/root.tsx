import type { LoaderFunctionArgs } from "@remix-run/node"
import { json } from "@remix-run/node"
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react"
import { useLocale } from "react-aria"
// TODO This broke the camels back
import "@vanilla-repro/ui/css/_global.css"

export const loader = async function loader({ context }: LoaderFunctionArgs) {
	return json({})
}

export default function App() {
	return <Root />
}
export const handle = {
	i18n: ["marketing", "components"],
}

function Root() {
	const { direction, locale } = useLocale()

	return (
		<html lang={locale} dir={direction}>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
			</head>

			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	)
}
