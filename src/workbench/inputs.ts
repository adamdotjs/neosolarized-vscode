/**
 * Input controls, buttons, dropdowns, checkboxes, and list/tree widgets
 */
import type { UIColors, ResolvedVariant } from "../colors";

type Theme = UIColors & ResolvedVariant;

export function inputs(ui: Theme): Record<string, string> {
  return {
    // -----------------------------------------------------------------------
    // Input boxes
    // -----------------------------------------------------------------------
    "input.background":                             ui.inputBg,
    "input.foreground":                             ui.inputFg,
    "input.border":                                 ui.inputBorder,
    "input.placeholderForeground":                  ui.inputPlaceholder,
    "inputOption.activeBackground":                 ui.focusBorder + "40",
    "inputOption.activeBorder":                     ui.focusBorder,
    "inputOption.activeForeground":                 ui.editorFg,
    "inputOption.hoverBackground":                  ui.bgBright,
    "inputValidation.infoBackground":               ui.popupBg,
    "inputValidation.infoBorder":                   ui.diagInfo,
    "inputValidation.infoForeground":               ui.diagInfo,
    "inputValidation.warningBackground":            ui.popupBg,
    "inputValidation.warningBorder":                ui.diagWarn,
    "inputValidation.warningForeground":            ui.diagWarn,
    "inputValidation.errorBackground":              ui.popupBg,
    "inputValidation.errorBorder":                  ui.diagError,
    "inputValidation.errorForeground":              ui.diagError,

    // -----------------------------------------------------------------------
    // Buttons
    // -----------------------------------------------------------------------
    "button.background":                            ui.buttonBg,
    "button.foreground":                            ui.buttonFg,
    "button.border":                                "#00000000",
    "button.separator":                             ui.buttonFg + "80",
    "button.hoverBackground":                       ui.buttonHoverBg,
    "button.secondaryBackground":                   ui.bgBright,
    "button.secondaryForeground":                   ui.editorFg,
    "button.secondaryHoverBackground":              ui.bgBright + "cc",
    "checkbox.background":                          ui.inputBg,
    "checkbox.foreground":                          ui.editorFg,
    "checkbox.border":                              ui.inputBorder,
    "checkbox.selectBackground":                    ui.inputBg,
    "checkbox.selectBorder":                        ui.focusBorder,

    // -----------------------------------------------------------------------
    // Dropdown / Select
    // -----------------------------------------------------------------------
    "dropdown.background":                          ui.inputBg,
    "dropdown.listBackground":                      ui.popupBg,
    "dropdown.foreground":                          ui.inputFg,
    "dropdown.border":                              ui.inputBorder,

    // -----------------------------------------------------------------------
    // Lists & Trees (explorer, open editors, etc.)
    // -----------------------------------------------------------------------
    "list.activeSelectionBackground":               ui.popupSelectionBg,
    "list.activeSelectionForeground":               ui.popupSelectionFg,
    "list.activeSelectionIconForeground":           ui.popupSelectionFg,
    "list.inactiveSelectionBackground":             ui.bgBright,
    "list.inactiveSelectionForeground":             ui.editorFg,
    "list.inactiveSelectionIconForeground":         ui.fgDim,
    "list.hoverBackground":                         ui.bgBright + "80",
    "list.hoverForeground":                         ui.editorFg,
    "list.focusBackground":                         ui.popupSelectionBg,
    "list.focusForeground":                         ui.popupSelectionFg,
    "list.focusOutline":                            "#00000000",
    "list.focusHighlightForeground":                ui.cyan,
    "list.dropBackground":                          ui.bgBright + "80",
    "list.dropBetweenBackground":                   ui.focusBorder,
    "list.highlightForeground":                     ui.cyan,
    "list.filterMatchBackground":                   ui.findMatchHL,
    "list.filterMatchBorder":                       ui.findMatchHLBorder,
    "list.deemphasizedForeground":                  ui.fgDim,
    "list.errorForeground":                         ui.diagError,
    "list.warningForeground":                       ui.diagWarn,
    "list.invalidItemForeground":                   ui.diagError,
    "listFilterWidget.background":                  ui.popupBg,
    "listFilterWidget.outline":                     ui.focusBorder,
    "listFilterWidget.noMatchesOutline":            ui.diagError,
    "listFilterWidget.shadow":                      "#00000033",

    "tree.indentGuidesStroke":                      ui.indentGuide,
    "tree.inactiveIndentGuidesStroke":              ui.indentGuide + "80",
    "tree.tableColumnsBorder":                      ui.border,
    "tree.tableOddRowsBackground":                  ui.bgBright + "30",

    // -----------------------------------------------------------------------
    // Keybinding label
    // -----------------------------------------------------------------------
    "keybindingLabel.background":                   ui.bgBright,
    "keybindingLabel.foreground":                   ui.editorFg,
    "keybindingLabel.border":                       ui.border,
    "keybindingLabel.bottomBorder":                 ui.border,
    "keybindingTable.headerBackground":             ui.bgBright,
    "keybindingTable.rowsBackground":               ui.bgBright + "30",

    // -----------------------------------------------------------------------
    // Sliders / custom controls
    // -----------------------------------------------------------------------
    "settings.headerForeground":                    ui.editorFg,
    "settings.headerBorder":                        ui.border,
    "settings.modifiedItemIndicator":               ui.cyan,
    "settings.dropdownBackground":                  ui.inputBg,
    "settings.dropdownForeground":                  ui.inputFg,
    "settings.dropdownBorder":                      ui.inputBorder,
    "settings.dropdownListBorder":                  ui.border,
    "settings.checkboxBackground":                  ui.inputBg,
    "settings.checkboxForeground":                  ui.editorFg,
    "settings.checkboxBorder":                      ui.inputBorder,
    "settings.rowHoverBackground":                  ui.bgBright + "60",
    "settings.textInputBackground":                 ui.inputBg,
    "settings.textInputForeground":                 ui.inputFg,
    "settings.textInputBorder":                     ui.inputBorder,
    "settings.numberInputBackground":               ui.inputBg,
    "settings.numberInputForeground":               ui.inputFg,
    "settings.numberInputBorder":                   ui.inputBorder,
    "settings.focusedRowBackground":                ui.bgBright + "40",
    "settings.focusedRowBorder":                    ui.focusBorder,
    "settings.sashBorder":                          ui.border,
    "settings.settingsHeaderHoverForeground":       ui.cyan,

    // -----------------------------------------------------------------------
    // Toolbar
    // -----------------------------------------------------------------------
    "toolbar.hoverBackground":                      ui.bgBright,
    "toolbar.hoverOutline":                         "#00000000",
    "toolbar.activeBackground":                     ui.bgBright + "cc",

    // -----------------------------------------------------------------------
    // Action bar
    // -----------------------------------------------------------------------
    "actionBar.toggledBackground":                  ui.bgBright,
  };
}
