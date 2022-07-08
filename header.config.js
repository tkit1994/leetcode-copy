const { defineTmHeader } = require('vite-plugin-tm-userscript')

module.exports = defineTmHeader({
	name: 'LeetcodeCopy',
	namespace: 'com.github.tkit1994',
	version: '1.0.1',
	author: 'HaoCheng',
	description: "Add a copy button in leetcode.cn's editor to copy code in vim mode",
	homepage: 'https://github.com/tkit1994/leetcode-copy',
	license: 'MIT',
	match: [
		'https://leetcode.cn/problems/*',
	],
	supportURL: 'https://github.com/tkit1994/leetcode-copy',
	grant: [
		'GM_setClipboard'
	],
	updateURL: "https://gist.github.com/tkit1994/cace80dfd3487af8ff6e43061b54e5db/raw/leetcode-copy.user.js",
	downloadURL: "https://gist.github.com/tkit1994/cace80dfd3487af8ff6e43061b54e5db/raw/leetcode-copy.user.js",
	'run-at': 'document-body'
})
