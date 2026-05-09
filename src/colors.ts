/**
 * NeoSolarized VSCode Theme -- Color Palette
 *
 * Ported from Svrana's neosolarized.lua (colorbuddy-based Neovim theme).
 * Source: https://github.com/svrana/neosolarized.nvim
 *
 * The palette is Ethan Schoonover's Solarized palette, verbatim.
 * Accent roles are derived from the original theme's Group assignments.
 *
 * Three variants:
 *   - dark   (base03 background) -- the original Neovim dark theme
 *   - osaka  (base03 background) -- deeper darks, based on craftzdog's Solarized Osaka
 *   - light  (base3  background) -- Solarized light
 *
 * This file exports:
 *   - `palette`  -- the raw Solarized hex values
 *   - `syntax`   -- resolved semantic/syntax color roles
 *   - `ui`       -- resolved workbench/editor UI color roles
 *   - `makePalette(variant)` -- returns a variant-resolved color set
 */

// ---------------------------------------------------------------------------
// Raw Solarized Palette
// ---------------------------------------------------------------------------

export const palette = {
	// Dark background tones (darkest -> lightest)
	base03: "#002b36", // darkest background (main bg in dark mode)
	base02: "#073642", // dark highlight background
	base01: "#586e75", // comments, secondary content (on dark)
	base00: "#657b83", // body text on light background / emphasized on dark

	// Light background tones (darkest -> lightest)
	base0: "#839496", // primary body text on dark background
	base1: "#93a1a1", // optional emphasized content (on dark)
	base2: "#eee8d5", // background highlight (on light)
	base3: "#fdf6e3", // main background (light mode)

	// Accent colors
	yellow: "#b58900",
	orange: "#cb4b16",
	red: "#dc322f",
	magenta: "#d33682",
	violet: "#6c71c4",
	blue: "#268bd2",
	cyan: "#2aa198",
	green: "#859900",
} as const

/**
 * Osaka variant palette -- a riff on craftzdog's Solarized Osaka theme.
 * Deepens the dark tones and warms the light tones slightly while keeping
 * the same structural relationships as the standard Solarized palette.
 * Accent colors are identical to the base palette.
 */
export const paletteOsaka = {
	// Dark background tones
	base03: "#00141a", // deeper, cooler near-black
	base02: "#002d38", // dark highlight background
	base01: "#586e74", // comments, secondary content
	base00: "#647a82", // body text on light / emphasized on dark

	// Light background tones
	base0: "#9fabad", // primary body text on dark background
	base1: "#adb8b8", // optional emphasized content
	base2: "#ede7d4", // background highlight (on light)
	base3: "#fdf6e2", // main background (light mode)

	// Accent colors -- unchanged from base palette
	yellow: "#b58900",
	orange: "#cb4b16",
	red: "#dc322f",
	magenta: "#d33682",
	violet: "#6c71c4",
	blue: "#268bd2",
	cyan: "#2aa198",
	green: "#719e07",
} as const

export type OsakaPalette = typeof paletteOsaka

export type Palette = typeof palette
export type PaletteKey = keyof Palette

// ---------------------------------------------------------------------------
// Variant type
// ---------------------------------------------------------------------------

export type Variant = "dark" | "osaka" | "light"

// ---------------------------------------------------------------------------
// Per-variant background/foreground resolution
// ---------------------------------------------------------------------------

/** Structural palette shape -- accepts both palette and paletteOsaka */
export type AnyPalette = {
	base03: string
	base02: string
	base01: string
	base00: string
	base0: string
	base1: string
	base2: string
	base3: string
	yellow: string
	orange: string
	red: string
	magenta: string
	violet: string
	blue: string
	cyan: string
	green: string
}

export interface ResolvedVariant {
	/** Raw solarized palette, always present */
	palette: AnyPalette

	// ------------------------------------------------------------------
	// Background layers
	// ------------------------------------------------------------------
	bg: string // primary background (base03 dark / base3 light)
	bgBright: string // secondary background, hover/active surfaces (base02 / base2)

	// ------------------------------------------------------------------
	// Foreground layers
	// ------------------------------------------------------------------
	fg: string // default text on bg (base0 dark / base00 light)
	fgBright: string // text on bgBright surfaces, hover/active text (base1 dark / base01 light)
	fgSubtle: string // NonText equivalent, rarely used (base00 dark / base0 light)
	fgDim: string // de-emphasized: comments, inactive, line numbers (base01 dark / base1 light)

	// ------------------------------------------------------------------
	// Borders / separators
	// ------------------------------------------------------------------
	border: string // default border on bg surfaces (base02 dark / base2 light)
	borderBright: string // active/focused border (cyan)

	// ------------------------------------------------------------------
	// Accent palette (same hex, just re-exported for convenience)
	// ------------------------------------------------------------------
	yellow: string
	orange: string
	red: string
	magenta: string
	violet: string
	blue: string
	cyan: string
	green: string
}

export function makePalette(variant: Variant): ResolvedVariant {
	const p = variant === "osaka" ? paletteOsaka : palette

	const accents = {
		yellow: p.yellow,
		orange: p.orange,
		red: p.red,
		magenta: p.magenta,
		violet: p.violet,
		blue: p.blue,
		cyan: p.cyan,
		green: p.green,
	}

	switch (variant) {
		case "dark":
			return {
				palette: p,
				bg: p.base03, // primary background
				bgBright: p.base02, // secondary background, hover/active backgrounds
				fg: p.base0, // text on base03, default foreground
				fgBright: p.base1, // text on base02, hover/active text
				fgSubtle: p.base00, // NonText equivalent
				fgDim: p.base01, // de-emphasized: comments, inactive, line numbers
				border: p.base02, // borders on base03
				borderBright: p.cyan, // active borders
				...accents,
			}

		case "light":
			return {
				palette: p,
				bg: p.base3, // primary background
				bgBright: p.base2, // secondary background, hover/active backgrounds
				fg: p.base00, // text on base3, default foreground
				fgBright: p.base01, // text on base2, hover/active text
				fgSubtle: p.base0, // NonText equivalent
				fgDim: p.base1, // de-emphasized: comments, inactive, line numbers
				border: p.base2, // borders on base3
				borderBright: p.cyan, // active borders
				...accents,
			}

		// Osaka: same dark-mode structure as "dark", using the deeper Osaka tones.
		case "osaka":
			return {
				palette: p,
				bg: p.base03, // primary background
				bgBright: p.base02, // secondary background, hover/active backgrounds
				fg: p.base0, // text on base03, default foreground
				fgBright: p.base1, // text on base02, hover/active text
				fgSubtle: p.base00, // NonText equivalent
				fgDim: p.base01, // de-emphasized: comments, inactive, line numbers
				border: p.base02, // borders on base03
				borderBright: p.cyan, // active borders
				...accents,
			}
	}
}

// ---------------------------------------------------------------------------
// UI / Workbench color roles
// ---------------------------------------------------------------------------

export interface UIColors {
	editorBg: string
	editorFg: string
	editorLineHighlight: string
	editorCursor: string
	editorSelection: string
	editorSelectionHL: string

	lineNr: string
	lineNrActive: string

	whitespace: string
	indentGuide: string
	indentGuideActive: string

	matchBracketBg: string
	matchBracketFg: string

	findMatch: string
	findMatchBorder: string
	findMatchHL: string
	findMatchHLBorder: string

	diffAddedBg: string
	diffAddedFg: string
	diffModifiedBg: string
	diffModifiedFg: string
	diffRemovedBg: string
	diffRemovedFg: string

	gitAdded: string
	gitModified: string
	gitDeleted: string
	gitUntracked: string
	gitIgnored: string

	diagError: string
	diagWarn: string
	diagInfo: string
	diagHint: string

	statusBarBg: string
	statusBarFg: string
	statusBarBgDebug: string
	statusBarBgNoFolder: string

	activityBarBg: string
	activityBarFg: string
	activityBarBadgeBg: string
	activityBarBadgeFg: string

	sideBarBg: string
	sideBarFg: string
	sideBarHeaderFg: string
	sideBarBorder: string

	tabActiveBg: string
	tabActiveFg: string
	tabInactiveBg: string
	tabInactiveFg: string
	tabBorder: string
	tabActiveBorderTop: string

	titleBarActiveBg: string
	titleBarActiveFg: string
	titleBarInactiveBg: string
	titleBarInactiveFg: string

	panelBg: string
	panelBorder: string
	panelTitleActiveFg: string
	panelTitleActiveBorder: string

	popupBg: string
	popupFg: string
	popupBorder: string
	popupSelectionBg: string
	popupSelectionFg: string

	inputBg: string
	inputFg: string
	inputBorder: string
	inputBorderFocus: string
	inputPlaceholder: string

	buttonBg: string
	buttonFg: string
	buttonHoverBg: string

	scrollbarSlider: string
	scrollbarSliderHover: string
	scrollbarSliderActive: string

	minimapFindMatch: string
	minimapSelection: string

	breadcrumbFg: string
	breadcrumbFocusFg: string
	breadcrumbBg: string

	peekViewBorder: string
	peekViewBg: string
	peekViewTitleBg: string
	peekViewMatchHL: string
	peekViewResultsMatchHL: string

	notifBg: string
	notifFg: string
	notifBorder: string

	focusBorder: string
	selectionBg: string
	progressBarBg: string
}

export function makeUIColors(v: ResolvedVariant): UIColors & ResolvedVariant {
	const p = v.palette

	return {
		...v,

		// Editor core
		editorBg: v.bg,
		editorFg: v.fg,
		editorLineHighlight: v.bgBright,
		editorCursor: p.base0,
		editorSelection: v.bgBright,
		editorSelectionHL: v.bgBright + "80",

		// Line numbers
		lineNr: v.fgDim,
		lineNrActive: v.fgBright,

		// Whitespace / indentation
		whitespace: v.bgBright,
		indentGuide: v.bgBright,
		indentGuideActive: v.fgDim,

		// Bracket matching
		matchBracketBg: v.fgDim,
		matchBracketFg: p.red,

		// Search
		findMatch: p.yellow + "50",
		findMatchBorder: p.yellow,
		findMatchHL: p.orange + "50",
		findMatchHLBorder: p.orange,

		// Diff
		diffAddedBg: p.green + "22",
		diffAddedFg: p.green,
		diffModifiedBg: p.yellow + "22",
		diffModifiedFg: p.yellow,
		diffRemovedBg: p.red + "22",
		diffRemovedFg: p.red,

		// Git decorations
		gitAdded: p.green,
		gitModified: p.yellow,
		gitDeleted: p.red,
		gitUntracked: p.cyan,
		gitIgnored: v.fgDim,

		// Diagnostics
		diagError: p.red,
		diagWarn: p.yellow,
		diagInfo: p.cyan,
		diagHint: p.green,

		// Status bar -- flat bg; fgBright (Solarized step-up)
		statusBarBg: v.bgBright,
		statusBarFg: v.fgBright,
		statusBarBgDebug: p.orange,
		statusBarBgNoFolder: v.bg,

		// Activity bar -- flat bg, primary fg
		activityBarBg: v.bg,
		activityBarFg: v.fg,
		activityBarBadgeBg: p.cyan,
		activityBarBadgeFg: v.bg,

		// Side bar -- flat bg, primary fg
		sideBarBg: v.bg,
		sideBarFg: v.fg,
		sideBarHeaderFg: v.fgDim,
		sideBarBorder: v.border,

		// Tabs -- flat bg
		tabActiveBg: v.bg,
		tabActiveFg: v.fgBright,
		tabInactiveBg: v.bgBright,
		tabInactiveFg: v.fgSubtle,
		tabBorder: v.border,
		tabActiveBorderTop: p.cyan,

		// Title bar -- flat bg; fgBright
		titleBarActiveBg: v.bg,
		titleBarActiveFg: v.fg,
		titleBarInactiveBg: v.bg,
		titleBarInactiveFg: v.fgSubtle,

		// Panel -- flat bg
		panelBg: v.bg,
		panelBorder: v.border,
		panelTitleActiveFg: p.yellow,
		panelTitleActiveBorder: p.cyan,

		// Popup / widget -- bgBright surface; fgBright
		popupBg: v.bgBright,
		popupFg: v.fgBright,
		popupBorder: v.border,
		popupSelectionBg: v.fgDim,
		popupSelectionFg: v.bg,

		// Input -- bgBright surface; fgBright
		inputBg: v.bgBright,
		inputFg: v.fgBright,
		inputBorder: v.border,
		inputBorderFocus: p.cyan,
		inputPlaceholder: v.fgSubtle,

		// Buttons
		buttonBg: p.cyan,
		buttonFg: v.bg,
		buttonHoverBg: p.blue,

		// Scrollbar
		scrollbarSlider: v.fgDim + "40",
		scrollbarSliderHover: v.fgDim + "70",
		scrollbarSliderActive: v.fgDim + "99",

		// Minimap
		minimapFindMatch: p.orange,
		minimapSelection: v.fgDim,

		// Breadcrumbs
		breadcrumbFg: v.fgDim,
		breadcrumbFocusFg: v.fg,
		breadcrumbBg: v.bg,

		// Peek view -- bgBright surface
		peekViewBorder: p.cyan,
		peekViewBg: v.bgBright,
		peekViewTitleBg: v.bgBright,
		peekViewMatchHL: p.orange + "50",
		peekViewResultsMatchHL: p.cyan + "40",

		// Notifications -- bgBright surface; fgBright
		notifBg: v.bgBright,
		notifFg: v.fgBright,
		notifBorder: v.border,

		// Misc
		focusBorder: p.cyan,
		selectionBg: v.bgBright,
		progressBarBg: p.cyan,
	}
}
