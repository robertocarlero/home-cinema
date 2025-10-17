/**
 * Services page specific UI texts and content constants.
 * Contains all user-facing strings specific to the services page.
 */

export const SERVICES_HERO_SECTION = {
	title: 'Home Cinema Services',
	subtitle:
		'Custom design & installation for luxury home theaters in Dallas and premier suburbs.',
	primaryButton: 'Request your free consultation',
	heroImageAlt: 'Luxury home theater with ambient lighting',
} as const;

export const SERVICES_CTAS_SECTION = {
	mainCTA: {
		title: 'Ready to build your private cinema?',
		description:
			"Book your free consultation and we'll contact you within 24 hours.",
		primaryButton: 'Request consultation',
	},
	partnershipCTA: {
		title: 'Partner with our team for luxury residential projects.',
		button: 'Start Your Partnership',
	},
} as const;

export const SERVICES_GRID_SECTION = {
	services: [
		{
			title: 'Home Cinema Designs',
			description: [
				{ text: 'Custom ', highlight: false },
				{ text: 'home theater design', highlight: true },
				{
					text: ' and installation for any budget. We make your space the perfect place for movies, sports, and more.',
					highlight: false,
				},
			],
		},
		{
			title: 'Dream Weaver',
			description: [
				{
					text: 'Convert an existing room or build from scratch. We turn your vision of a ',
					highlight: false,
				},
				{ text: 'private cinema', highlight: true },
				{ text: ' into reality.', highlight: false },
			],
		},
		{
			title: 'Design & Planning',
			description: [
				{ text: 'Our team of ', highlight: false },
				{ text: 'designers and AV experts', highlight: true },
				{
					text: ' creates detailed plans and strategies for flawless results.',
					highlight: false,
				},
			],
		},
		{
			title: 'Wire Management',
			description: [
				{
					text: 'Hide cables with clean in-wall solutions or discreet alternatives. Sleek, clutter-free, and ',
					highlight: false,
				},
				{ text: 'professional', highlight: true },
				{ text: '.', highlight: false },
			],
		},
		{
			title: 'Smart Control & Remotes',
			description: [
				{
					text: 'We program remotes, lighting, and smart devices so your ',
					highlight: false,
				},
				{ text: 'home cinema runs seamlessly', highlight: true },
				{ text: '.', highlight: false },
			],
		},
		{
			title: 'System Optimization',
			description: [
				{
					text: 'Already own equipment? We calibrate and optimize it for ',
					highlight: false,
				},
				{ text: 'peak sound', highlight: true },
				{ text: ' and ', highlight: false },
				{ text: 'picture quality', highlight: true },
				{ text: '.', highlight: false },
			],
		},
		{
			title: 'The Build',
			description: [
				{
					text: 'From start to finish, we handle every detail of your ',
					highlight: false,
				},
				{ text: 'home theater installation', highlight: true },
				{ text: '.', highlight: false },
			],
		},
		{
			title: 'Acoustic Panels',
			description: [
				{ text: 'Stylish, custom ', highlight: false },
				{ text: 'acoustic panels', highlight: true },
				{
					text: ' that improve sound and enhance your décor.',
					highlight: false,
				},
			],
		},
	],
} as const;
