import { pipe } from '$lib/fp-ts'
import { lerp } from '$lib/utils'
import { declareCanvas } from '../Controls/canvas'
import { clean } from '../Environment/city'

let networkContext: ContextProp
const networkCanvasId = 'network-canvas'
const NODE_COLOR = 'transparent'
const BORDER_COLOR = 'grey'
const BACKGROUND_COLOR = 'black'
const TEXT_COLOR = 'white'

let network: Layer[]

export const renderNetwork = (display: boolean, time: number) => (ctx: ContextProp) => {
	if (!display) return ctx

	const size: Size = { width: ctx.canvas.width / 2.5, height: ctx.canvas.height / 2.5 }

	networkContext = networkContext ?? declareCanvas(networkCanvasId, size).ctx

	pipe(networkContext, clean(size), draw(network, time))

	return ctx
}

const draw = (network: Layer[], time: number) => (ctx: ContextProp) => {
	if (!network) return

	const margin = 50
	const left = margin
	const top = margin
	const width = ctx.canvas.width - margin * 2
	const height = ctx.canvas.height - margin * 2
	const borderWidth = 2

	ctx.lineDashOffset = -time / 50
	ctx.lineWidth = borderWidth * 2

	ctx.fillStyle = BACKGROUND_COLOR
	ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

	ctx.strokeStyle = BACKGROUND_COLOR
	ctx.strokeRect(
		borderWidth,
		borderWidth,
		ctx.canvas.width - borderWidth * 2,
		ctx.canvas.height - borderWidth * 2
	)

	ctx.strokeStyle = BORDER_COLOR
	ctx.strokeRect(
		borderWidth * 3,
		borderWidth * 3,
		ctx.canvas.width - borderWidth * 6,
		ctx.canvas.height - borderWidth * 6
	)

	const levelHeight = height / network.length

	for (let i = network.length - 1; i >= 0; i--) {
		const levelTop =
			top + lerp(height - levelHeight, 0, network.length == 1 ? 0.5 : i / (network.length - 1))

		ctx.setLineDash([7, 3])
		drawLevel(
			ctx,
			network[i],
			left,
			levelTop,
			width,
			levelHeight,
			i == network.length - 1 ? ['T', 'L', 'Ri', 'B', 'Re'] : []
		)
	}

	return ctx
}

const drawLevel = (
	ctx: ContextProp,
	level: Layer,
	left: number,
	top: number,
	width: number,
	height: number,
	outputLabels: string[]
) => {
	const right = left + width
	const bottom = top + height

	const { inputs, outputs, weights, biases } = level

	for (let i = 0; i < inputs.length; i++) {
		for (let j = 0; j < outputs.length; j++) {
			ctx.beginPath()
			ctx.moveTo(getNodeX(inputs, i, left, right), bottom)
			ctx.lineTo(getNodeX(outputs, j, left, right), top)
			ctx.lineWidth = 2
			ctx.strokeStyle = getRGBA(weights[i][j])
			ctx.stroke()
		}
	}

	const nodeRadius = 18
	for (let i = 0; i < inputs.length; i++) {
		const x = getNodeX(inputs, i, left, right)
		ctx.beginPath()
		ctx.arc(x, bottom, nodeRadius * 0.85, 0, Math.PI * 2)
		ctx.fillStyle = NODE_COLOR
		ctx.fill()
		ctx.beginPath()
		ctx.arc(x, bottom, nodeRadius * 0.6, 0, Math.PI * 2)
		ctx.fillStyle = getRGBA(inputs[i])
		ctx.fill()
	}

	for (let i = 0; i < outputs.length; i++) {
		const x = getNodeX(outputs, i, left, right)
		ctx.beginPath()
		ctx.arc(x, top, nodeRadius * 0.85, 0, Math.PI * 2)
		ctx.fillStyle = NODE_COLOR
		ctx.fill()
		ctx.beginPath()
		ctx.arc(x, top, nodeRadius * 0.6, 0, Math.PI * 2)
		ctx.fillStyle = getRGBA(outputs[i])
		ctx.fill()

		ctx.beginPath()
		ctx.lineWidth = 2
		ctx.arc(x, top, nodeRadius * 1, 0, Math.PI * 2)
		ctx.strokeStyle = getRGBA(biases[i])
		ctx.setLineDash([3, 3])
		ctx.stroke()
		ctx.setLineDash([])

		if (outputLabels[i]) {
			ctx.beginPath()
			ctx.textAlign = 'center'
			ctx.textBaseline = 'middle'
			ctx.fillStyle = TEXT_COLOR
			ctx.strokeStyle = TEXT_COLOR
			ctx.font = nodeRadius * 0.9 + 'px Arial'
			ctx.fillText(outputLabels[i], x, top + nodeRadius * 0.1)
			ctx.lineWidth = 0.5
			ctx.strokeText(outputLabels[i], x, top + nodeRadius * 0.1)
		}
	}
}

const getNodeX = (nodes: LayerNode[], index: number, left: number, right: number) =>
	lerp(left, right, nodes.length == 1 ? 0.5 : index / (nodes.length - 1))

const getRGBA = (value: number) => {
	const alpha = Math.abs(value)
	const R = 255
	const B = 0
	const G = value > 0 ? 255 : 0
	return `rgba(${R},${G},${B},${alpha})`
}

export const setNetworkToRender = (renderer: Layer[]) => (network = renderer)
