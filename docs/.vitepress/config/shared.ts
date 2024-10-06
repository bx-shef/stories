import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vitepress'
import { configParams } from './params'

/**
 * @memo fix
 */
const customAlias: any = [
	{
		find: '~/.vitepress',
		replacement: fileURLToPath(new URL('./../', import.meta.url)),
	}
];

export const shared = defineConfig({
	title: 'Маленькие истории для чтения на английском',
	
	lastUpdated: false,
	cleanUrls: false,
	metaChunk: true,
	
	base: configParams.baseFolder,
	
	/* prettier-ignore */
	head: [
		/*/
		['link', { rel: 'icon', href: `${configParams.baseFolder}favicon.ico` }],
		['meta', { name: 'theme-color', content: '#5f67ee' }],
		['meta', { property: 'og:type', content: 'website' }],
		['meta', { property: 'og:locale', content: 'ru' }],
		['meta', { property: 'og:title', content: '@bitrix24/b24jssdk | Bitrix24 REST API JS SDK' }],
		['meta', { property: 'og:site_name', content: '@bitrix24/b24jssdk' }],
		// @todo fix this ////
		//['meta', { property: 'og:image', content: `${configParams.domain}${configParams.baseFolder}bitrix24_b24jssdk.jpg` }],
		['meta', { property: 'og:url', content: `${configParams.domain}${configParams.baseFolder}` }],
		//*/
	],
	
	themeConfig: {
		siteTitle: 'Stories',
		
		socialLinks: [],
	},
	vite: {
		define: {
			__SH_BASE__: configParams
		},
		resolve: {
			alias: customAlias
		},
	}
})