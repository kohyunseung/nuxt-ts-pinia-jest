module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	extends: ['@nuxtjs/eslint-config-typescript', 'plugin:nuxt/recommended', 'prettier', 'plugin:prettier/recommended'],
	plugins: [],
	// add your custom rules here
	rules: {
		'prettier/prettier': [
			'error',
			// 아래 규칙들은 개인 선호에 따라 prettier 문법 적용
			// https://prettier.io/docs/en/options.html
			{
				singleQuote: true,
				useTabs: true,
				tabWidth: 4,
				trailingComma: 'all',
				printWidth: 120,
				bracketSpacing: true,
				arrowParens: 'avoid',
				endOfLine: 'auto',
				semi: false,
				spaceBeforeFunctionParen: 'never',
			},
		],
		// 'prettier/prettier'              : 'error',
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
	},
}
