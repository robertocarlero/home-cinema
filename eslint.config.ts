import perfectionist from 'eslint-plugin-perfectionist';
import eslintPluginAstro from 'eslint-plugin-astro';
const jsxA11y = require('eslint-plugin-jsx-a11y');

export default [
	...eslintPluginAstro.configs.recommended,
	{
		plugins: {
			perfectionist,
			'jsx-a11y': jsxA11y,
		},
		rules: {
			'perfectionist/sort-imports': 'error',
			'perfectionist/sort-jsx-props': 'error',
		},
	},
];
