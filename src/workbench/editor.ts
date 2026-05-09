/**
 * Editor surface tokens
 * background, foreground, cursor, selections, line highlight,
 * whitespace, indent guides, rulers, matching brackets, hover,
 * code lens, lightbulb, sticky scroll, inline hints, ghost text
 */
import type { UIColors, ResolvedVariant } from "../colors";

type Theme = UIColors & ResolvedVariant;

export function editor(ui: Theme): Record<string, string> {
  return {
    // Core
    "editor.background":                              ui.editorBg,
    "editor.foreground":                              ui.editorFg,

    // Line highlight (CursorLine -> base02)
    "editor.lineHighlightBackground":                 ui.editorLineHighlight,
    "editor.lineHighlightBorder":                     "#00000000",

    // Cursor
    "editorCursor.foreground":                        ui.editorCursor,
    "editorCursor.background":                        ui.editorBg,

    // Selections / word highlights (Visual -> base02)
    "editor.selectionBackground":                     ui.editorSelection,
    "editor.selectionForeground":                     ui.editorFg,
    "editor.inactiveSelectionBackground":             ui.editorSelectionHL,
    "editor.selectionHighlightBackground":            ui.editorSelectionHL,
    "editor.selectionHighlightBorder":                "#00000000",

    // Word under cursor
    "editor.wordHighlightBackground":                 ui.bgBright + "80",
    "editor.wordHighlightBorder":                     ui.border + "60",
    "editor.wordHighlightStrongBackground":           ui.bgBright,
    "editor.wordHighlightStrongBorder":               ui.border,
    "editor.wordHighlightTextBackground":             ui.bgBright + "60",
    "editor.wordHighlightTextBorder":                 "#00000000",

    // Search / find (Search -> yellow, IncSearch -> orange)
    "editor.findMatchBackground":                     ui.findMatch,
    "editor.findMatchBorder":                         ui.findMatchBorder,
    "editor.findMatchHighlightBackground":            ui.findMatchHL,
    "editor.findMatchHighlightBorder":                ui.findMatchHLBorder,
    "editor.findRangeHighlightBackground":            ui.bgBright + "60",
    "editor.findRangeHighlightBorder":                "#00000000",
    "editor.rangeHighlightBackground":                ui.bgBright + "40",
    "editor.rangeHighlightBorder":                    "#00000000",
    "editor.symbolHighlightBackground":               ui.findMatchHL,
    "editor.symbolHighlightBorder":                   ui.findMatchHLBorder,

    // Whitespace (NonText -> base00)
    "editorWhitespace.foreground":                    ui.whitespace,

    // Indent guides
    "editorIndentGuide.background1":                  ui.indentGuide,
    "editorIndentGuide.activeBackground1":            ui.indentGuideActive,

    // Rulers
    "editorRuler.foreground":                         ui.indentGuide,

    // Line numbers (LineNr -> base01, CursorLineNr -> base1)
    "editorLineNumber.foreground":                    ui.lineNr,
    "editorLineNumber.activeForeground":              ui.lineNrActive,
    "editorLineNumber.dimmedForeground":              ui.lineNr + "80",

    // Matching brackets (MatchParen -> red fg, base01 bg)
    "editorBracketMatch.background":                  ui.matchBracketBg + "60",
    "editorBracketMatch.border":                      ui.matchBracketFg,

    // Bracket pair colorization -- map to theme accents
    "editorBracketHighlight.foreground1":             ui.cyan,
    "editorBracketHighlight.foreground2":             ui.yellow,
    "editorBracketHighlight.foreground3":             ui.magenta,
    "editorBracketHighlight.foreground4":             ui.green,
    "editorBracketHighlight.foreground5":             ui.orange,
    "editorBracketHighlight.foreground6":             ui.violet,
    "editorBracketHighlight.unexpectedBracket.foreground": ui.red,

    // Bracket pair guides
    "editorBracketPairGuide.activeBackground1":       ui.cyan + "40",
    "editorBracketPairGuide.activeBackground2":       ui.yellow + "40",
    "editorBracketPairGuide.activeBackground3":       ui.magenta + "40",
    "editorBracketPairGuide.activeBackground4":       ui.green + "40",
    "editorBracketPairGuide.activeBackground5":       ui.orange + "40",
    "editorBracketPairGuide.activeBackground6":       ui.violet + "40",
    "editorBracketPairGuide.background1":             ui.indentGuide,
    "editorBracketPairGuide.background2":             ui.indentGuide,
    "editorBracketPairGuide.background3":             ui.indentGuide,
    "editorBracketPairGuide.background4":             ui.indentGuide,
    "editorBracketPairGuide.background5":             ui.indentGuide,
    "editorBracketPairGuide.background6":             ui.indentGuide,

    // Code lens (subtle, uses comment color)
    "editorCodeLens.foreground":                      ui.fgDim,

    // Lightbulb
    "editorLightBulb.foreground":                     ui.yellow,
    "editorLightBulbAutoFix.foreground":              ui.cyan,
    "editorLightBulbAi.foreground":                   ui.violet,

    // Linked editing (rename highlight)
    "editor.linkedEditingBackground":                 ui.findMatchHL,

    // Snippets
    "editor.snippetTabstopHighlightBackground":       ui.bgBright,
    "editor.snippetTabstopHighlightBorder":           ui.border,
    "editor.snippetFinalTabstopHighlightBackground":  ui.focusBorder + "30",
    "editor.snippetFinalTabstopHighlightBorder":      ui.focusBorder,

    // Hover widget (NormalFloat -> base02)
    "editorHoverWidget.background":                   ui.popupBg,
    "editorHoverWidget.foreground":                   ui.popupFg,
    "editorHoverWidget.border":                       ui.popupBorder,
    "editorHoverWidget.highlightForeground":          ui.cyan,
    "editorHoverWidget.statusBarBackground":          ui.bgBright,

    // Ghost text (inline suggestions)
    "editorGhostText.foreground":                     ui.fgDim + "80",
    "editorGhostText.background":                     "#00000000",
    "editorGhostText.border":                         "#00000000",

    // Inline hints (go-to definition previews etc.)
    "editorInlayHint.background":                     ui.bgBright,
    "editorInlayHint.foreground":                     ui.fgDim,
    "editorInlayHint.typeForeground":                 ui.yellow,
    "editorInlayHint.typeBackground":                 ui.bgBright,
    "editorInlayHint.parameterForeground":            ui.orange,
    "editorInlayHint.parameterBackground":            ui.bgBright,

    // Sticky scroll
    "editorStickyScroll.background":                  ui.editorBg,
    "editorStickyScroll.border":                      ui.border,
    "editorStickyScroll.shadow":                      "#00000033",
    "editorStickyScrollHover.background":             ui.bgBright,

    // Gutter decorations (sign column -- SignColumn -> base0 on none)
    "editorGutter.background":                        ui.editorBg,
    "editorGutter.addedBackground":                   ui.gitAdded,
    "editorGutter.modifiedBackground":                ui.gitModified,
    "editorGutter.deletedBackground":                 ui.gitDeleted,
    "editorGutter.commentRangeForeground":            ui.fgDim,
    "editorGutter.commentGlyphForeground":            ui.fgDim,
    "editorGutter.foldingControlForeground":          ui.fgDim,

    // Overview ruler (minimap-adjacent)
    "editorOverviewRuler.border":                     ui.border + "40",
    "editorOverviewRuler.findMatchForeground":        ui.findMatchBorder,
    "editorOverviewRuler.rangeHighlightForeground":   ui.cyan + "80",
    "editorOverviewRuler.selectionHighlightForeground": ui.editorSelection,
    "editorOverviewRuler.wordHighlightForeground":    ui.fgDim + "80",
    "editorOverviewRuler.wordHighlightStrongForeground": ui.editorFg + "80",
    "editorOverviewRuler.wordHighlightTextForeground": ui.fgDim + "60",
    "editorOverviewRuler.addedForeground":            ui.gitAdded + "99",
    "editorOverviewRuler.modifiedForeground":         ui.gitModified + "99",
    "editorOverviewRuler.deletedForeground":          ui.gitDeleted + "99",
    "editorOverviewRuler.errorForeground":            ui.diagError,
    "editorOverviewRuler.warningForeground":          ui.diagWarn,
    "editorOverviewRuler.infoForeground":             ui.diagInfo,
    "editorOverviewRuler.bracketMatchForeground":     ui.matchBracketFg + "80",
    "editorOverviewRuler.inlineChatInserted":         ui.gitAdded + "80",
    "editorOverviewRuler.inlineChatRemoved":          ui.gitDeleted + "80",

    // Diff editor (DiffAdd/Change/Delete/Text)
    "diffEditor.insertedTextBackground":              ui.diffAddedBg,
    "diffEditor.insertedTextBorder":                  "#00000000",
    "diffEditor.removedTextBackground":               ui.diffRemovedBg,
    "diffEditor.removedTextBorder":                   "#00000000",
    "diffEditor.insertedLineBackground":              ui.diffAddedBg,
    "diffEditor.removedLineBackground":               ui.diffRemovedBg,
    "diffEditor.gutterInsertedLineBackground":        ui.diffAddedBg,
    "diffEditor.gutterRemovedLineBackground":         ui.diffRemovedBg,
    "diffEditor.gutterInsertedLineForeground":        ui.diffAddedFg,
    "diffEditor.gutterRemovedLineForeground":         ui.diffRemovedFg,
    "diffEditor.diagonalFill":                        ui.border + "40",
    "diffEditor.unchangedRegionBackground":           ui.editorBg,
    "diffEditor.unchangedRegionForeground":           ui.fgDim,
    "diffEditor.unchangedCodeBackground":             ui.bgBright + "40",
    "diffEditor.move.border":                         ui.blue + "60",
    "diffEditor.moveActive.border":                   ui.blue,

    // Diff editor overview
    "diffEditorOverview.insertedForeground":          ui.diffAddedFg,
    "diffEditorOverview.removedForeground":           ui.diffRemovedFg,

    // Multi-diff editor
    "multiDiffEditor.background":                     ui.editorBg,
    "multiDiffEditor.border":                         ui.border,
    "multiDiffEditor.headerBackground":               ui.bgBright,

    // Folding (Folded -> base0 on base02, bold)
    "editor.foldBackground":                          ui.bgBright,
    "editor.foldPlaceholderForeground":               ui.fgDim,

    // Inline chat / AI edits
    "inlineChatInput.background":                     ui.inputBg,
    "inlineChatInput.border":                         ui.inputBorder,
    "inlineChatInput.focusBorder":                    ui.focusBorder,
    "inlineChatInput.placeholderForeground":          ui.inputPlaceholder,
    "inlineChat.background":                          ui.popupBg,
    "inlineChat.border":                              ui.popupBorder,
    "inlineChat.shadow":                              "#00000033",
    "inlineChat.regionHighlight":                     ui.bgBright + "80",
    "inlineChatDiff.inserted":                        ui.diffAddedBg,
    "inlineChatDiff.removed":                         ui.diffRemovedBg,

    // Merge editor
    "mergeEditor.change.background":                  ui.diffModifiedBg,
    "mergeEditor.change.word.background":             ui.diffModifiedBg,
    "mergeEditor.conflict.unhandledUnfocused.border": ui.diagWarn + "80",
    "mergeEditor.conflict.unhandledFocused.border":   ui.diagWarn,
    "mergeEditor.conflict.handledUnfocused.border":   ui.diagInfo + "80",
    "mergeEditor.conflict.handledFocused.border":     ui.diagInfo,
    "mergeEditor.conflict.handled.minimapOverViewRuler": ui.diagInfo,
    "mergeEditor.conflict.unhandled.minimapOverViewRuler": ui.diagWarn,
    "mergeEditor.conflictingLines.background":        ui.diffModifiedBg,
    "mergeEditor.changeBase.background":              ui.bgBright,
    "mergeEditor.changeBase.word.background":         ui.bgBright,
    "mergeEditor.conflict.input1.background":         ui.diffAddedBg,
    "mergeEditor.conflict.input2.background":         ui.diffModifiedBg,
  };
}
