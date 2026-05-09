/**
 * Base / global tokens
 * focus borders, selections, shadows, progress, badges, icons
 */
import type { ResolvedVariant, UIColors } from "../colors"

type Theme = UIColors & ResolvedVariant

export function base(ui: Theme): Record<string, string> {
	return {
		// Universal focus ring (TelescopePromptBorder, LspSaga borders -> cyan)
		focusBorder: ui.focusBorder,
		foreground: ui.editorFg,
		disabledForeground: ui.fgDim,
		"widget.border": ui.border,
		"widget.shadow": "#00000033",
		"selection.background": ui.selectionBg,
		descriptionForeground: ui.fgDim,
		errorForeground: ui.diagError,
		"icon.foreground": ui.editorFg,
		"sash.hoverBorder": ui.focusBorder,

		// Window / draggable area
		"window.activeBorder": ui.focusBorder,
		"window.inactiveBorder": ui.border,

		// Progress bar (cyan)
		"progressBar.background": ui.progressBarBg,

		// Badges (activity bar notification dots, etc.)
		"badge.background": ui.activityBarBadgeBg,
		"badge.foreground": ui.activityBarBadgeFg,

		// Links
		"textLink.foreground": ui.focusBorder,
		"textLink.activeForeground": ui.blue,
		"textPreformat.foreground": ui.cyan,
		"textPreformat.background": ui.popupBg,
		"textBlockQuote.background": ui.popupBg,
		"textBlockQuote.border": ui.focusBorder,
		"textSeparator.foreground": ui.border,
		"textCodeBlock.background": ui.popupBg,

		// Welcome page
		"welcomePage.background": ui.editorBg,
		"welcomePage.tileBackground": ui.popupBg,
		"welcomePage.tileHoverBackground": ui.bgBright,
		"welcomePage.tileBorder": ui.border,
		"welcomePage.progress.background": ui.border,
		"welcomePage.progress.foreground": ui.progressBarBg,
		"walkThrough.embeddedEditorBackground": ui.popupBg,
		"walkthrough.stepTitle.foreground": ui.editorFg,
	}
}
