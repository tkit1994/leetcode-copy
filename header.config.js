const { defineTmHeader } = require('vite-plugin-tm-userscript')

module.exports = defineTmHeader({
	name: 'LeetcodeCopy',
	namespace: 'com.github.tkit1994',
	version: '0.0.1',
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
	'run-at': 'document-body'
})