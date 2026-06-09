/**
 * Global UI texts and content constants.
 * Contains user-facing strings used across the application layout and shared components.
 */

export const NAVIGATION = {
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
		url: 'mailto:contact@homecinema.solutions',
		label: 'Email',
		address: 'contact@homecinema.solutions',
	},
} as const;

export const FOOTER_INFO = {
	address: 'DFW Metroplex, Texas',
	copyright: `© ${new Date().getFullYear()} Home Cinema Solutions, All Rights Reserved.`,
	socialMediaLinks: [
		{
			name: 'Instagram',
			label: 'Instagram',
			url: 'https://www.instagram.com/homecinemasolutions1',
		},
		{
			name: 'Youtube',
			label: 'YouTube',
			url: 'https://www.youtube.com/@homecinemasolutions01',
		},
		{
			name: 'Facebook',
			label: 'Facebook',
			url: 'https://www.facebook.com/homecinemasolutions1',
		},
	],
} as const;

export const PAGE_METADATA = {
	home: {
		title: 'Home Cinema in Dallas - Custom Home Theater Solutions',
		description:
			'From design to setup, we create tailored home theater experiences that fit your lifestyle.',
	},
	services: {
		title: 'Home Cinema Services - Custom Design & Installation',
		description:
			'Custom design & installation for luxury home theaters in Dallas and premier suburbs.',
	},
	projects: {
		title: 'Projects - Luxury Home Cinemas Across Dallas',
		description:
			"Explore our portfolio of luxury home cinema projects featuring Dolby Atmos, calibrated acoustics, and smart-home control in Dallas's most prestigious neighborhoods.",
	},
	contact: {
		title: 'Contact Us - Home Cinema Consultation',
		description:
			'Get in touch with our home cinema specialists. Start your consultation today and bring your vision to life.',
	},
} as const;
