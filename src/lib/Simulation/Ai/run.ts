import { pipe } from '$lib/fp-ts'
import { config } from '$lib/stores'
import { split } from '$lib/utils'
import { checkControls } from '../Controls/controls'
import { destinationAngleAccuracy } from '../Sensor.ts/destination'
import { prediction, watch } from './network'
import { setNetworkToRender } from './render'

let CAR_FOCUS = 0
let THRUST_MAGNITUDE = 3
let BREAK_MAGNITUDE = 0.1
let ANGLE = (0.5 * Math.PI) / 180
let PLAYER_CONTROLS = false
config.controls.subscribe((props) => {
	CAR_FOCUS = props.cameraFocus
	PLAYER_CONTROLS = props.playerControls
	THRUST_MAGNITUDE = props.carThrust
	BREAK_MAGNITUDE = props.carBreakStrength
	ANGLE = (props.carTurnSpeed * Math.PI) / 180
})

export const ai = (cars: NetworkInputs) =>
	PLAYER_CONTROLS
		? cars.map(({ car }) => ({ car, action: checkControls() }))
		: cars.map(({ car, sensor }, i) => convert(car, sensor, i))

const convert = (car: Car, sensor: Ray[], which: number) => {
	const [thrust, left, right, breaking, reverse] = pipe(
		[destinationAngleAccuracy(car), ...sensor.map((s) => 1 - (s.contacts[0]?.offset ?? 1))],
		split(
			(input) => (which === CAR_FOCUS ? pipe(input, watch(car.brain), setNetworkToRender) : null),
			prediction(car.brain)
		)
	)[1]

	return {
		car,
		action: {
			thrust: THRUST_MAGNITUDE * thrust * (reverse > 0.5 ? -0.4 : 1),
			angle: ANGLE * -left + ANGLE * right,
			breaks: BREAK_MAGNITUDE * breaking
		}
	}
}
