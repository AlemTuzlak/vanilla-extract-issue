import { createThemeContract } from "@vanilla-extract/css"
import {
	absoluteSizes,
	borderWidths,
	colors,
	fontSizes,
	fontSizesMobile,
	fontWeights,
	fonts,
	imageRatios,
	letterSpacings,
	letterSpacingsMobile,
	lineHeights,
	lineHeightsMobile,
	radii,
	relativeSizes,
	space,
} from "./_tokens"

const toNull = (v: number | string) => null

const mapValues = <T extends object, R>(obj: T, iteratee: (value: T[keyof T]) => R): { [P in keyof T]: R } => {
	const result: Partial<{ [P in keyof T]: R }> = {}

	for (const key in obj) {
		result[key] = iteratee(obj[key])
	}

	return result as { [P in keyof T]: R }
}
export const global = createThemeContract({
	colors: {
		dark: {
			brand: mapValues(colors.dark.tomato, toNull),
			error: mapValues(colors.dark.red, toNull),
			success: mapValues(colors.dark.grass, toNull),
			selection: mapValues(colors.dark.indigo, toNull),

			gray: mapValues(colors.dark.gray, toNull),
			overlay: mapValues(colors.dark.overlay, toNull),

			indigo: mapValues(colors.dark.indigo, toNull),
			tomato: mapValues(colors.dark.tomato, toNull),
			yellow: mapValues(colors.dark.yellow, toNull),
			amber: mapValues(colors.dark.amber, toNull),
			grass: mapValues(colors.dark.grass, toNull),
		},
		light: {
			brand: mapValues(colors.light.tomato, toNull),
			error: mapValues(colors.light.red, toNull),
			success: mapValues(colors.light.grass, toNull),
			selection: mapValues(colors.light.indigo, toNull),

			gray: mapValues(colors.light.gray, toNull),
			overlay: mapValues(colors.light.overlay, toNull),

			indigo: mapValues(colors.light.indigo, toNull),
			tomato: mapValues(colors.light.tomato, toNull),
			yellow: mapValues(colors.light.yellow, toNull),
			amber: mapValues(colors.light.amber, toNull),
			grass: mapValues(colors.light.grass, toNull),
		},
	},

	fonts: mapValues(fonts, toNull),
	fontWeights: mapValues(fontWeights, toNull),
	fontSizes: mapValues(fontSizes, toNull),
	fontSizesMobile: mapValues(fontSizesMobile, toNull),
	lineHeights: mapValues(lineHeights, toNull),
	lineHeightsMobile: mapValues(lineHeightsMobile, toNull),
	letterSpacings: mapValues(letterSpacings, toNull),
	letterSpacingsMobile: mapValues(letterSpacingsMobile, toNull),

	space: mapValues(space, toNull),
	imageRatios: mapValues(imageRatios, toNull),
	sizes: {
		...mapValues(absoluteSizes, toNull),
		...mapValues(relativeSizes, toNull),
	},

	radii: mapValues(radii, toNull),
	borderWidths: mapValues(borderWidths, toNull),
})
