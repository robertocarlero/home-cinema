/**
 * Contact page specific UI texts and content constants.
 * Contains all user-facing strings specific to the contact page.
 */

export const CONTACT_HERO_SECTION = {
	tagline: 'Let’s bring your vision to life.',
	title: 'Start your Home Cinema consultation',
	subtitle:
		"Ready to design your perfect home theater? Whether you're starting from scratch or upgrading your current setup, our specialists are here to help.",
	description:
		"Tell us about your space, your goals, and your style—we'll take care of the rest.",
	contactInfo: {
		email: {
			label: 'Email:',
			value: 'hello@mediamasters.solutions',
			link: 'mailto:hello@mediamasters.solutions',
		},
		phone: {
			label: 'Phone:',
			value: '(469) 412-5478',
			link: 'tel:+14694125478',
		},
	},
	whatsappButton: 'Chat on WhatsApp',
	whatsappLink: 'https://wa.me/14694125478',
} as const;

export const CONTACT_FAQ_SECTION = {
	tagline: 'FAQ',
	title: 'Have questions about your Home Cinema project?',
	description:
		"If you're unsure where to start, what to expect, or how the process works, we're here to guide you.",
} as const;

export const CONTACT_FORM = {
	fields: {
		name: {
			label: 'Full name',
			placeholder: 'Full name',
		},
		email: {
			label: 'Email address',
			placeholder: 'Email address',
		},
		message: {
			label: 'Message',
			placeholder: 'Message',
		},
	},
	submitButton: 'Send message',
	submittingButton: 'Sending...',
	messages: {
		success: 'Message sent successfully!',
		error: 'Failed to send message. Please try again.',
	},
} as const;

export const CONTACT_FAQ_ACCORDION = {
	items: [
		{
			question: "What's included in a Home Cinema installation?",
			answer: 'Every installation includes a tailored setup: audio calibration, acoustic optimization, projector or TV installation, and smart integration.',
		},
		{
			question: 'Do you offer custom designs?',
			answer: 'Absolutely. We specialize in fully customized designs that match your space, style, and performance goals.',
		},
		{
			question: 'Can you upgrade my existing system?',
			answer: 'Yes — we can integrate your current equipment, enhance audio and visual quality, or modernize your control systems.',
		},
		{
			question: 'How long does the installation take?',
			answer: "Typical installations take between 1 and 3 weeks, depending on the project's complexity and customization level.",
		},
		{
			question: 'Do you work with designers or builders?',
			answer: 'We frequently collaborate with architects, interior designers, and builders to ensure a seamless integration into your home design.',
		},
	],
} as const;
