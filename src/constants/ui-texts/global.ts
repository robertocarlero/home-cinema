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

export const FOOTER_INFO = {
	address: 'DFW Metroplex, Texas',
	phone: '(469) 412-5478',
	copyright: `© ${new Date().getFullYear()} Home Cinema Solutions, All Rights Reserved.`,
	socialMediaLinks: [
		{ name: 'Instagram', label: 'Instagram', url: '#' },
		{ name: 'Youtube', label: 'YouTube', url: '#' },
		{ name: 'Facebook', label: 'Facebook', url: '#' },
	],
} as const;
