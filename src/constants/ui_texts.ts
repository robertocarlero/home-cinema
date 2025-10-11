/**
 * UI texts and content constants for the Home Cinema application.
 * Centralizes all user-facing strings for consistency and easy maintenance.
 */

import step1Image from '@/assets/images/step1.png';
import step2Image from '@/assets/images/step2.png';
import step3Image from '@/assets/images/step3.png';

export const HOME_HERO_SECTION = {
	title: 'Home Cinema in Dallas',
	subtitle:
		'From design to setup, we create tailored home theater experiences that fit your lifestyle.',
	primaryButton: 'Request your free consultation',
	secondaryButton: 'See projects',
} as const;

export const NAVIGATION = {
	home: 'Home',
	services: 'Services',
	projects: 'Projects',
	contact: 'Contact',
} as const;

export const HOME_PROCESS_SECTION = {
	title: 'Our 3-Step Home Cinema Design, Installation & Calibration Process',
	description:
		'Enjoy movie nights like never before with premium sound systems, projectors, and custom lighting.',
	primaryButton: 'Our services',
	steps: [
		{
			title: 'In-home assessment & design',
			description:
				'We visit your home, understand your vision, and plan the room layout, acoustics, and equipment for a true theater experience.',
			buttonText: 'Get consult now',
			image: step1Image,
		},
		{
			title: 'Professional installation',
			description:
				'Our certified technicians install all equipment with precision, ensuring optimal performance and seamless integration.',
			buttonText: 'Schedule installation',
			image: step2Image,
		},
		{
			title: 'Calibration & optimization',
			description:
				'We fine-tune every aspect of your system for perfect audio-visual performance tailored to your space.',
			buttonText: 'Book calibration',
			image: step3Image,
		},
	],
} as const;
