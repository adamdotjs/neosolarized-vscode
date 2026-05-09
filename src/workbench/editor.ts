/**
 * Editor surface tokens
 * background, foreground, cursor, selections, line highlight,
 * whitespace, indent guides, rulers, matching brackets, hover,
 * code lens, lightbulb, sticky scroll, inline hints, ghost text
 */
import type { ResolvedVariant, UIColors } from "../colors"
import { alpha } from "../utils/color"

type Theme = UIColors & ResolvedVariant

export function editor(ui: Theme): Record<string, string> {
	return {
		// Core
		"editor.background": ui.bg,
		"editor.foreground": ui.fg,

		// Line highlight (CursorLine -> base02)
		"editor.lineHighlightBackground": ui.editorLineHighlight,
		"editor.lineHighlightBorder": "#00000000",

		// Cursor
		"editorCursor.foreground": ui.editorCursor,
		"editorCursor.background": ui.bg,

		// Selections / word highlights (Visual -> base02)
		"editor.selectionBackground": ui.editorSelection,
		"editor.selectionForeground": ui.fg,
		"editor.inactiveSelectionBackground": ui.editorSelectionHL,
		"editor.selectionHighlightBackground": ui.editorSelectionHL,
		"editor.selectionHighlightBorder": "#00000000",

		// Word under cursor
		"editor.wordHighlightBackground": alpha(ui.bgBright, 50),
		"editor.wordHighlightBorder": alpha(ui.border, 38),
		"editor.wordHighlightStrongBackground": ui.bgBright,
		"editor.wordHighlightStrongBorder": ui.border,
		"editor.wordHighlightTextBackground": alpha(ui.bgBright, 38),
		"editor.wordHighlightTextBorder": "#00000000",

		// Search / find (Search -> yellow, IncSearch -> orange)
		"editor.findMatchBackground": ui.findMatch,
		"editor.findMatchBorder": ui.findMatchBorder,
		"editor.findMatchHighlightBackground": ui.findMatchHL,
		"editor.findMatchHighlightBorder": ui.findMatchHLBorder,
		"editor.findRangeHighlightBackground": alpha(ui.bgBright, 38),
		"editor.findRangeHighlightBorder": "#00000000",
		"editor.rangeHighlightBackground": alpha(ui.bgBright, 25),
		"editor.rangeHighlightBorder": "#00000000",
		"editor.symbolHighlightBackground": ui.findMatchHL,
		"editor.symbolHighlightBorder": ui.findMatchHLBorder,

		// Whitespace (NonText -> base00)
		"editorWhitespace.foreground": ui.bgBright,

		// Indent guides
		"editorIndentGuide.background1": ui.bgBright,
		"editorIndentGuide.activeBackground1": ui.bgBrightActive,

		// Rulers
		"editorRuler.foreground": ui.bgBright,

		// Line numbers (LineNr -> base01, CursorLineNr -> base1)
		"editorLineNumber.foreground": ui.lineNr,
		"editorLineNumber.activeForeground": ui.lineNrActive,
		"editorLineNumber.dimmedForeground": alpha(ui.lineNr, 50),

		// Matching brackets (MatchParen -> red fg, base01 bg)
		"editorBracketMatch.background": alpha(ui.matchBracketBg, 38),
		"editorBracketMatch.border": ui.matchBracketFg,

		// Bracket pair colorization -- map to theme accents
		"editorBracketHighlight.foreground1": ui.cyan,
		"editorBracketHighlight.foreground2": ui.yellow,
		"editorBracketHighlight.foreground3": ui.magenta,
		"editorBracketHighlight.foreground4": ui.green,
		"editorBracketHighlight.foreground5": ui.orange,
		"editorBracketHighlight.foreground6": ui.violet,
		"editorBracketHighlight.unexpectedBracket.foreground": ui.red,

		// Bracket pair guides
		"editorBracketPairGuide.activeBackground1": alpha(ui.cyan, 25),
		"editorBracketPairGuide.activeBackground2": alpha(ui.yellow, 25),
		"editorBracketPairGuide.activeBackground3": alpha(ui.magenta, 25),
		"editorBracketPairGuide.activeBackground4": alpha(ui.green, 25),
		"editorBracketPairGuide.activeBackground5": alpha(ui.orange, 25),
		"editorBracketPairGuide.activeBackground6": alpha(ui.violet, 25),
		"editorBracketPairGuide.background1": ui.bgBright,
		"editorBracketPairGuide.background2": ui.bgBright,
		"editorBracketPairGuide.background3": ui.bgBright,
		"editorBracketPairGuide.background4": ui.bgBright,
		"editorBracketPairGuide.background5": ui.bgBright,
		"editorBracketPairGuide.background6": ui.bgBright,

		// Code lens (subtle, uses comment color)
		"editorCodeLens.foreground": ui.fgDim,

		// Lightbulb
		"editorLightBulb.foreground": ui.yellow,
		"editorLightBulbAutoFix.foreground": ui.cyan,
		"editorLightBulbAi.foreground": ui.violet,

		// Linked editing (rename highlight)
		"editor.linkedEditingBackground": ui.findMatchHL,

		// Snippets
		"editor.snippetTabstopHighlightBackground": ui.bgBright,
		"editor.snippetTabstopHighlightBorder": ui.border,
		"editor.snippetFinalTabstopHighlightBackground": alpha(ui.focusBorder, 19),
		"editor.snippetFinalTabstopHighlightBorder": ui.focusBorder,

		// Hover widget (NormalFloat -> base02)
		"editorHoverWidget.background": ui.popupBg,
		"editorHoverWidget.foreground": ui.popupFg,
		"editorHoverWidget.border": ui.border,
		"editorHoverWidget.highlightForeground": ui.cyan,
		"editorHoverWidget.statusBarBackground": ui.bgBright,

		// Ghost text (inline suggestions)
		"editorGhostText.foreground": alpha(ui.fgDim, 50),
		"editorGhostText.background": "#00000000",
		"editorGhostText.border": "#00000000",

		// Inline hints (go-to definition previews etc.)
		"editorInlayHint.background": ui.bgBright,
		"editorInlayHint.foreground": ui.fgDim,
		"editorInlayHint.typeForeground": ui.yellow,
		"editorInlayHint.typeBackground": ui.bgBright,
		"editorInlayHint.parameterForeground": ui.orange,
		"editorInlayHint.parameterBackground": ui.bgBright,

		// Sticky scroll
		"editorStickyScroll.background": ui.bg,
		"editorStickyScroll.border": ui.border,
		"editorStickyScroll.shadow": "#00000033",
		"editorStickyScrollHover.background": ui.bgBright,

		// Gutter decorations (sign column -- SignColumn -> base0 on none)
		"editorGutter.background": ui.bg,
		"editorGutter.addedBackground": ui.gitAdded,
		"editorGutter.modifiedBackground": ui.gitModified,
		"editorGutter.deletedBackground": ui.gitDeleted,
		"editorGutter.commentRangeForeground": ui.fgDim,
		"editorGutter.commentGlyphForeground": ui.fgDim,
		"editorGutter.foldingControlForeground": ui.fgDim,

		// Overview ruler (minimap-adjacent)
		"editorOverviewRuler.border": alpha(ui.border, 25),
		"editorOverviewRuler.findMatchForeground": ui.findMatchBorder,
		"editorOverviewRuler.rangeHighlightForeground": alpha(ui.cyan, 50),
		"editorOverviewRuler.selectionHighlightForeground": ui.editorSelection,
		"editorOverviewRuler.wordHighlightForeground": alpha(ui.fgDim, 50),
		"editorOverviewRuler.wordHighlightStrongForeground": alpha(ui.fg, 50),
		"editorOverviewRuler.wordHighlightTextForeground": alpha(ui.fgDim, 38),
		"editorOverviewRuler.addedForeground": alpha(ui.gitAdded, 60),
		"editorOverviewRuler.modifiedForeground": alpha(ui.gitModified, 60),
		"editorOverviewRuler.deletedForeground": alpha(ui.gitDeleted, 60),
		"editorOverviewRuler.errorForeground": ui.diagError,
		"editorOverviewRuler.warningForeground": ui.diagWarn,
		"editorOverviewRuler.infoForeground": ui.diagInfo,
		"editorOverviewRuler.bracketMatchForeground": alpha(ui.matchBracketFg, 50),
		"editorOverviewRuler.inlineChatInserted": alpha(ui.gitAdded, 50),
		"editorOverviewRuler.inlineChatRemoved": alpha(ui.gitDeleted, 50),

		// Diff editor (DiffAdd/Change/Delete/Text)
		"diffEditor.insertedTextBackground": ui.diffAddedBg,
		"diffEditor.insertedTextBorder": "#00000000",
		"diffEditor.removedTextBackground": ui.diffRemovedBg,
		"diffEditor.removedTextBorder": "#00000000",
		"diffEditor.insertedLineBackground": ui.diffAddedBg,
		"diffEditor.removedLineBackground": ui.diffRemovedBg,
		"diffEditor.gutterInsertedLineBackground": ui.diffAddedBg,
		"diffEditor.gutterRemovedLineBackground": ui.diffRemovedBg,
		"diffEditor.gutterInsertedLineForeground": ui.diffAddedFg,
		"diffEditor.gutterRemovedLineForeground": ui.diffRemovedFg,
		"diffEditor.diagonalFill": alpha(ui.border, 25),
		"diffEditor.unchangedRegionBackground": ui.bg,
		"diffEditor.unchangedRegionForeground": ui.fgDim,
		"diffEditor.unchangedCodeBackground": alpha(ui.bgBright, 25),
		"diffEditor.move.border": alpha(ui.blue, 38),
		"diffEditor.moveActive.border": ui.blue,

		// Diff editor overview
		"diffEditorOverview.insertedForeground": ui.diffAddedFg,
		"diffEditorOverview.removedForeground": ui.diffRemovedFg,

		// Multi-diff editor
		"multiDiffEditor.background": ui.bg,
		"multiDiffEditor.border": ui.border,
		"multiDiffEditor.headerBackground": ui.bgBright,

		// Folding (Folded -> base0 on base02, bold)
		"editor.foldBackground": ui.bgBright,
		"editor.foldPlaceholderForeground": ui.fgDim,

		// Inline chat / AI edits
		"inlineChatInput.background": ui.bgBright,
		"inlineChatInput.border": ui.border,
		"inlineChatInput.focusBorder": ui.focusBorder,
		"inlineChatInput.placeholderForeground": ui.inputPlaceholder,
		"inlineChat.background": ui.popupBg,
		"inlineChat.border": ui.border,
		"inlineChat.shadow": "#00000033",
		"inlineChat.regionHighlight": alpha(ui.bgBright, 50),
		"inlineChatDiff.inserted": ui.diffAddedBg,
		"inlineChatDiff.removed": ui.diffRemovedBg,

		// Merge editor
		"mergeEditor.change.background": ui.diffModifiedBg,
		"mergeEditor.change.word.background": ui.diffModifiedBg,
		"mergeEditor.conflict.unhandledUnfocused.border": alpha(ui.diagWarn, 50),
		"mergeEditor.conflict.unhandledFocused.border": ui.diagWarn,
		"mergeEditor.conflict.handledUnfocused.border": alpha(ui.diagInfo, 50),
		"mergeEditor.conflict.handledFocused.border": ui.diagInfo,
		"mergeEditor.conflict.handled.minimapOverViewRuler": ui.diagInfo,
		"mergeEditor.conflict.unhandled.minimapOverViewRuler": ui.diagWarn,
		"mergeEditor.conflictingLines.background": ui.diffModifiedBg,
		"mergeEditor.changeBase.background": ui.bgBright,
		"mergeEditor.changeBase.word.background": ui.bgBright,
		"mergeEditor.conflict.input1.background": ui.diffAddedBg,
		"mergeEditor.conflict.input2.background": ui.diffModifiedBg,
	}
}
