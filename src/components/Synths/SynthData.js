import M0 from '../../modes/m0.png';
import M1 from '../../modes/m1.png';
import M2 from '../../modes/m2.png';
import M3 from '../../modes/m3.png';
import M4 from '../../modes/m4.png';
import M5 from '../../modes/m5.png';
import M6 from '../../modes/m6.png';
import M7 from '../../modes/m7.png';
import M8 from '../../modes/m8.png';
import M9 from '../../modes/m9.png';
import M10 from '../../modes/m10.png';
import M11 from '../../modes/m11.png';
import M12 from '../../modes/m12.png';
import M13 from '../../modes/m13.png';
import M14 from '../../modes/m14.png';
import M15 from '../../modes/m15.png';
import M16 from '../../modes/M16.gif';


  export const data = [
	{
		title: 'MODE 0: Circles on Circles',
		description: 'NFT: 1942_TheNeighbourhood_Softcore',
		image: M0,
	},
	{
		title: 'MODE 1: Squares n Diamonds',
		description: 'NFT: 1321_BrentFaiyaz_MissinOut',
		image: M1,
	},
	{
		title: 'MODE 2: Polygons',
		description: 'NFT: 2285_SwedishHouseMafia_MothToAFlame',
		image: M2,
	},
	{
		title: 'MODE 3: Voice Bar + Triangles',
		description: 'NFT: 1905_Amine_WeddingCrashers',
		image: M3,
	},
	{
		title: 'MODE 4: Super Star Mode',
		description: 'NFT: 0053_Adele_ToBeLoved',
		image: M4,
	},
    {
		title: 'MODE 5: Origami Mode',
		description: 'NFT: 2359_KingsOfLeon_Reverend',
		image: M5,
	},
	{
		title: 'MODE 6: Musical Notes Symph',
		description: 'NFT: 1696_Kaytranda_BeYourGirl',
		image: M6,
	},
	{
		title: 'MODE 7: Rose Mode',
		description: 'NFT: 0302_Ashanti_AlwaysOnTime',
		image: M7,
	},
	{
		title: 'MODE 8: Random Mode ',
		description: 'NFT: 0843_YoungThug_Hot',
		image: M8,
	},
	{
		title: 'MODE 9: Glitched Random',
		description: 'NFT: 1050_21Savage_X',
		image: M9,
	},
    {
		title: 'MODE 10: Special Butterfly',
		description:'NFT: 2222_Gunna_PushinP',
		image: M10,
	},
	{
		title: 'MODE 11: Special Hearts',
		description: 'NFT: 0682_Metallica_NothingElseMatters',
		image: M11,
	},
	{
		title: 'MODE 12: Spiral Crazy',
		description: 'NFT: 1087_Logic_GangRelated',
		image: M12,
	},
	{
		title: 'MODE 13: Random Specials',
		description: 'NFT: 1787_deadmau5_Strobe',
		image: M13,
	},
	{
		title: 'MODE 14: Birdz n Treez ',
		description: 'NFT: 2096_BowWow_OuttaMySystem',
		image: M14,
	},
    {
		title: 'MODE 15: Special Polygon Mode',
		description:'NFT: 1640_FlatbushZombies_SMOKEBREAK_INTERLUDE',
		image: M15,
    },
	{
		title: 'ANOMALY',
		description:'',
		image: M16,
    }
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};