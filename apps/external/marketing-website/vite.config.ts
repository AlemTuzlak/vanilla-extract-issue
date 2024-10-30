import { vitePlugin as remix } from "@remix-run/dev"
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"
import { devServer } from "react-router-hono-server/dev"
import { remixDevTools } from "remix-development-tools"
import { defineConfig } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
	plugins: [
		remixDevTools(),
		devServer(),
		remix({
			future: {
				unstable_optimizeDeps: true,
			},
			ignoredRouteFiles: ["**/.*"],
		}),
		tsconfigPaths(),
		vanillaExtractPlugin(),
	],
	build: {
		target: "esnext",
	},
	server: {
		port: Number(process.env.PORT || 3000),
		open: true,
	},
})
