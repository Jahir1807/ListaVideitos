module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,jpg,html,js,json,zip}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};