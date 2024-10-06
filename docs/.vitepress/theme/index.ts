// https://vitepress.dev/guide/custom-theme
import {h, shallowRef} from 'vue'
import type {Theme} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './tailwind.post.css'
import TextToSpeech from './components/TextToSpeech.vue'

export default {
	extends: DefaultTheme,
	Layout: () =>
	{
		return h(DefaultTheme.Layout, null, {
			// https://vitepress.dev/guide/extending-default-theme#layout-slots
		})
	},
	enhanceApp({app, router, siteData})
	{
		app.component('TextToSpeech', TextToSpeech)
	}
} satisfies Theme
