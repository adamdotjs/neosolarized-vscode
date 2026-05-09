/**
 * NeoSolarized VSCode Theme -- Syntax Highlighting
 *
 * 1:1 port of svrana/neosolarized.nvim
 *
 * Resolution chain (later definitions win, matching the Lua source):
 *   Normal       -> base0 fg
 *   Comment      -> base01, italic
 *   Constant     -> cyan   (Number, Boolean, Float, Character, String via Text)
 *   Statement    -> green  (Keyword, Conditional, Repeat, Label, Operator, Exception)
 *   Function     -> blue
 *   Identifier   -> blue   (field, namespace, attribute, property, @variable.builtin->Special)
 *   PreProc      -> red    (Include, Macro, Define)
 *   Type         -> yellow (Typedef, StorageClass)
 *   Special      -> orange (Delimiter, SpecialChar, constructor, @parameter)
 *   @variable    -> base0  (explicitly, not Normal)
 *   @constant.builtin -> Type -> yellow
 *   @tag         -> green, @tag.attribute -> blue, @tag.delimiter -> red
 *   @punctuation.delimiter -> Statement -> green
 *   @punctuation.bracket   -> Delimiter -> Special -> orange
 *   @lsp.type.*  -> matching Treesitter equivalents (nvim-0.9.0 section)
 *
 * Produces:
 *   tokenColors        -- TextMate grammar scopes
 *   semanticTokenColors -- VS Code semantic token types
 */

import type { ResolvedVariant } from "./colors"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface TextMateRule {
	name?: string
	scope: string | string[]
	settings: {
		foreground?: string
		fontStyle?: string
	}
}

export interface SyntaxResult {
	tokenColors: TextMateRule[]
	semanticTokenColors: Record<string, string | { foreground: string; fontStyle?: string }>
}

// ---------------------------------------------------------------------------
// Builder
// ---------------------------------------------------------------------------

export function buildSyntax(v: ResolvedVariant): SyntaxResult {
	const p = v.palette

	// Resolved color aliases matching the Lua Group chains
	const normal = v.fg // base0 (dark) / base00 (light)
	const comment = p.base01 // always base01 regardless of variant
	const constant = p.cyan // Constant group
	const identifier = p.blue // Identifier group
	const statement = p.green // Statement group
	const preproc = p.red // PreProc group
	const type_ = p.yellow // Type group
	const function_ = p.blue // Function group
	const special = p.orange // Special group
	const variable = v.fg // @variable -> base0 (explicit in Lua)

	// ---------------------------------------------------------------------------
	// TextMate tokenColors
	// ---------------------------------------------------------------------------
	const tokenColors: TextMateRule[] = [
		// -------------------------------------------------------------------------
		// Base / Normal
		// -------------------------------------------------------------------------
		{
			name: "Normal text",
			scope: ["source", "text"],
			settings: { foreground: normal },
		},

		// -------------------------------------------------------------------------
		// Comments -- base01, italic (config.comment_italics = true)
		// -------------------------------------------------------------------------
		{
			name: "Comment",
			scope: ["comment", "comment.line", "comment.block", "punctuation.definition.comment"],
			settings: { foreground: comment, fontStyle: "italic" },
		},

		// -------------------------------------------------------------------------
		// Strings -- Text -> cyan, String links Text
		// -------------------------------------------------------------------------
		{
			name: "String",
			scope: ["string", "string.quoted", "string.template"],
			settings: { foreground: constant },
		},

		// @string.escape -> Special -> orange
		{
			name: "String escape / Special char",
			scope: [
				"constant.character.escape",
				"string.regexp.character-class",
				"constant.other.placeholder",
			],
			settings: { foreground: special },
		},

		// @string.regex -> String -> cyan
		{
			name: "Regular expression",
			scope: ["string.regexp"],
			settings: { foreground: constant },
		},

		// -------------------------------------------------------------------------
		// Constants -- Constant -> cyan
		// (Number, Boolean, Float, Character all link Constant)
		// -------------------------------------------------------------------------
		{
			name: "Constant",
			scope: [
				"constant.numeric",
				"constant.language",
				"constant.character",
				"constant.other",
				"support.constant",
			],
			settings: { foreground: constant },
		},

		// @constant.builtin -> Type -> yellow
		{
			name: "Built-in constant",
			scope: [
				"constant.language.boolean",
				"constant.language.null",
				"constant.language.undefined",
				"constant.language.none",
				"constant.language.infinity",
				"constant.language.nan",
			],
			settings: { foreground: type_ },
		},

		// -------------------------------------------------------------------------
		// Keywords / Statement -> green
		// (Keyword, Conditional, Repeat, Label, Operator, Exception all link Statement)
		// -------------------------------------------------------------------------
		{
			name: "Keyword / Statement",
			scope: [
				"keyword",
				"keyword.control",
				"keyword.control.flow",
				"keyword.control.conditional",
				"keyword.control.loop",
				"keyword.control.import",
				"keyword.control.export",
				"keyword.control.return",
				"keyword.control.trycatch",
				"keyword.operator.expression",
				"keyword.operator.new",
				"keyword.operator.delete",
				"keyword.operator.typeof",
				"keyword.operator.void",
				"keyword.operator.in",
				"keyword.operator.instanceof",
				"keyword.other",
				"storage.type.class",
				"storage.type.function",
				"storage.type.interface",
				"storage.type.enum",
				"storage.type.namespace",
				"storage.type.module",
				"storage.type.import",
				"storage.type.package",
				"storage.modifier",
			],
			settings: { foreground: statement },
		},

		// Operator -> Statement -> green
		{
			name: "Operator",
			scope: [
				"keyword.operator",
				"keyword.operator.arithmetic",
				"keyword.operator.assignment",
				"keyword.operator.bitwise",
				"keyword.operator.comparison",
				"keyword.operator.logical",
				"keyword.operator.ternary",
				"keyword.operator.spread",
				"keyword.operator.rest",
				"keyword.operator.type",
				"keyword.operator.optional",
				"keyword.operator.range",
			],
			settings: { foreground: statement },
		},

		// -------------------------------------------------------------------------
		// Functions -- Function -> blue
		// -------------------------------------------------------------------------
		{
			name: "Function / Method",
			scope: [
				"entity.name.function",
				"entity.name.method",
				"support.function",
				"meta.function-call entity.name.function",
				"variable.function",
			],
			settings: { foreground: function_ },
		},

		// -------------------------------------------------------------------------
		// Types -- Type -> yellow
		// (Typedef, StorageClass link Type)
		// -------------------------------------------------------------------------
		{
			name: "Type",
			scope: [
				"entity.name.type",
				"entity.name.class",
				"entity.name.interface",
				"entity.name.enum",
				"entity.name.struct",
				"entity.name.trait",
				"entity.name.impl",
				"entity.name.type.alias",
				"support.type",
				"support.class",
				"storage.type.primitive",
				"storage.type.built-in",
			],
			settings: { foreground: type_ },
		},

		// StorageClass -> Type -> yellow
		{
			name: "Storage class / modifier",
			scope: ["storage.type"],
			settings: { foreground: type_ },
		},

		// -------------------------------------------------------------------------
		// Identifiers -- Identifier -> blue
		// (field, namespace, attribute, property, @namespace, @symbol)
		// -------------------------------------------------------------------------
		{
			name: "Identifier / Field / Property / Namespace",
			scope: [
				"variable.other.member",
				"variable.other.property",
				"variable.other.object.property",
				"variable.other.readwrite.member",
				"meta.object-literal.key",
				"entity.name.tag.yaml",
				"support.type.property-name",
			],
			settings: { foreground: identifier },
		},

		// -------------------------------------------------------------------------
		// Variables -- @variable -> base0 (Normal fg, explicitly set in Lua)
		// @variable.builtin -> Special -> orange
		// -------------------------------------------------------------------------
		{
			name: "Variable",
			scope: ["variable", "variable.other", "variable.other.readwrite", "variable.parameter"],
			settings: { foreground: variable },
		},

		{
			name: "Built-in variable (this, self, super, etc.)",
			scope: [
				"variable.language",
				"variable.language.this",
				"variable.language.self",
				"variable.language.super",
			],
			settings: { foreground: special },
		},

		// -------------------------------------------------------------------------
		// Parameters -- @parameter -> Special -> orange (nvim-0.8.0 section)
		// -------------------------------------------------------------------------
		{
			name: "Parameter",
			scope: ["variable.parameter.function", "variable.parameter"],
			settings: { foreground: special },
		},

		// -------------------------------------------------------------------------
		// PreProc -- red (Include, Macro, Define)
		// -------------------------------------------------------------------------
		{
			name: "Preprocessor / Include / Macro",
			scope: [
				"keyword.control.directive",
				"keyword.control.import",
				"keyword.other.import",
				"keyword.other.package",
				"keyword.other.using",
				"keyword.other.include",
				"entity.name.function.preprocessor",
				"meta.preprocessor",
				"entity.name.function.macro",
			],
			settings: { foreground: preproc },
		},

		// -------------------------------------------------------------------------
		// Special / Delimiter -- Special -> orange
		// (Delimiter links Special; @punctuation.bracket -> Delimiter -> orange)
		// -------------------------------------------------------------------------
		{
			name: "Bracket / Special",
			scope: [
				"punctuation.section",
				"punctuation.definition.bracket",
				"punctuation.brackets",
				"punctuation.bracket",
				"punctuation.definition.group",
				"punctuation.definition.block",
				"meta.brace",
				"punctuation.separator.key-value",
				"punctuation.definition.parameters",
				"punctuation.definition.binding-pattern",
				"punctuation.definition.begin.bracket",
				"punctuation.definition.end.bracket",
				"punctuation.definition.list",
				"punctuation.definition.arguments",
				"punctuation.curlybrace",
				"punctuation.parenthesis",
				"meta.attribute",
			],
			settings: { foreground: special },
		},

		// @punctuation.delimiter -> Statement -> green (commas, semicolons, dots)
		{
			name: "Punctuation delimiter (comma, semicolon, dot)",
			scope: [
				"punctuation.separator.comma",
				"punctuation.separator",
				"punctuation.terminator",
				"punctuation.accessor",
				"punctuation.definition.tag",
				"punctuation.semi",
				"punctuation.comma",
				"punctuation.other",
			],
			settings: { foreground: statement },
		},

		// Constructor -> Special -> orange (nvim-0.8.0: @constructor -> Special)
		{
			name: "Constructor",
			scope: ["entity.name.function.constructor"],
			settings: { foreground: special },
		},

		// -------------------------------------------------------------------------
		// Tags -- @tag -> green, @tag.attribute -> blue, @tag.delimiter -> red
		// -------------------------------------------------------------------------
		{
			name: "HTML / JSX tag name",
			scope: ["entity.name.tag", "meta.tag entity.name.tag"],
			settings: { foreground: statement },
		},
		{
			name: "HTML / JSX tag attribute",
			scope: ["entity.other.attribute-name", "meta.tag.attributes entity.other.attribute-name"],
			settings: { foreground: function_ },
		},
		{
			name: "HTML / JSX tag delimiter (< > /)",
			scope: [
				"punctuation.definition.tag.begin",
				"punctuation.definition.tag.end",
				"punctuation.separator.namespace",
			],
			settings: { foreground: preproc },
		},

		// -------------------------------------------------------------------------
		// Title -- Title -> orange, bold
		// -------------------------------------------------------------------------
		{
			name: "Title / Heading",
			scope: [
				"entity.name.section",
				"markup.heading",
				"markup.heading.markdown",
				"punctuation.definition.heading",
			],
			settings: { foreground: special, fontStyle: "bold" },
		},

		// -------------------------------------------------------------------------
		// Markup
		// -------------------------------------------------------------------------
		{
			name: "Markup bold -- @text.strong -> base1, bold",
			scope: ["markup.bold", "markup.bold.markdown"],
			settings: { foreground: p.base1, fontStyle: "bold" },
		},
		{
			name: "Markup italic -- @text.emphasis -> base1, bold",
			scope: ["markup.italic", "markup.italic.markdown"],
			settings: { foreground: p.base1, fontStyle: "italic" },
		},
		{
			name: "Markup underline -- @text.underline -> Underlined -> violet",
			scope: ["markup.underline"],
			settings: { foreground: p.violet, fontStyle: "underline" },
		},
		{
			name: "Markup strikethrough -- Strikethrough -> base01",
			scope: ["markup.strikethrough"],
			settings: { foreground: p.base01, fontStyle: "strikethrough" },
		},
		{
			name: "Markup inline code -- @text.literal -> String -> cyan",
			scope: ["markup.inline.raw", "markup.raw.inline"],
			settings: { foreground: constant },
		},
		{
			name: "Markup link URI -- @text.uri -> Underlined -> violet",
			scope: ["markup.underline.link", "meta.link", "string.other.link"],
			settings: { foreground: p.violet, fontStyle: "underline" },
		},
		{
			name: "Markup link title",
			scope: ["entity.name.section.markdown", "string.other.link.title"],
			settings: { foreground: function_ },
		},

		// -------------------------------------------------------------------------
		// Todo -- magenta, bold
		// -------------------------------------------------------------------------
		{
			name: "TODO / FIXME / NOTE",
			scope: ["comment.line.todo", "keyword.other.todo", "invalid.deprecated"],
			settings: { foreground: p.magenta, fontStyle: "bold" },
		},

		// -------------------------------------------------------------------------
		// CSS / SCSS specifics
		// -------------------------------------------------------------------------
		{
			name: "CSS property name",
			scope: ["support.type.property-name.css", "support.type.property-name.scss"],
			settings: { foreground: function_ },
		},
		{
			name: "CSS property value / unit",
			scope: ["support.constant.property-value", "keyword.other.unit", "constant.other.color"],
			settings: { foreground: constant },
		},
		{
			name: "CSS selector",
			scope: [
				"entity.other.attribute-name.class.css",
				"entity.other.attribute-name.id.css",
				"entity.other.attribute-name.pseudo-class",
				"entity.other.attribute-name.pseudo-element",
			],
			settings: { foreground: type_ },
		},

		// -------------------------------------------------------------------------
		// JSON / YAML keys
		// -------------------------------------------------------------------------
		{
			name: "JSON key / YAML key",
			scope: ["support.type.property-name.json", "entity.name.tag.yaml"],
			settings: { foreground: function_ },
		},

		// -------------------------------------------------------------------------
		// Diff
		// -------------------------------------------------------------------------
		{
			name: "Diff added",
			scope: ["markup.inserted", "meta.diff.header.to-file"],
			settings: { foreground: p.green },
		},
		{
			name: "Diff removed",
			scope: ["markup.deleted", "meta.diff.header.from-file"],
			settings: { foreground: p.red },
		},
		{
			name: "Diff changed",
			scope: ["markup.changed"],
			settings: { foreground: p.yellow },
		},

		// -------------------------------------------------------------------------
		// Invalid / Error
		// -------------------------------------------------------------------------
		{
			name: "Invalid / Deprecated",
			scope: ["invalid", "invalid.illegal"],
			settings: { foreground: p.red },
		},

		// -------------------------------------------------------------------------
		// NonText -- base00 (SpecialKey / NonText in Lua)
		// -------------------------------------------------------------------------
		{
			name: "Non-text / Invisible",
			scope: ["meta.embedded"],
			settings: { foreground: v.fgSubtle },
		},
	]

	// ---------------------------------------------------------------------------
	// Semantic token colors
	// Matches the @lsp.type.* section (nvim-0.9.0) and Treesitter groups.
	//
	// Format: "type" | "type.modifier" | "type:language"
	// ---------------------------------------------------------------------------
	const semanticTokenColors: Record<string, string | { foreground: string; fontStyle?: string }> = {
		// Types -- @lsp.type.{type,class,enum,interface,struct,typeParameter} -> Type -> yellow
		type: type_,
		"type.declaration": type_,
		class: type_,
		"class.declaration": type_,
		enum: type_,
		interface: type_,
		struct: type_,
		typeParameter: type_,
		namespace: identifier,

		// Functions -- @lsp.type.function -> Function -> blue
		function: function_,
		"function.declaration": function_,
		method: function_,
		"method.declaration": function_,

		// Variables -- @lsp.type.variable -> TSVariable -> @variable -> base0
		variable: variable,
		"variable.readonly": constant, // treat readonly as constant -> cyan

		// Parameters -- @lsp.type.parameter -> Special -> orange
		parameter: special,

		// Properties -- @lsp.type.property -> TSProperty -> TSField -> Identifier -> blue
		property: identifier,
		"property.readonly": constant,

		// Enum members -- @lsp.type.enumMember -> TSProperty -> blue
		enumMember: identifier,

		// Events -- @lsp.type.events -> Label -> Statement -> green
		event: statement,

		// Keywords -- @lsp.type.keyword -> Keyword -> Statement -> green
		keyword: statement,

		// Modifiers -- @lsp.type.modifier -> Operator -> Statement -> green
		modifier: statement,

		// Macros -- @lsp.type.function (macros via @function.macro -> Macro -> PreProc -> red)
		macro: preproc,

		// Comments -- @lsp.type.comment -> Comment -> base01, italic
		comment: { foreground: comment, fontStyle: "italic" },

		// Strings -- @lsp.type.string -> String -> Text -> cyan
		string: constant,

		// Numbers -- @lsp.type.number -> Number -> Constant -> cyan
		number: constant,

		// Regexp -- @lsp.type.regexp -> TSStringRegex -> Constant -> cyan
		regexp: constant,

		// Operators -- @lsp.type.operator -> Operator -> Statement -> green
		operator: statement,

		// Labels
		label: statement,

		// Decorators / attributes -> Identifier -> blue
		decorator: identifier,

		// Self/this -> Special -> orange (@variable.builtin -> Special)
		selfParameter: special,
		selfKeyword: special,

		// Built-in types (null, undefined, true, false) -> @constant.builtin -> Type -> yellow
		builtinType: type_,
	}

	return { tokenColors, semanticTokenColors }
}
