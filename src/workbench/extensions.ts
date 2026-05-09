/**
 * Extensions marketplace, remote, ports, timeline, comments,
 * interactive notebooks, chat / Copilot, and terminal
 */
import type { UIColors, ResolvedVariant } from "../colors";

type Theme = UIColors & ResolvedVariant;

export function extensions(ui: Theme): Record<string, string> {
  return {
    // -----------------------------------------------------------------------
    // Extensions view
    // -----------------------------------------------------------------------
    "extensionButton.prominentBackground":          ui.buttonBg,
    "extensionButton.prominentForeground":          ui.buttonFg,
    "extensionButton.prominentHoverBackground":     ui.buttonHoverBg,
    "extensionButton.background":                   ui.buttonBg,
    "extensionButton.foreground":                   ui.buttonFg,
    "extensionButton.hoverBackground":              ui.buttonHoverBg,
    "extensionButton.separator":                    ui.buttonFg + "80",
    "extensionBadge.remoteBackground":              ui.cyan,
    "extensionBadge.remoteForeground":              ui.editorBg,
    "extensionIcon.starForeground":                 ui.yellow,
    "extensionIcon.verifiedForeground":             ui.cyan,
    "extensionIcon.preReleaseForeground":           ui.orange,
    "extensionIcon.sponsorForeground":              ui.magenta,

    // -----------------------------------------------------------------------
    // Terminal
    // -----------------------------------------------------------------------
    "terminal.background":                          ui.panelBg,
    "terminal.foreground":                          ui.editorFg,
    "terminal.border":                              ui.panelBorder,
    "terminal.dropBackground":                      ui.bgBright + "80",
    "terminal.tab.activeBorder":                    ui.focusBorder,
    "terminalCursor.background":                    ui.editorBg,
    "terminalCursor.foreground":                    ui.editorCursor,
    "terminal.selectionBackground":                 ui.editorSelection,
    "terminal.selectionForeground":                 ui.editorFg,
    "terminal.inactiveSelectionBackground":         ui.editorSelectionHL,
    "terminal.findMatchBackground":                 ui.findMatch,
    "terminal.findMatchBorder":                     ui.findMatchBorder,
    "terminal.findMatchHighlightBackground":        ui.findMatchHL,
    "terminal.findMatchHighlightBorder":            ui.findMatchHLBorder,
    // ANSI colors mapped to Solarized palette
    "terminal.ansiBlack":                           ui.palette.base03,
    "terminal.ansiBrightBlack":                     ui.palette.base02,
    "terminal.ansiRed":                             ui.red,
    "terminal.ansiBrightRed":                       ui.orange,
    "terminal.ansiGreen":                           ui.green,
    "terminal.ansiBrightGreen":                     ui.palette.base01,
    "terminal.ansiYellow":                          ui.yellow,
    "terminal.ansiBrightYellow":                    ui.palette.base00,
    "terminal.ansiBlue":                            ui.blue,
    "terminal.ansiBrightBlue":                      ui.palette.base0,
    "terminal.ansiMagenta":                         ui.magenta,
    "terminal.ansiBrightMagenta":                   ui.violet,
    "terminal.ansiCyan":                            ui.cyan,
    "terminal.ansiBrightCyan":                      ui.palette.base1,
    "terminal.ansiWhite":                           ui.palette.base2,
    "terminal.ansiBrightWhite":                     ui.palette.base3,
    "terminal.initialHintForeground":               ui.fgDim,
    "terminalOverviewRuler.cursorForeground":        ui.editorCursor,
    "terminalOverviewRuler.findMatchForeground":     ui.findMatchBorder,
    "terminalCommandDecoration.defaultBackground":  ui.fgDim + "60",
    "terminalCommandDecoration.successBackground":  ui.green,
    "terminalCommandDecoration.errorBackground":    ui.red,
    "terminalStickyScroll.background":              ui.panelBg,
    "terminalStickyScrollHover.background":         ui.bgBright,

    // -----------------------------------------------------------------------
    // Remote / SSH / WSL
    // -----------------------------------------------------------------------
    "ports.iconRunningProcessForeground":           ui.green,

    // -----------------------------------------------------------------------
    // Timeline
    // -----------------------------------------------------------------------
    "timelineView.foreground":                      ui.editorFg,
    "timelineView.itemHoverBackground":             ui.bgBright + "80",

    // -----------------------------------------------------------------------
    // Comments / Review (PR review threads)
    // -----------------------------------------------------------------------
    "comments.background":                          ui.popupBg,
    "commentReply.background":                      ui.popupBg,
    "commentReply.inputForeground":                 ui.popupFg,
    "commentsView.resolvedIcon":                    ui.diagHint,
    "commentsView.unresolvedIcon":                  ui.diagWarn,

    // -----------------------------------------------------------------------
    // Interactive / Notebook
    // -----------------------------------------------------------------------
    "notebook.editorBackground":                    ui.editorBg,
    "notebook.cellBackground":                      ui.editorBg,
    "notebook.cellEditorBackground":                ui.editorBg,
    "notebook.cellBorderColor":                     ui.border,
    "notebook.focusedCellBackground":               ui.bgBright,
    "notebook.selectedCellBackground":              ui.bgBright + "80",
    "notebook.selectedCellBorder":                  ui.border,
    "notebook.focusedCellBorder":                   ui.focusBorder,
    "notebook.focusedEditorBorder":                 ui.focusBorder,
    "notebook.inactiveFocusedCellBorder":           ui.border,
    "notebook.inactiveSelectedCellBorder":          ui.border,
    "notebook.cellHoverBackground":                 ui.bgBright + "40",
    "notebook.cellStatusBarItemHoverBackground":    ui.bgBright,
    "notebook.cellInsertionIndicator":              ui.focusBorder,
    "notebook.cellToolbarSeparator":                ui.border,
    "notebook.outputContainerBorderColor":          ui.border,
    "notebook.outputContainerBackgroundColor":      ui.panelBg,
    "notebook.symbolHighlightBackground":           ui.findMatchHL,
    "notebookStatusSuccessIcon.foreground":         ui.diagHint,
    "notebookStatusErrorIcon.foreground":           ui.diagError,
    "notebookStatusRunningIcon.foreground":         ui.cyan,
    "notebookEditorOverviewRuler.runningCellForeground": ui.cyan,
    "notebookScrollbarSlider.background":           ui.scrollbarSlider,
    "notebookScrollbarSlider.hoverBackground":      ui.scrollbarSliderHover,
    "notebookScrollbarSlider.activeBackground":     ui.scrollbarSliderActive,

    // -----------------------------------------------------------------------
    // Chat / Copilot / AI features
    // -----------------------------------------------------------------------
    "chat.requestBackground":                       ui.bgBright + "40",
    "chat.requestBorder":                           ui.border,
    "chat.slashCommandBackground":                  ui.bgBright,
    "chat.slashCommandForeground":                  ui.cyan,
    "chat.avatarBackground":                        ui.bgBright,
    "chat.avatarForeground":                        ui.editorFg,
    "chat.editedFileForeground":                    ui.gitModified,
    "inlineChat.regionHighlight":                   ui.bgBright + "80",

    "editorChat.requestBackground":                 ui.bgBright + "40",
    "editorChat.requestBorder":                     ui.border,

    // Copilot icon / status
    "editorSuggestWidget.background":               ui.popupBg,
    "editorSuggestWidget.border":                   ui.popupBorder,
    "editorSuggestWidget.foreground":               ui.popupFg,
    "editorSuggestWidget.focusHighlightForeground": ui.cyan,
    "editorSuggestWidget.highlightForeground":      ui.cyan,
    "editorSuggestWidget.selectedBackground":       ui.popupSelectionBg,
    "editorSuggestWidget.selectedForeground":       ui.popupSelectionFg,
    "editorSuggestWidget.selectedIconForeground":   ui.popupSelectionFg,
    "editorSuggestWidgetStatus.foreground":         ui.fgDim,

    // -----------------------------------------------------------------------
    // Search view (sidebar search)
    // -----------------------------------------------------------------------
    "search.resultsInfoForeground":                 ui.fgDim,
    "searchEditor.findMatchBackground":             ui.findMatch,
    "searchEditor.findMatchBorder":                 ui.findMatchBorder,
    "searchEditor.textInputBorder":                 ui.inputBorder,

    // -----------------------------------------------------------------------
    // Symbol outline / call hierarchy
    // -----------------------------------------------------------------------
    "symbolIcon.arrayForeground":                   ui.yellow,
    "symbolIcon.booleanForeground":                 ui.cyan,
    "symbolIcon.classForeground":                   ui.yellow,
    "symbolIcon.colorForeground":                   ui.magenta,
    "symbolIcon.constantForeground":                ui.cyan,
    "symbolIcon.constructorForeground":             ui.orange,
    "symbolIcon.enumeratorForeground":              ui.yellow,
    "symbolIcon.enumeratorMemberForeground":        ui.cyan,
    "symbolIcon.eventForeground":                   ui.orange,
    "symbolIcon.fieldForeground":                   ui.blue,
    "symbolIcon.fileForeground":                    ui.violet,
    "symbolIcon.folderForeground":                  ui.blue,
    "symbolIcon.functionForeground":                ui.blue,
    "symbolIcon.interfaceForeground":               ui.yellow,
    "symbolIcon.keyForeground":                     ui.blue,
    "symbolIcon.keywordForeground":                 ui.green,
    "symbolIcon.methodForeground":                  ui.blue,
    "symbolIcon.moduleForeground":                  ui.green,
    "symbolIcon.namespaceForeground":               ui.blue,
    "symbolIcon.nullForeground":                    ui.cyan,
    "symbolIcon.numberForeground":                  ui.cyan,
    "symbolIcon.objectForeground":                  ui.yellow,
    "symbolIcon.operatorForeground":                ui.green,
    "symbolIcon.packageForeground":                 ui.green,
    "symbolIcon.propertyForeground":                ui.blue,
    "symbolIcon.referenceForeground":               ui.violet,
    "symbolIcon.snippetForeground":                 ui.magenta,
    "symbolIcon.stringForeground":                  ui.cyan,
    "symbolIcon.structForeground":                  ui.yellow,
    "symbolIcon.textForeground":                    ui.editorFg,
    "symbolIcon.typeParameterForeground":           ui.orange,
    "symbolIcon.unitForeground":                    ui.orange,
    "symbolIcon.variableForeground":                ui.editorFg,
  };
}
