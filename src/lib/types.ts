namespace CONFIG {
	export type simulation = Simulation & {
		currentId: number | null
		destroyed: boolean
		layers: number[]
	}
	export type master = {
		gridSize: number
		carAmount: number
	}
	export type brain = {
		sensorCount: number
		sensorLength: number
		sensorSpread: number
		minFitness: number
	}
	export type controls = {
		showNetwork: boolean
		playerControls: boolean
		drawSensors: boolean
		cameraFocus: number
		cameraSpeed: number
		carThrust: number
		maxSpeed: number
		carTurnSpeed: number
		carBreakStrength: number
		friction: number
	}

	export type NumberInput = {
		type: 'number'
		min: number
		max: number
		step: number
	}
	export type BooleanInput = {
		type: 'checkbox'
	}

	export type Helper = {
		master: {
			[K in keyof master]: {
				where: 'master'
			} & (NumberInput | BooleanInput)
		}
		brain: {
			[K in keyof brain]: {
				where: 'brain'
			} & (NumberInput | BooleanInput)
		}
		controls: {
			[K in keyof controls]: {
				where: 'controls'
			} & (NumberInput | BooleanInput)
		}
	}
}

type RGB = `rgb(${number}, ${number}, ${number})`
type HSL = `hsl(${number}%, ${number}%, ${number}%)`
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`
type HEX = `#${string}`

type Color = RGB | RGBA | HEX | HSL

type ContextProp = CanvasRenderingContext2D

type XYPosition = [number, number]

type Wall = [XYPosition, XYPosition]

type Size = {
	width: number
	height: number
}

type Enviornment = {
	size: Size
	ctx: ContextProp
}

type CanvasProps = Size & {
	canvas: HTMLCanvasElement
	context: ContextProp
	pixelRatio: number
	time: number
}

type TileRender = (ctx: ContextProp) => (size: Size) => void

type RenderConfig = {
	draw: TileRender
	type: 0 | 1 | 2 | 3 | 4 | 5
	rotate: 0 | 1 | 2 | 3
}

type World = {
	generatedMap: MapGeneration
	dim: number
	size: Size
	backgroundSaved: boolean
}

type HitBox = Size & {
	x: number
	y: number
	angle: number
	physics?: {
		momentum: Vector
		mass: number
	}
}

type Vector = {
	direction: number
	magnitude: number
}
