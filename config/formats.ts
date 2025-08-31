// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: import('../sim/dex-formats').FormatList = [

	// S/V Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "Frontier Event",
		column: 1,
	},
	{
		name: "[Frontier] Boss Rush 6v6",
		desc: "Formato exclusivo del torneo Boss Rush.",
		ruleset: [
			"Standard NatDex",        // ✅ Ya incluye: Species, OHKO, Evasion, Sleep Clause
			"Picked Team Size = 6",   // ✅ Equipo de 6 Pokémon
		],
		banlist: [
			"Uber", "AG",             // ✅ Legendarios y míticos
			"Baton Pass", "Perish Song", // ✅ Estrategias abusivas
			"King's Rock", "Razor Fang", "Quick Claw", "Focus Band", "Scope Lens", // ✅ Items de suerte
		],
	},
];
