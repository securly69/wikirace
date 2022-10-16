import { config } from '$lib/stores'

export const ControlsConfig = {
	onkeydown: (e: KeyboardEvent) => {
		e.preventDefault()
		Controls[e.key] = Actions[e.key] || empty
	},
	onkeyup: (e: KeyboardEvent) => {
		e.preventDefault()
		delete Controls[e.key]
	}
}

export const checkControls = () => {
	const actions: CarActions = { ...nuturalStart }
	Object.keys(Controls).map((f) => Controls[f](actions))
	return actions
}

const nuturalStart: CarActions = {
	thrust: 0,
	breaks: 0,
	angle: 0
}

let THRUST_MAGNITUDE = 3
let BREAK_MAGNITUDE = 0.1
let ANGLE = (0.5 * Math.PI) / 180
config.controls.subscribe(({ carThrust, carTurnSpeed, carBreakStrength }) => {
	THRUST_MAGNITUDE = carThrust
	BREAK_MAGNITUDE = carBreakStrength
	ANGLE = (carTurnSpeed * Math.PI) / 180
})

type MovementAction = (actions: CarActions) => void

const Controls: {
	[key: string]: MovementAction
} = {}

const Actions: {
	[key: string]: MovementAction
} = {
	ArrowUp: (actions) => (actions.thrust = THRUST_MAGNITUDE),
	ArrowDown: (actions) => (actions.thrust = THRUST_MAGNITUDE * -0.4),
	ArrowLeft: (actions) => (actions.angle = -ANGLE),
	ArrowRight: (actions) => (actions.angle = ANGLE),
	Shift: (actions) => (actions.breaks = BREAK_MAGNITUDE),
	Space: (actions) => (actions.breaks = BREAK_MAGNITUDE)
}

const empty: MovementAction = (p) => {}
