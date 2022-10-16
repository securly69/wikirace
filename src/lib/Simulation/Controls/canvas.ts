import { canvas, context } from '$lib/stores'

let DEFAULT_CANVAS: HTMLCanvasElement
let DEFAULT_CONTEXT: ContextProp

canvas.subscribe((canvas) => {
	DEFAULT_CANVAS = canvas
})
context.subscribe((context) => {
	DEFAULT_CONTEXT = context
})

export const declareCanvas = (name: string, size: Size) => {
	const canvas =
		(document.getElementById(name) as HTMLCanvasElement) ||
		errorAndReturn('error: declaring canvas returned null', DEFAULT_CANVAS)

	canvas.width = size.width
	canvas.height = size.height
	const ctx =
		canvas.getContext('2d') ||
		errorAndReturn('error: declaring context returned null', DEFAULT_CONTEXT)

	return { canvas, ctx }
}

const errorAndReturn = <T>(msg: string, ret: T) => {
	console.error(msg)
	return ret
}
