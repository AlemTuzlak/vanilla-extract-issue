import { createGlobalTheme } from "@vanilla-extract/css"
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
import { global } from "./global.css"

const toRem = (v: number) => `${v}rem`
const toEm = (v: number) => `${v}em`
const toPx = (v: number) => `${v}px`
const toPercentage = (v: number) => `${v * 100}%`
const toUnitLess = (v: number | string) => `${v}`

const mapValues = <T extends object, R>(obj: T, iteratee: (value: T[keyof T]) => R): { [P in keyof T]: R } => {
	const result: Partial<{ [P in keyof T]: R }> = {}

	for (const key in obj) {
		result[key] = iteratee(obj[key])
	}

	return result as { [P in keyof T]: R }
}

createGlobalTheme(":root", global, {
	colors: {
		dark: {
			brand: mapValues(colors.dark.tomato, toUnitLess),
			error: mapValues(colors.dark.red, toUnitLess),
			success: mapValues(colors.dark.grass, toUnitLess),
			selection: mapValues(colors.dark.indigo, toUnitLess),

			gray: mapValues(colors.dark.gray, toUnitLess),
			overlay: mapValues(colors.dark.overlay, toUnitLess),

			indigo: mapValues(colors.dark.indigo, toUnitLess),
			tomato: mapValues(colors.dark.tomato, toUnitLess),
			yellow: mapValues(colors.dark.yellow, toUnitLess),
			amber: mapValues(colors.dark.amber, toUnitLess),
			grass: mapValues(colors.dark.grass, toUnitLess),
		},
		light: {
			brand: mapValues(colors.light.tomato, toUnitLess),
			error: mapValues(colors.light.red, toUnitLess),
			success: mapValues(colors.light.grass, toUnitLess),
			selection: mapValues(colors.light.indigo, toUnitLess),

			gray: mapValues(colors.light.gray, toUnitLess),
			overlay: mapValues(colors.light.overlay, toUnitLess),

			indigo: mapValues(colors.light.indigo, toUnitLess),
			tomato: mapValues(colors.light.tomato, toUnitLess),
			yellow: mapValues(colors.light.yellow, toUnitLess),
			amber: mapValues(colors.light.amber, toUnitLess),
			grass: mapValues(colors.light.grass, toUnitLess),
		},
	},

	fonts: mapValues(fonts, toUnitLess),
	fontWeights: mapValues(fontWeights, toUnitLess),
	fontSizes: mapValues(fontSizes, toRem),
	fontSizesMobile: mapValues(fontSizesMobile, toRem),
	lineHeights: mapValues(lineHeights, toUnitLess),
	lineHeightsMobile: mapValues(lineHeightsMobile, toUnitLess),
	letterSpacings: mapValues(letterSpacings, toEm),
	letterSpacingsMobile: mapValues(letterSpacingsMobile, toEm),

	space: mapValues(space, toPx),
	sizes: {
		...mapValues(absoluteSizes, toPx),
		...mapValues(relativeSizes, toPercentage),
	},

	imageRatios: mapValues(imageRatios, toPercentage),

	radii: mapValues(radii, toPx),
	borderWidths: mapValues(borderWidths, toPx),
})
