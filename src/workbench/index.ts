/**
 * Workbench token index
 *
 * Composes all surface-area modules into a single flat Record<string, string>
 * suitable for the "colors" key in a VSCode theme JSON file.
 *
 * Usage:
 *   import { buildWorkbench } from "./workbench";
 *   import { makePalette, makeUIColors } from "./colors";
 *
 *   const v   = makePalette("dark");
 *   const ui  = makeUIColors(v);
 *   const colors = buildWorkbench(ui);
 */

import type { ResolvedVariant, UIColors } from "../colors"
import { base } from "./base"
import { diagnostics } from "./diagnostics"
import { editor } from "./editor"
import { extensions } from "./extensions"
import { inputs } from "./inputs"
import { uiChrome } from "./ui-chrome"

export { base, diagnostics, editor, extensions, inputs, uiChrome }

export function buildWorkbench(ui: UIColors & ResolvedVariant): Record<string, string> {
	return {
		...base(ui),
		...editor(ui),
		...uiChrome(ui),
		...inputs(ui),
		...diagnostics(ui),
		...extensions(ui),
	}
}
