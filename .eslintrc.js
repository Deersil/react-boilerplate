module.exports = {
	extends: [ 'react-app', 'airbnb', 'prettier', 'eslint:recommended', 'plugin:react/recommended', 'prettier/react' ],
	rules: {
		'prettier/prettier': 'error',
		'react/jsx-filename-extension': [ 1, { extensions: [ '.js', '.jsx' ] } ],
		'import/no-extraneous-dependencies': 'off'
	},
	plugins: [ 'prettier', 'react' ],
	settings: {
		'import/resolver': {
			alias: {
				root: [ './src' ],
				map: [
					[ '@components', './src/components' ],
					[ '@assets', './src/assets' ],
					[ '@utils', './src/utils' ],
					[ '@containers', './src/containers' ],
					[ '@history', './src/history' ],
					[ '@schemas', './src/schemas' ],
					[ '@constants', './src/constants' ]
				],
				extensions: [ '.ts', '.js', '.jsx', '.json' ]
			}
		}
	}
};
