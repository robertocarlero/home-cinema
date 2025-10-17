/**
 * Global UI texts and content constants.
 * Contains user-facing strings used across the application layout and shared components.
 */

export const NAVIGATION = {
	home: 'Home',
	services: 'Services',
	projects: 'Projects',
	contact: 'Contact',
} as const;

export const CONTACT_LINKS = {
	whatsapp: {
		url: 'https://wa.me/14694125478',
		label: 'Chat on WhatsApp',
	},
	phone: {
		url: 'tel:+14694125478',
		label: 'Call now',
		displayNumber: '(469) 412-5478',
	},
	email: {
		url: 'mailto:hello@mediamasters.solutions',
		label: 'Email us',
		address: 'hello@mediamasters.solutions',
	},
} as const;

export const FOOTER_INFO = {
	address: 'DFW Metroplex, Texas',
	phone: '(469) 412-5478',
	copyright: `© ${new Date().getFullYear()} Home Cinema Solutions, All Rights Reserved.`,
	socialMediaLinks: [
		{
			name: 'Instagram',
			label: 'Instagram',
			url: 'https://instagram.com/mediamasters.solutions',
		},
		{
			name: 'Youtube',
			label: 'YouTube',
			url: 'https://youtube.com/@mediamasters.solutions',
		},
		{
			name: 'Facebook',
			label: 'Facebook',
			url: 'https://facebook.com/mediamasters.solutions',
		},
	],
} as const;
