import { defineConfig, type DefaultTheme } from 'vitepress'
import { configParams } from './params'

export const ru = defineConfig({
	lang: 'ru-RU',
	description: 'Маленькие истории для чтения на английском',
	
	themeConfig: {
		nav: nav(),
		
		sidebar: {
			'/beginner-level/': { base: '/beginner-level/', items: sidebarBeginner() },
			'/intermediate-level/': { base: '/intermediate-level/', items: intermediateReference() }
		},
		
		editLink: {
			pattern: 'https://github.com/bx-shef/stories/edit/main/docs/:path',
			text: 'Редактировать страницу'
		},
		
		footer: {
			message: 'Опубликовано под лицензией MIT.',
			copyright: 'Copyright © 2024 – настоящее время ИП Шевчик И.С.'
		},
		
		outline: { label: 'Содержание страницы' },
		
		docFooter: {
			prev: 'Предыдущая страница',
			next: 'Следующая страница'
		},
		
		lastUpdated: {
			text: 'Обновлено'
		},
		
		darkModeSwitchLabel: 'Оформление',
		lightModeSwitchTitle: 'Переключить на светлую тему',
		darkModeSwitchTitle: 'Переключить на тёмную тему',
		sidebarMenuLabel: 'Меню',
		returnToTopLabel: 'Вернуться к началу',
		langMenuLabel: 'Изменить язык'
	}
})


function nav(): DefaultTheme.NavItem[] {
	return [
		{text: 'Начальный уровень', link: '/beginner-level/story-1'},
		{text: 'Средний уровень', link: '/intermediate-level/story-1'},
		{
			text: configParams.version,
			items: [
				{
					text: 'Changelog',
					link: `${configParams.github}/blob/main/CHANGELOG.md`
				},
				... configParams.relative
			]
		}
	]
}

function sidebarBeginner(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: 'Начальный уровень',
			collapsed: false,
			items: [
				{ text: 'The Curious Cat', link: 'story-1' },
				{ text: 'The Flying Carpet', link: 'story-2' },
				{ text: 'The Talking Parrot', link: 'story-3' },
				{ text: 'The Friendly Dragon', link: 'story-4' },
				{ text: 'The Time-Traveling Watch', link: 'story-5' },
				{ text: 'The Brave Little Mouse', link: 'story-6' },
			]
		},
		{ text: 'Средний уровень', link: '../intermediate-level/story-1' },
	]
}

function intermediateReference(): DefaultTheme.SidebarItem[] {
	return [
		{
			text: 'Средний уровень',
			collapsed: false,
			items: [
				{ text: 'The Enchanted Forest', link: 'story-1' },
				{ text: 'The Secret Garden', link: 'story-2' },
				{ text: 'The Lost Treasure', link: 'story-3' },
				{ text: 'The Invisible Cloak', link: 'story-4' },
				{ text: 'The Singing River', link: 'story-5' },
				{ text: 'The Magical Garden', link: 'story-6' },
			]
		},
		{ text: 'Начальный уровень', link: '../beginner-level/story-1' },
	]
}