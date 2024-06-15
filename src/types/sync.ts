declare namespace Sync {
	interface Storage {
		showall: boolean
		quicklinks: boolean
		syncbookmarks?: number
		time: boolean
		main: boolean
		pagegap: number
		pagewidth: number
		linksrow: number
		linkstyle: 'large' | 'medium' | 'small' | 'inline' | 'text'
		linknewtab: boolean
		linktitles: boolean
		linkbackgrounds: boolean
		linktabs?: LinkTabsOld
		linkgroups: LinkGroups
		textShadow: number
		cssHeight?: number
		review: number
		announcements: 'all' | 'major' | 'off'
		reviewPopup?: number | string
		background_blur: number
		background_bright: number
		css: string
		lang: string
		favicon: string
		tabtitle: string
		greeting: string
		notes?: Notes
		hide?: Hide
		dark: 'auto' | 'system' | 'enable' | 'disable'
		background_type: 'local' | 'unsplash'
		dateformat: 'eu' | 'us' | 'cn'
		clock: Clock
		unsplash: Unsplash.Sync
		weather: Weather.Sync
		searchbar: Searchbar
		quotes: Quotes.Sync
		font: Font
		move: Move
		about: {
			browser: string
			version: string
		}
		[key: string]: Links.Link | unknown
	}

	type LinkTabsOld = {
		active: boolean
		selected: number
		titles: string[]
		pinned: number[]
	}

	type LinkGroups = {
		on: boolean
		selected: string
		groups: string[]
		pinned: string[]
		synced: string[]
	}

	type HideOld = [[number, number], [number, number, number], [number], [number]]

	type Hide = {
		clock?: boolean
		date?: boolean
		greetings?: boolean
		weatherdesc?: boolean
		weathericon?: boolean
		settingsicon?: boolean
	}

	type Clock = {
		ampm: boolean
		analog: boolean
		seconds: boolean
		timezone: string
		size: number
		shape: 'round' | 'square' | 'rectangle'
		background: 'light' | 'dark' | 'white' | 'black' | 'none'
		face: 'none' | 'number' | 'roman' | 'marks' | 'swiss' | 'braun'
		border: 'white' | 'black' | 'none'
		hands: 'modern' | 'swiss-hands' | 'classic' | 'braun' | 'apple'
		style?: 'round' | 'square' | 'transparent' // legacy value
	}

	type Searchbar = {
		on: boolean
		width?: number
		opacity: number
		newtab: boolean
		engine: string
		request: string
		suggestions: boolean
		placeholder: string
	}

	type Font = {
		family: string
		size: string
		weight: string
		weightlist: string[]
		system?: boolean
		// <1.19
		url?: string
		availWeights?: string[]
	}

	type Notes = {
		on: boolean
		text?: string
		width?: number
		opacity: number
		align: string
	}

	type Move = {
		selection: MoveSelection
		layouts: {
			single?: MoveLayout
			double?: MoveLayout
			triple?: MoveLayout
		}
	}

	type MoveSelection = 'single' | 'double' | 'triple'

	interface MoveLayout {
		grid: string[][]
		items: {
			[key in Widgets]?: MoveAlign
		}
	}

	interface MoveAlign {
		box: string
		text: string
	}
}
