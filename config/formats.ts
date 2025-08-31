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
	{
		effectType: 'Rule',
		name: 'No Preview',
		desc: "Players cannot see each other's teams before battle",
		onBegin() {
			this.add('rule', 'No Team Preview');
		},
	},

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
			"Picked Team Size = 6",   
		],
		banlist: [
			"Uber", "AG",             // ✅ Legendarios y míticos
			"Baton Pass", "Perish Song", // ✅ Estrategias abusivas
			"King's Rock", "Razor Fang", "Quick Claw", "Focus Band", "Scope Lens", // ✅ Items de suerte
		],
	},
	
	// Formato 1vs1 Se Vale Todo
	///////////////////////////////////////////////////////////////////
	{
		name: "1vs1 Se Vale Todo",
		desc: "Batalla 1vs1 sin restricciones. ¡Todo está permitido!",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3661297/">Formato 1vs1</a>`,
		],
		ruleset: [
			'Team Preview', 
			'Picked Team Size = 1', 
			'Max Team Size = 3',
			'Obtainable', 
			'OHKO Clause', 
			'Evasion Moves Clause', 
			"+No Preview", 
		],
		banlist: [
			// Pokémon específicos muy rotos en 1vs1
			'Arceus', 'Calyrex-Shadow', 'Dialga', 'Dialga-Origin', 'Eternatus', 'Giratina', 'Giratina-Origin',
			'Groudon', 'Koraidon', 'Kyogre', 'Kyurem-White', 'Lugia', 'Lunala', 'Magearna', 'Mewtwo',
			'Miraidon', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Palkia-Origin', 'Rayquaza',
			'Reshiram', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zacian', 'Zacian-Crowned', 'Zamazenta', 'Zamazenta-Crowned',
			'Zekrom',
			
			// Movimientos/estrategias problemáticas
			'Perish Song', 'Sing', 'Grass Whistle', 'Hypnosis', 'Lovely Kiss', 'Sleep Powder', 'Spore',
			
			// Items problemáticos
			'Quick Claw', 'Focus Band', 'Kings Rock', 'Razor Fang',
		],
		onBattleStart() {
			this.add('message', '¡1vs1 Todo Vale! Los equipos están ocultos para los oponentes.');
		},
		onTeamPreview() {
			this.add('message', 'Los equipos de los oponentes permanecen ocultos');
			return false;
		},
	},
];
