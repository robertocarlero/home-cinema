/**
 * Navigation routes configuration for the Home Cinema application.
 * Centralizes all navigation paths and labels for consistency.
 */

import { NAVIGATION } from './ui-texts/global';

export interface NavigationRoute {
	href: string;
	label: string;
}

export const ROUTES = {
	SERVICES: {
		href: '/services',
		label: NAVIGATION.services,
	},
	PROJECTS: {
		href: '/projects',
		label: NAVIGATION.projects,
	},
	CONTACT: {
		href: '/contact',
		label: NAVIGATION.contact,
	},
} as const;

export const NAVIGATION_ROUTES: NavigationRoute[] = Object.values(ROUTES);

export const HOME_ROUTE = '/';

export const WHATSAPP_ROUTE = 'https://wa.me/1234567890'; // TODO: Replace with actual WhatsApp number
