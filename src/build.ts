/**
 * NeoSolarized VSCode Theme -- Build Script
 * Run: npm run build
 */
import fs from "fs";
import path from "path";
import { makePalette, makeUIColors, makeSyntaxColors, type Variant } from "./colors";
import { buildWorkbench } from "./workbench/index";

// Allow overriding the output directory via env so CI / shell runs
// can write to a writable scratch area when needed.
const outDir = process.env["THEMES_OUT"]
  ?? path.resolve(process.cwd(), "themes");

fs.mkdirSync(outDir, { recursive: true });

const VARIANTS: { id: Variant; label: string }[] = [
  { id: "dark",  label: "NeoSolarized Dark"  },
  { id: "osaka", label: "NeoSolarized Osaka" },
  { id: "light", label: "NeoSolarized Light" },
];

for (const variant of VARIANTS) {
  const resolved = makePalette(variant.id);
  const ui       = makeUIColors(resolved);
  void makeSyntaxColors(resolved);

  const colors     = buildWorkbench(ui);
  const tokenColors: unknown[] = [];

  const theme = {
    name:  variant.label,
    type:  variant.id === "light" ? "light" : "dark",
    semanticHighlighting: true,
    semanticTokenColors: {},
    colors,
    tokenColors,
  };

  const outPath = path.join(outDir, "neosolarized-" + variant.id + ".json");
  fs.writeFileSync(outPath, JSON.stringify(theme, null, 2) + "\n");
  console.log("Wrote neosolarized-" + variant.id + ".json (" + Object.keys(colors).length + " color tokens)");
}
