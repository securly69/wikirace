type RGB = `rgb(${number}, ${number}, ${number})`
type HSL = `hsl(${number}%, ${number}%, ${number}%)`
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`
type HEX = `#${string}`

type Color = RGB | RGBA | HEX | HSL

type Route = {
	index: number
	url: string
	links: string[]
}

type Game = {
	id: string
	route: string[]
	ready: boolean
}

type Player = {
	uid: string
	name: string
	color: Color
	score: number
	progress: Progress
}

type Progress = {
	linkHistory: LinkHistory[]
	linksProgressed: number
	backNavs: number
	isCriticallyClose: boolean
	timesCriticallyClose: number
}

type LinkHistory = {
	type: 'url' | 'back'
	url: string
	index: number
}

type ContextProp = CanvasRenderingContext2D
