/**
 * Input controls, buttons, dropdowns, checkboxes, and list/tree widgets
 */
import type { ResolvedVariant, UIColors } from "../colors"
import { alpha } from "../utils/color"

type Theme = UIColors & ResolvedVariant

export function inputs(ui: Theme): Record<string, string> {
	return {
		// -----------------------------------------------------------------------
		// Input boxes
		// -----------------------------------------------------------------------
		"input.background": ui.bgBright,
		"input.foreground": ui.fgBright,
		"input.border": ui.border,
		"input.placeholderForeground": ui.inputPlaceholder,
		"inputOption.activeBackground": alpha(ui.focusBorder, 25),
		"inputOption.activeBorder": ui.focusBorder,
		"inputOption.activeForeground": ui.fg,
		"inputOption.hoverBackground": ui.bgBright,
		"inputValidation.infoBackground": ui.popupBg,
		"inputValidation.infoBorder": ui.diagInfo,
		"inputValidation.infoForeground": ui.diagInfo,
		"inputValidation.warningBackground": ui.popupBg,
		"inputValidation.warningBorder": ui.diagWarn,
		"inputValidation.warningForeground": ui.diagWarn,
		"inputValidation.errorBackground": ui.popupBg,
		"inputValidation.errorBorder": ui.diagError,
		"inputValidation.errorForeground": ui.diagError,

		// -----------------------------------------------------------------------
		// Buttons
		// -----------------------------------------------------------------------
		"button.background": ui.buttonBg,
		"button.foreground": ui.buttonFg,
		"button.border": "#00000000",
		"button.separator": alpha(ui.buttonFg, 50),
		"button.hoverBackground": ui.buttonHoverBg,
		"button.secondaryBackground": ui.bgBright,
		"button.secondaryForeground": ui.fg,
		"button.secondaryHoverBackground": alpha(ui.bgBright, 80),
		"checkbox.background": ui.bgBright,
		"checkbox.foreground": ui.fg,
		"checkbox.border": ui.border,
		"checkbox.selectBackground": ui.bgBright,
		"checkbox.selectBorder": ui.focusBorder,

		// -----------------------------------------------------------------------
		// Dropdown / Select
		// -----------------------------------------------------------------------
		"dropdown.background": ui.bgBright,
		"dropdown.listBackground": ui.popupBg,
		"dropdown.foreground": ui.fgBright,
		"dropdown.border": ui.border,

		// -----------------------------------------------------------------------
		// Lists & Trees (explorer, open editors, etc.)
		// -----------------------------------------------------------------------
		"list.activeSelectionBackground": ui.popupSelectionBg,
		"list.activeSelectionForeground": ui.popupSelectionFg,
		"list.activeSelectionIconForeground": ui.popupSelectionFg,
		"list.inactiveSelectionBackground": ui.bgBright,
		"list.inactiveSelectionForeground": ui.fg,
		"list.inactiveSelectionIconForeground": ui.fgDim,
		"list.hoverBackground": alpha(ui.bgBright, 50),
		"list.hoverForeground": ui.fg,
		"list.focusBackground": ui.popupSelectionBg,
		"list.focusForeground": ui.popupSelectionFg,
		"list.focusOutline": "#00000000",
		"list.focusHighlightForeground": ui.cyan,
		"list.dropBackground": alpha(ui.bgBright, 50),
		"list.dropBetweenBackground": ui.focusBorder,
		"list.highlightForeground": ui.cyan,
		"list.filterMatchBackground": ui.findMatchHL,
		"list.filterMatchBorder": ui.findMatchHLBorder,
		"list.deemphasizedForeground": ui.fgDim,
		"list.errorForeground": ui.diagError,
		"list.warningForeground": ui.diagWarn,
		"list.invalidItemForeground": ui.diagError,
		"listFilterWidget.background": ui.popupBg,
		"listFilterWidget.outline": ui.focusBorder,
		"listFilterWidget.noMatchesOutline": ui.diagError,
		"listFilterWidget.shadow": "#00000033",

		"tree.indentGuidesStroke": ui.bgBright,
		"tree.inactiveIndentGuidesStroke": alpha(ui.bgBright, 50),
		"tree.tableColumnsBorder": ui.border,
		"tree.tableOddRowsBackground": alpha(ui.bgBright, 19),

		// -----------------------------------------------------------------------
		// Keybinding label
		// -----------------------------------------------------------------------
		"keybindingLabel.background": ui.bgBright,
		"keybindingLabel.foreground": ui.fg,
		"keybindingLabel.border": ui.border,
		"keybindingLabel.bottomBorder": ui.border,
		"keybindingTable.headerBackground": ui.bgBright,
		"keybindingTable.rowsBackground": alpha(ui.bgBright, 19),

		// -----------------------------------------------------------------------
		// Sliders / custom controls
		// -----------------------------------------------------------------------
		"settings.headerForeground": ui.fg,
		"settings.headerBorder": ui.border,
		"settings.modifiedItemIndicator": ui.cyan,
		"settings.dropdownBackground": ui.bgBright,
		"settings.dropdownForeground": ui.fgBright,
		"settings.dropdownBorder": ui.border,
		"settings.dropdownListBorder": ui.border,
		"settings.checkboxBackground": ui.bgBright,
		"settings.checkboxForeground": ui.fg,
		"settings.checkboxBorder": ui.border,
		"settings.rowHoverBackground": alpha(ui.bgBright, 38),
		"settings.textInputBackground": ui.bgBright,
		"settings.textInputForeground": ui.fgBright,
		"settings.textInputBorder": ui.border,
		"settings.numberInputBackground": ui.bgBright,
		"settings.numberInputForeground": ui.fgBright,
		"settings.numberInputBorder": ui.border,
		"settings.focusedRowBackground": alpha(ui.bgBright, 25),
		"settings.focusedRowBorder": ui.focusBorder,
		"settings.sashBorder": ui.border,
		"settings.settingsHeaderHoverForeground": ui.cyan,

		// -----------------------------------------------------------------------
		// Toolbar
		// -----------------------------------------------------------------------
		"toolbar.hoverBackground": ui.bgBright,
		"toolbar.hoverOutline": "#00000000",
		"toolbar.activeBackground": alpha(ui.bgBright, 80),

		// -----------------------------------------------------------------------
		// Action bar
		// -----------------------------------------------------------------------
		"actionBar.toggledBackground": ui.bgBright,
	}
}
