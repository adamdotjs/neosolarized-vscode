/**
 * UI chrome tokens
 * activity bar, side bar, tabs, title bar, status bar,
 * command palette, menus, dropdowns, quick pick, notifications,
 * breadcrumbs, scrollbars, minimap, panel, banners
 */
import type { ResolvedVariant, UIColors } from "../colors"
import { alpha } from "../utils/color"

type Theme = UIColors & ResolvedVariant

export function uiChrome(ui: Theme): Record<string, string> {
	return {
		// -----------------------------------------------------------------------
		// Activity Bar
		// -----------------------------------------------------------------------
		"activityBar.background": ui.bg,
		"activityBar.foreground": ui.fg,
		"activityBar.inactiveForeground": ui.fgDim,
		"activityBar.border": ui.border,
		"activityBar.activeBorder": ui.focusBorder,
		"activityBar.activeBackground": "#00000000",
		"activityBar.activeFocusBorder": ui.focusBorder,
		"activityBar.dropBorder": ui.focusBorder,
		"activityBarBadge.background": ui.activityBarBadgeBg,
		"activityBarBadge.foreground": ui.activityBarBadgeFg,
		"activityBarTop.foreground": ui.fg,
		"activityBarTop.inactiveForeground": ui.fgDim,
		"activityBarTop.activeBorder": ui.focusBorder,
		"activityBarTop.activeBackground": "#00000000",
		"activityBarTop.dropBorder": ui.focusBorder,

		// -----------------------------------------------------------------------
		// Side Bar
		// -----------------------------------------------------------------------
		"sideBar.background": ui.bg,
		"sideBar.foreground": ui.fg,
		"sideBar.border": ui.border,
		"sideBar.dropBackground": alpha(ui.bgBright, 50),
		"sideBarTitle.foreground": ui.sideBarHeaderFg,
		"sideBarTitle.background": ui.bg,
		"sideBarSectionHeader.background": ui.bg,
		"sideBarSectionHeader.foreground": ui.sideBarHeaderFg,
		"sideBarSectionHeader.border": ui.border,
		"sideBarActivityBarTop.border": ui.border,

		// -----------------------------------------------------------------------
		// Editor Group & Tabs
		// -----------------------------------------------------------------------
		"editorGroup.border": ui.border,
		"editorGroup.dropBackground": alpha(ui.bgBright, 50),
		"editorGroup.dropIntoPromptForeground": ui.fg,
		"editorGroup.dropIntoPromptBackground": ui.popupBg,
		"editorGroup.dropIntoPromptBorder": ui.border,
		"editorGroup.emptyBackground": ui.bg,
		"editorGroup.focusedEmptyBorder": ui.focusBorder,
		"editorGroupHeader.tabsBackground": ui.bgBright,
		"editorGroupHeader.tabsBorder": ui.border,
		"editorGroupHeader.noTabsBackground": ui.bg,
		"editorGroupHeader.border": ui.border,

		"tab.activeBackground": ui.bg,
		"tab.activeForeground": ui.tabActiveFg,
		"tab.activeBorder": "#00000000",
		"tab.activeBorderTop": ui.tabActiveBorderTop,
		"tab.activeModifiedBorder": ui.yellow,
		"tab.inactiveBackground": ui.bgBright,
		"tab.inactiveForeground": ui.tabInactiveFg,
		"tab.inactiveModifiedBorder": ui.fgDim,
		"tab.unfocusedActiveBackground": ui.bg,
		"tab.unfocusedActiveForeground": ui.tabInactiveFg,
		"tab.unfocusedActiveBorder": "#00000000",
		"tab.unfocusedActiveBorderTop": ui.border,
		"tab.unfocusedInactiveBackground": ui.bgBright,
		"tab.unfocusedInactiveForeground": ui.fgDim,
		"tab.border": ui.border,
		"tab.hoverBackground": ui.bgBright,
		"tab.hoverForeground": ui.fgBright,
		"tab.hoverBorder": "#00000000",
		"tab.unfocusedHoverBackground": alpha(ui.bgBright, 50),
		"tab.unfocusedHoverForeground": ui.fgBright,
		"tab.unfocusedHoverBorder": "#00000000",
		"tab.selectedBorderTop": ui.tabActiveBorderTop,
		"tab.dragAndDropBackground": ui.bgBright,
		"tab.lastPinnedBorder": ui.border,

		// -----------------------------------------------------------------------
		// Title Bar
		// -----------------------------------------------------------------------
		"titleBar.activeBackground": ui.bg,
		"titleBar.activeForeground": ui.titleBarActiveFg,
		"titleBar.inactiveBackground": ui.bg,
		"titleBar.inactiveForeground": ui.titleBarInactiveFg,
		"titleBar.border": ui.border,

		// -----------------------------------------------------------------------
		// Menu Bar / Menus
		// -----------------------------------------------------------------------
		"menubar.selectionForeground": ui.fgBright,
		"menubar.selectionBackground": ui.bgBright,
		"menubar.selectionBorder": "#00000000",
		"menu.foreground": ui.popupFg,
		"menu.background": ui.popupBg,
		"menu.selectionForeground": ui.popupSelectionFg,
		"menu.selectionBackground": ui.popupSelectionBg,
		"menu.selectionBorder": "#00000000",
		"menu.separatorBackground": ui.border,
		"menu.border": ui.border,

		// -----------------------------------------------------------------------
		// Status Bar
		// -----------------------------------------------------------------------
		"statusBar.background": ui.bgBright,
		"statusBar.foreground": ui.fgBright,
		"statusBar.border": ui.border,
		"statusBar.focusBorder": ui.focusBorder,
		"statusBar.noFolderBackground": ui.statusBarBgNoFolder,
		"statusBar.noFolderForeground": ui.fgBright,
		"statusBar.noFolderBorder": ui.border,
		"statusBar.debuggingBackground": ui.statusBarBgDebug,
		"statusBar.debuggingForeground": ui.bg,
		"statusBar.debuggingBorder": "#00000000",
		"statusBar.offlineBackground": ui.red,
		"statusBar.offlineForeground": ui.bg,
		"statusBar.offlineBorder": "#00000000",
		"statusBarItem.activeBackground": alpha(ui.bgBright, 38),
		"statusBarItem.hoverBackground": alpha(ui.bgBright, 25),
		"statusBarItem.hoverForeground": ui.fgBright,
		"statusBarItem.prominentBackground": ui.bgBright,
		"statusBarItem.prominentForeground": ui.fgBright,
		"statusBarItem.prominentHoverBackground": alpha(ui.bgBright, 50),
		"statusBarItem.prominentHoverForeground": ui.fgBright,
		"statusBarItem.remoteBackground": ui.cyan,
		"statusBarItem.remoteForeground": ui.bg,
		"statusBarItem.remoteHoverBackground": ui.blue,
		"statusBarItem.remoteHoverForeground": ui.bg,
		"statusBarItem.errorBackground": ui.red,
		"statusBarItem.errorForeground": ui.bg,
		"statusBarItem.errorHoverBackground": alpha(ui.red, 80),
		"statusBarItem.errorHoverForeground": ui.bg,
		"statusBarItem.warningBackground": ui.yellow,
		"statusBarItem.warningForeground": ui.bg,
		"statusBarItem.warningHoverBackground": alpha(ui.yellow, 80),
		"statusBarItem.warningHoverForeground": ui.bg,
		"statusBarItem.compactHoverBackground": alpha(ui.bgBright, 25),
		"statusBarItem.focusBorder": ui.focusBorder,

		// -----------------------------------------------------------------------
		// Panel (terminal, output, problems, debug console)
		// -----------------------------------------------------------------------
		"panel.background": ui.bg,
		"panel.border": ui.border,
		"panel.dropBorder": ui.focusBorder,
		"panelTitle.activeForeground": ui.panelTitleActiveFg,
		"panelTitle.activeBorder": ui.panelTitleActiveBorder,
		"panelTitle.inactiveForeground": ui.fgDim,
		"panelSection.border": ui.border,
		"panelSection.dropBackground": alpha(ui.bgBright, 50),
		"panelSectionHeader.background": ui.bgBright,
		"panelSectionHeader.foreground": ui.fgBright,
		"panelSectionHeader.border": ui.border,
		"panelInput.border": ui.border,

		// Output channel
		"outputView.background": ui.bg,
		"outputViewStickyScroll.background": ui.bg,

		// -----------------------------------------------------------------------
		// Breadcrumbs
		// -----------------------------------------------------------------------
		"breadcrumb.foreground": ui.breadcrumbFg,
		"breadcrumb.background": ui.bg,
		"breadcrumb.focusForeground": ui.breadcrumbFocusFg,
		"breadcrumb.activeSelectionForeground": ui.cyan,
		"breadcrumbPicker.background": ui.popupBg,

		// -----------------------------------------------------------------------
		// Scrollbar
		// -----------------------------------------------------------------------
		"scrollbar.shadow": "#00000033",
		"scrollbarSlider.background": ui.scrollbarSlider,
		"scrollbarSlider.hoverBackground": ui.scrollbarSliderHover,
		"scrollbarSlider.activeBackground": ui.scrollbarSliderActive,

		// -----------------------------------------------------------------------
		// Minimap
		// -----------------------------------------------------------------------
		"minimap.background": ui.bg,
		"minimap.foregroundOpacity": "#000000c0",
		"minimap.selectionHighlight": ui.minimapSelection,
		"minimap.findMatchHighlight": ui.minimapFindMatch,
		"minimap.errorHighlight": ui.diagError,
		"minimap.warningHighlight": ui.diagWarn,
		"minimap.infoHighlight": ui.diagInfo,
		"minimap.selectionOccurrenceHighlight": alpha(ui.fgDim, 38),
		"minimapGutter.addedBackground": ui.gitAdded,
		"minimapGutter.modifiedBackground": ui.gitModified,
		"minimapGutter.deletedBackground": ui.gitDeleted,
		"minimapSlider.background": ui.scrollbarSlider,
		"minimapSlider.hoverBackground": ui.scrollbarSliderHover,
		"minimapSlider.activeBackground": ui.scrollbarSliderActive,

		// -----------------------------------------------------------------------
		// Command Palette / Quick Pick
		// -----------------------------------------------------------------------
		"quickInput.background": ui.popupBg,
		"quickInput.foreground": ui.popupFg,
		"quickInputTitle.background": ui.bgBright,
		"quickInputList.focusBackground": ui.popupSelectionBg,
		"quickInputList.focusForeground": ui.popupSelectionFg,
		"quickInputList.focusIconForeground": ui.popupSelectionFg,
		"quickPick.background": ui.popupBg,
		"quickPick.foreground": ui.popupFg,

		// -----------------------------------------------------------------------
		// Notifications
		// -----------------------------------------------------------------------
		"notifications.background": ui.bgBright,
		"notifications.foreground": ui.fgBright,
		"notifications.border": ui.border,
		"notificationCenter.border": ui.border,
		"notificationCenterHeader.background": ui.bgBright,
		"notificationCenterHeader.foreground": ui.fgBright,
		"notificationToast.border": ui.border,
		"notificationsErrorIcon.foreground": ui.diagError,
		"notificationsWarningIcon.foreground": ui.diagWarn,
		"notificationsInfoIcon.foreground": ui.diagInfo,
		"notificationLink.foreground": ui.focusBorder,

		// -----------------------------------------------------------------------
		// Banner
		// -----------------------------------------------------------------------
		"banner.background": ui.bgBright,
		"banner.foreground": ui.fgBright,
		"banner.iconForeground": ui.cyan,

		// -----------------------------------------------------------------------
		// Drag and drop
		// -----------------------------------------------------------------------
		"editorPane.background": ui.bg,
		"sideBySideEditor.horizontalBorder": ui.border,
		"sideBySideEditor.verticalBorder": ui.border,
		"columnSelect.background": ui.editorSelectionHL,
	}
}
