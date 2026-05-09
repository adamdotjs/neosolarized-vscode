/**
 * Diagnostics, problems, testing, debug, and git decorations
 */
import type { ResolvedVariant, UIColors } from "../colors"
import { alpha } from "../utils/color"

type Theme = UIColors & ResolvedVariant

export function diagnostics(ui: Theme): Record<string, string> {
	return {
		// -----------------------------------------------------------------------
		// Diagnostic squiggles & text
		// -----------------------------------------------------------------------
		"editorError.foreground": ui.diagError,
		"editorError.background": "#00000000",
		"editorError.border": "#00000000",
		"editorWarning.foreground": ui.diagWarn,
		"editorWarning.background": "#00000000",
		"editorWarning.border": "#00000000",
		"editorInfo.foreground": ui.diagInfo,
		"editorInfo.background": "#00000000",
		"editorInfo.border": "#00000000",
		"editorHint.foreground": ui.diagHint,
		"editorHint.border": "#00000000",

		// Problems panel
		"problemsErrorIcon.foreground": ui.diagError,
		"problemsWarningIcon.foreground": ui.diagWarn,
		"problemsInfoIcon.foreground": ui.diagInfo,

		// -----------------------------------------------------------------------
		// Peek view (LspSaga / go-to-definition style)
		// -----------------------------------------------------------------------
		"peekView.border": ui.cyan,
		"peekViewEditor.background": ui.bgBright,
		"peekViewEditor.matchHighlightBackground": ui.peekViewMatchHL,
		"peekViewEditor.matchHighlightBorder": ui.orange,
		"peekViewEditorGutter.background": ui.bgBright,
		"peekViewEditorStickyScroll.background": ui.bgBright,
		"peekViewResult.background": ui.bgBright,
		"peekViewResult.fileForeground": ui.fg,
		"peekViewResult.lineForeground": ui.fgDim,
		"peekViewResult.matchHighlightBackground": ui.peekViewResultsMatchHL,
		"peekViewResult.selectionBackground": ui.popupSelectionBg,
		"peekViewResult.selectionForeground": ui.popupSelectionFg,
		"peekViewTitle.background": ui.bgBright,
		"peekViewTitleDescription.foreground": ui.fgDim,
		"peekViewTitleLabel.foreground": ui.fg,

		// -----------------------------------------------------------------------
		// Git decorations (file explorer)
		// -----------------------------------------------------------------------
		"gitDecoration.addedResourceForeground": ui.gitAdded,
		"gitDecoration.modifiedResourceForeground": ui.gitModified,
		"gitDecoration.deletedResourceForeground": ui.gitDeleted,
		"gitDecoration.renamedResourceForeground": ui.gitAdded,
		"gitDecoration.stageModifiedResourceForeground": ui.gitModified,
		"gitDecoration.stageDeletedResourceForeground": ui.gitDeleted,
		"gitDecoration.untrackedResourceForeground": ui.gitUntracked,
		"gitDecoration.ignoredResourceForeground": ui.gitIgnored,
		"gitDecoration.conflictingResourceForeground": ui.red,
		"gitDecoration.submoduleResourceForeground": ui.violet,

		// -----------------------------------------------------------------------
		// Source control (SCM) view
		// -----------------------------------------------------------------------
		"scm.providerBorder": ui.border,
		"scmGraph.historyItemHoverDefaultLabelForeground": ui.fg,
		"scmGraph.historyItemHoverDefaultLabelBackground": ui.bgBright,
		"scmGraph.historyItemHoverAdditionsForeground": ui.gitAdded,
		"scmGraph.historyItemHoverDeletionsForeground": ui.gitDeleted,
		"scmGraph.historyItemRefColor": ui.blue,
		"scmGraph.historyItemRemoteRefColor": ui.violet,
		"scmGraph.historyItemHeadRefColor": ui.cyan,
		"scmGraph.historyItemTagRefColor": ui.yellow,

		// -----------------------------------------------------------------------
		// Debug
		// -----------------------------------------------------------------------
		"debugToolBar.background": ui.popupBg,
		"debugToolBar.border": ui.border,
		"editor.stackFrameHighlightBackground": alpha(ui.yellow, 19),
		"editor.focusedStackFrameHighlightBackground": alpha(ui.green, 19),
		"editor.inlineValuesForeground": ui.fgDim,
		"editor.inlineValuesBackground": alpha(ui.bgBright, 50),
		"debugView.exceptionLabelBackground": alpha(ui.red, 25),
		"debugView.exceptionLabelForeground": ui.red,
		"debugView.stateLabelBackground": ui.bgBright,
		"debugView.stateLabelForeground": ui.cyan,
		"debugView.valueChangedHighlight": ui.cyan,
		"debugTokenExpression.name": ui.blue,
		"debugTokenExpression.value": ui.cyan,
		"debugTokenExpression.string": ui.cyan,
		"debugTokenExpression.boolean": ui.cyan,
		"debugTokenExpression.number": ui.cyan,
		"debugTokenExpression.error": ui.diagError,
		"debugConsole.infoForeground": ui.diagInfo,
		"debugConsole.warningForeground": ui.diagWarn,
		"debugConsole.errorForeground": ui.diagError,
		"debugConsole.sourceForeground": ui.fgDim,
		"debugConsoleInputIcon.foreground": ui.cyan,
		"debugIcon.breakpointForeground": ui.red,
		"debugIcon.breakpointDisabledForeground": ui.fgDim,
		"debugIcon.breakpointUnverifiedForeground": ui.orange,
		"debugIcon.breakpointCurrentStackframeForeground": ui.yellow,
		"debugIcon.breakpointStackframeForeground": alpha(ui.yellow, 50),
		"debugIcon.startForeground": ui.green,
		"debugIcon.pauseForeground": ui.yellow,
		"debugIcon.stopForeground": ui.red,
		"debugIcon.disconnectForeground": ui.orange,
		"debugIcon.restartForeground": ui.cyan,
		"debugIcon.stepOverForeground": ui.blue,
		"debugIcon.stepIntoForeground": ui.blue,
		"debugIcon.stepOutForeground": ui.blue,
		"debugIcon.continueForeground": ui.green,
		"debugIcon.stepBackForeground": ui.violet,

		// -----------------------------------------------------------------------
		// Testing
		// -----------------------------------------------------------------------
		"testing.iconFailed": ui.diagError,
		"testing.iconErrored": ui.diagError,
		"testing.iconPassed": ui.diagHint,
		"testing.iconQueued": ui.diagInfo,
		"testing.iconUnset": ui.fgDim,
		"testing.iconSkipped": ui.fgDim,
		"testing.peekBorder": ui.cyan,
		"testing.peekHeaderBackground": ui.bgBright,
		"testing.runAction": ui.diagHint,
		"testing.message.error.decorationForeground": ui.diagError,
		"testing.message.error.lineBackground": alpha(ui.red, 13),
		"testing.message.info.decorationForeground": ui.diagInfo,
		"testing.message.info.lineBackground": alpha(ui.cyan, 13),
		"testing.messagePeekBorder": ui.cyan,
		"testing.messagePeekHeaderBackground": ui.bgBright,
		"testing.coveredBackground": alpha(ui.green, 13),
		"testing.coveredBorder": alpha(ui.green, 25),
		"testing.coveredGutterBackground": alpha(ui.green, 25),
		"testing.uncoveredBranchBackground": alpha(ui.red, 19),
		"testing.uncoveredBackground": alpha(ui.red, 13),
		"testing.uncoveredBorder": alpha(ui.red, 25),
		"testing.uncoveredGutterBackground": alpha(ui.red, 25),
		"testing.coverCountBadgeBackground": ui.bgBright,
		"testing.coverCountBadgeForeground": ui.fg,
	}
}
