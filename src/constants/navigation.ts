/**
 * Navigation routes configuration for the Home Cinema application.
 * Centralizes all navigation paths and labels for consistency.
 */

export interface NavigationRoute {
	href: string;
	label: string;
}

export const ROUTES = {
	SERVICES: {
		href: '/services',
		label: 'Services',
	},
	PROJECTS: {
		href: '/projects',
		label: 'Projects',
	},
	CONTACT: {
		href: '/contact',
		label: 'Contact',
	},
} as const;

export const NAVIGATION_ROUTES: NavigationRoute[] = Object.values(ROUTES);

export const HOME_ROUTE = '/';

export const WHATSAPP_ROUTE = 'https://wa.me/1234567890'; // TODO: Replace with actual WhatsApp number
