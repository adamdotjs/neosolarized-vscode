/**
 * UI chrome tokens
 * activity bar, side bar, tabs, title bar, status bar,
 * command palette, menus, dropdowns, quick pick, notifications,
 * breadcrumbs, scrollbars, minimap, panel, banners
 */
import type { UIColors, ResolvedVariant } from "../colors";

type Theme = UIColors & ResolvedVariant;

export function uiChrome(ui: Theme): Record<string, string> {
  return {
    // -----------------------------------------------------------------------
    // Activity Bar
    // -----------------------------------------------------------------------
    "activityBar.background":                       ui.activityBarBg,
    "activityBar.foreground":                       ui.activityBarFg,
    "activityBar.inactiveForeground":               ui.fgDim,
    "activityBar.border":                           ui.sideBarBorder,
    "activityBar.activeBorder":                     ui.focusBorder,
    "activityBar.activeBackground":                 "#00000000",
    "activityBar.activeFocusBorder":                ui.focusBorder,
    "activityBar.dropBorder":                       ui.focusBorder,
    "activityBarBadge.background":                  ui.activityBarBadgeBg,
    "activityBarBadge.foreground":                  ui.activityBarBadgeFg,
    "activityBarTop.foreground":                    ui.activityBarFg,
    "activityBarTop.inactiveForeground":            ui.fgDim,
    "activityBarTop.activeBorder":                  ui.focusBorder,
    "activityBarTop.activeBackground":              "#00000000",
    "activityBarTop.dropBorder":                    ui.focusBorder,

    // -----------------------------------------------------------------------
    // Side Bar
    // -----------------------------------------------------------------------
    "sideBar.background":                           ui.sideBarBg,
    "sideBar.foreground":                           ui.sideBarFg,
    "sideBar.border":                               ui.sideBarBorder,
    "sideBar.dropBackground":                       ui.bgBright + "80",
    "sideBarTitle.foreground":                      ui.sideBarHeaderFg,
    "sideBarTitle.background":                      ui.sideBarBg,
    "sideBarSectionHeader.background":              ui.sideBarBg,
    "sideBarSectionHeader.foreground":              ui.sideBarHeaderFg,
    "sideBarSectionHeader.border":                  ui.sideBarBorder,
    "sideBarActivityBarTop.border":                 ui.sideBarBorder,

    // -----------------------------------------------------------------------
    // Editor Group & Tabs
    // -----------------------------------------------------------------------
    "editorGroup.border":                           ui.tabBorder,
    "editorGroup.dropBackground":                   ui.bgBright + "80",
    "editorGroup.dropIntoPromptForeground":         ui.editorFg,
    "editorGroup.dropIntoPromptBackground":         ui.popupBg,
    "editorGroup.dropIntoPromptBorder":             ui.border,
    "editorGroup.emptyBackground":                  ui.editorBg,
    "editorGroup.focusedEmptyBorder":               ui.focusBorder,
    "editorGroupHeader.tabsBackground":             ui.tabInactiveBg,
    "editorGroupHeader.tabsBorder":                 ui.tabBorder,
    "editorGroupHeader.noTabsBackground":           ui.editorBg,
    "editorGroupHeader.border":                     ui.tabBorder,

    "tab.activeBackground":                         ui.tabActiveBg,
    "tab.activeForeground":                         ui.tabActiveFg,
    "tab.activeBorder":                             "#00000000",
    "tab.activeBorderTop":                          ui.tabActiveBorderTop,
    "tab.activeModifiedBorder":                     ui.yellow,
    "tab.inactiveBackground":                       ui.tabInactiveBg,
    "tab.inactiveForeground":                       ui.tabInactiveFg,
    "tab.inactiveModifiedBorder":                   ui.fgDim,
    "tab.unfocusedActiveBackground":                ui.tabActiveBg,
    "tab.unfocusedActiveForeground":                ui.tabInactiveFg,
    "tab.unfocusedActiveBorder":                    "#00000000",
    "tab.unfocusedActiveBorderTop":                 ui.border,
    "tab.unfocusedInactiveBackground":              ui.tabInactiveBg,
    "tab.unfocusedInactiveForeground":              ui.fgDim,
    "tab.border":                                   ui.tabBorder,
    "tab.hoverBackground":                          ui.bgBright,
    "tab.hoverForeground":                          ui.fgBright,
    "tab.hoverBorder":                              "#00000000",
    "tab.unfocusedHoverBackground":                 ui.bgBright + "80",
    "tab.unfocusedHoverForeground":                 ui.fgBright,
    "tab.unfocusedHoverBorder":                     "#00000000",
    "tab.selectedBorderTop":                        ui.tabActiveBorderTop,
    "tab.dragAndDropBackground":                    ui.bgBright,
    "tab.lastPinnedBorder":                         ui.border,

    // -----------------------------------------------------------------------
    // Title Bar
    // -----------------------------------------------------------------------
    "titleBar.activeBackground":                    ui.titleBarActiveBg,
    "titleBar.activeForeground":                    ui.titleBarActiveFg,
    "titleBar.inactiveBackground":                  ui.titleBarInactiveBg,
    "titleBar.inactiveForeground":                  ui.titleBarInactiveFg,
    "titleBar.border":                              ui.sideBarBorder,

    // -----------------------------------------------------------------------
    // Menu Bar / Menus
    // -----------------------------------------------------------------------
    "menubar.selectionForeground":                  ui.fgBright,
    "menubar.selectionBackground":                  ui.bgBright,
    "menubar.selectionBorder":                      "#00000000",
    "menu.foreground":                              ui.popupFg,
    "menu.background":                              ui.popupBg,
    "menu.selectionForeground":                     ui.popupSelectionFg,
    "menu.selectionBackground":                     ui.popupSelectionBg,
    "menu.selectionBorder":                         "#00000000",
    "menu.separatorBackground":                     ui.border,
    "menu.border":                                  ui.popupBorder,

    // -----------------------------------------------------------------------
    // Status Bar
    // -----------------------------------------------------------------------
    "statusBar.background":                         ui.statusBarBg,
    "statusBar.foreground":                         ui.statusBarFg,
    "statusBar.border":                             ui.sideBarBorder,
    "statusBar.focusBorder":                        ui.focusBorder,
    "statusBar.noFolderBackground":                 ui.statusBarBgNoFolder,
    "statusBar.noFolderForeground":                 ui.statusBarFg,
    "statusBar.noFolderBorder":                     ui.sideBarBorder,
    "statusBar.debuggingBackground":                ui.statusBarBgDebug,
    "statusBar.debuggingForeground":                ui.editorBg,
    "statusBar.debuggingBorder":                    "#00000000",
    "statusBar.offlineBackground":                  ui.red,
    "statusBar.offlineForeground":                  ui.editorBg,
    "statusBar.offlineBorder":                      "#00000000",
    "statusBarItem.activeBackground":               ui.bgBright + "60",
    "statusBarItem.hoverBackground":                ui.bgBright + "40",
    "statusBarItem.hoverForeground":                ui.statusBarFg,
    "statusBarItem.prominentBackground":            ui.bgBright,
    "statusBarItem.prominentForeground":            ui.statusBarFg,
    "statusBarItem.prominentHoverBackground":       ui.bgBright + "80",
    "statusBarItem.prominentHoverForeground":       ui.statusBarFg,
    "statusBarItem.remoteBackground":               ui.cyan,
    "statusBarItem.remoteForeground":               ui.editorBg,
    "statusBarItem.remoteHoverBackground":          ui.blue,
    "statusBarItem.remoteHoverForeground":          ui.editorBg,
    "statusBarItem.errorBackground":                ui.red,
    "statusBarItem.errorForeground":                ui.editorBg,
    "statusBarItem.errorHoverBackground":           ui.red + "cc",
    "statusBarItem.errorHoverForeground":           ui.editorBg,
    "statusBarItem.warningBackground":              ui.yellow,
    "statusBarItem.warningForeground":              ui.editorBg,
    "statusBarItem.warningHoverBackground":         ui.yellow + "cc",
    "statusBarItem.warningHoverForeground":         ui.editorBg,
    "statusBarItem.compactHoverBackground":         ui.bgBright + "40",
    "statusBarItem.focusBorder":                    ui.focusBorder,

    // -----------------------------------------------------------------------
    // Panel (terminal, output, problems, debug console)
    // -----------------------------------------------------------------------
    "panel.background":                             ui.panelBg,
    "panel.border":                                 ui.panelBorder,
    "panel.dropBorder":                             ui.focusBorder,
    "panelTitle.activeForeground":                  ui.panelTitleActiveFg,
    "panelTitle.activeBorder":                      ui.panelTitleActiveBorder,
    "panelTitle.inactiveForeground":                ui.fgDim,
    "panelSection.border":                          ui.panelBorder,
    "panelSection.dropBackground":                  ui.bgBright + "80",
    "panelSectionHeader.background":                ui.bgBright,
    "panelSectionHeader.foreground":                ui.fgBright,
    "panelSectionHeader.border":                    ui.panelBorder,
    "panelInput.border":                            ui.inputBorder,

    // Output channel
    "outputView.background":                        ui.panelBg,
    "outputViewStickyScroll.background":            ui.panelBg,

    // -----------------------------------------------------------------------
    // Breadcrumbs
    // -----------------------------------------------------------------------
    "breadcrumb.foreground":                        ui.breadcrumbFg,
    "breadcrumb.background":                        ui.breadcrumbBg,
    "breadcrumb.focusForeground":                   ui.breadcrumbFocusFg,
    "breadcrumb.activeSelectionForeground":         ui.cyan,
    "breadcrumbPicker.background":                  ui.popupBg,

    // -----------------------------------------------------------------------
    // Scrollbar
    // -----------------------------------------------------------------------
    "scrollbar.shadow":                             "#00000033",
    "scrollbarSlider.background":                   ui.scrollbarSlider,
    "scrollbarSlider.hoverBackground":              ui.scrollbarSliderHover,
    "scrollbarSlider.activeBackground":             ui.scrollbarSliderActive,

    // -----------------------------------------------------------------------
    // Minimap
    // -----------------------------------------------------------------------
    "minimap.background":                           ui.editorBg,
    "minimap.foregroundOpacity":                    "#000000c0",
    "minimap.selectionHighlight":                   ui.minimapSelection,
    "minimap.findMatchHighlight":                   ui.minimapFindMatch,
    "minimap.errorHighlight":                       ui.diagError,
    "minimap.warningHighlight":                     ui.diagWarn,
    "minimap.infoHighlight":                        ui.diagInfo,
    "minimap.selectionOccurrenceHighlight":         ui.fgDim + "60",
    "minimapGutter.addedBackground":                ui.gitAdded,
    "minimapGutter.modifiedBackground":             ui.gitModified,
    "minimapGutter.deletedBackground":              ui.gitDeleted,
    "minimapSlider.background":                     ui.scrollbarSlider,
    "minimapSlider.hoverBackground":                ui.scrollbarSliderHover,
    "minimapSlider.activeBackground":               ui.scrollbarSliderActive,

    // -----------------------------------------------------------------------
    // Command Palette / Quick Pick
    // -----------------------------------------------------------------------
    "quickInput.background":                        ui.popupBg,
    "quickInput.foreground":                        ui.popupFg,
    "quickInputTitle.background":                   ui.bgBright,
    "quickInputList.focusBackground":               ui.popupSelectionBg,
    "quickInputList.focusForeground":               ui.popupSelectionFg,
    "quickInputList.focusIconForeground":           ui.popupSelectionFg,
    "quickPick.background":                         ui.popupBg,
    "quickPick.foreground":                         ui.popupFg,

    // -----------------------------------------------------------------------
    // Notifications
    // -----------------------------------------------------------------------
    "notifications.background":                     ui.notifBg,
    "notifications.foreground":                     ui.notifFg,
    "notifications.border":                         ui.notifBorder,
    "notificationCenter.border":                    ui.notifBorder,
    "notificationCenterHeader.background":          ui.bgBright,
    "notificationCenterHeader.foreground":          ui.fgBright,
    "notificationToast.border":                     ui.notifBorder,
    "notificationsErrorIcon.foreground":            ui.diagError,
    "notificationsWarningIcon.foreground":          ui.diagWarn,
    "notificationsInfoIcon.foreground":             ui.diagInfo,
    "notificationLink.foreground":                  ui.focusBorder,

    // -----------------------------------------------------------------------
    // Banner
    // -----------------------------------------------------------------------
    "banner.background":                            ui.bgBright,
    "banner.foreground":                            ui.fgBright,
    "banner.iconForeground":                        ui.cyan,

    // -----------------------------------------------------------------------
    // Drag and drop
    // -----------------------------------------------------------------------
    "editorPane.background":                        ui.editorBg,
    "sideBySideEditor.horizontalBorder":            ui.border,
    "sideBySideEditor.verticalBorder":              ui.border,
    "columnSelect.background":                      ui.editorSelectionHL,
  };
}