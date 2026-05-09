/**
 * Color utility helpers
 */

/**
 * Append a hex alpha channel to a 6-digit hex color.
 *
 * @param hex     - A 6-digit hex color string (e.g. "#2aa198")
 * @param percent - Opacity as a percentage (0–100)
 * @returns The hex color with an appended 2-digit hex alpha (e.g. "#2aa19880")
 *
 * @example
 * alpha("#2aa198", 50)  // "#2aa19880"
 * alpha("#719e07", 13)  // "#719e0722"
 */
export function alpha(hex: string, percent: number): string {
	const a = Math.round((percent / 100) * 255).toString(16).padStart(2, "0")
	return hex + a
}
