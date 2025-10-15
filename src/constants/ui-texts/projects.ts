/**
 * Projects page specific UI texts and content constants.
 * Contains all user-facing strings specific to the projects page.
 */

import featured1 from '@/assets/images/projects/featured-1.png';
import featured2 from '@/assets/images/projects/featured-2.png';
import featured3 from '@/assets/images/projects/featured-3.png';

export const PROJECTS_HERO_SECTION = {
	title: 'Luxury Home Cinemas',
	subtitle: 'Across Dallas',
	description:
		"Explore our portfolio of custom theaters featuring Dolby Atmos, calibrated acoustics, and smart-home control in Dallas's most prestigious neighborhoods.",
	primaryButton: 'Request your free consultation',
	secondaryButton: 'Chat on WhatsApp',
	heroVideoAlt: 'Luxury home cinema projects showcase',
} as const;

export const PROJECTS_FEATURES_SECTION = {
	heading: {
		values: [
			{
				value: 'Our home cinema design is guided by ',
				highlight: false,
			},
			{
				value: 'immersion',
				highlight: true,
			},
			{ value: ', ', highlight: false },
			{ value: 'comfort', highlight: true },
			{ value: ' and ', highlight: false },
			{ value: 'innovation', highlight: true },
			{ value: '.', highlight: false },
		],
	},
	featureCards: [
		{
			title: 'Immersion',
			subtitle: 'Feel every scene',
			image: featured1,
			description:
				'Experience cinematic sound with Dolby Atmos and crystal-clear visuals that pull you into the story. Every frame, every note—completely immersive.',
		},
		{
			title: 'Comfort',
			subtitle: 'Designed for how you live',
			image: featured2,
			description:
				'From acoustic panels to lighting and seating, every element is crafted for relaxation and performance in perfect harmony.',
		},
		{
			title: 'Innovation',
			subtitle: 'Technology that disappears',
			image: featured3,
			description:
				'Smart integration keeps control effortless. Hidden systems, clean lines, and advanced automation let the experience—not the tech—take center stage.',
		},
	],
} as const;

export const PROJECTS_CLAIMS_SECTION = {
	claims: [
		{
			value: '50+',
			description: 'Luxury Installations',
			hasBorder: false,
		},
		{
			value: '10+',
			description: 'Years Experience',
			hasBorder: true,
		},
		{
			value: '100%',
			description: 'Client Satisfaction',
			hasBorder: false,
		},
	],
	buttonText: 'Get Your Free Custom Home Cinema Quote Today',
} as const;
