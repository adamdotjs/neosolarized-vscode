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

import { base }        from "./base";
import { editor }      from "./editor";
import { uiChrome }    from "./ui-chrome";
import { inputs }      from "./inputs";
import { diagnostics } from "./diagnostics";
import { extensions }  from "./extensions";
import type { UIColors, ResolvedVariant } from "../colors";

export { base, editor, uiChrome, inputs, diagnostics, extensions };

export function buildWorkbench(ui: UIColors & ResolvedVariant): Record<string, string> {
  return {
    ...base(ui),
    ...editor(ui),
    ...uiChrome(ui),
    ...inputs(ui),
    ...diagnostics(ui),
    ...extensions(ui),
  };
}
