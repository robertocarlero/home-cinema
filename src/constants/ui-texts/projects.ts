/**
 * Projects page specific UI texts and content constants.
 * Contains all user-facing strings specific to the projects page.
 */

export const PROJECTS_HERO_SECTION = {
	title: 'Luxury Home Cinemas',
	subtitle: 'Across Dallas',
	description:
		"Explore our portfolio of custom theaters featuring Dolby Atmos, calibrated acoustics, and smart-home control in Dallas's most prestigious neighborhoods.",
	primaryButton: 'Request your free consultation',
	secondaryButton: 'Chat on WhatsApp',
	heroVideoAlt: 'Luxury home cinema projects showcase',
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
