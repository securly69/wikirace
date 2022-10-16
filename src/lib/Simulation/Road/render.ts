import { lerp } from '$lib/utils'

export const LANE_AMOUNT = 6
const LINE_AMOUNT = 16
const LINE_WIDTH = 5
const LINE_COLOR = 'black'
const ROAD_COLOR = 'gray'
const solidLines = [0, 0]

const tiles = [
	(ctx: ContextProp) => (size: Size) => {
		ctx.fillStyle = ROAD_COLOR
		const roadStart = lerp(0, size.width, 1 / LANE_AMOUNT)
		ctx.fillRect(
			roadStart - LINE_WIDTH * 2,
			0,
			size.width - roadStart * 2 + LINE_WIDTH * 4,
			size.height
		)

		ctx.lineWidth = LINE_WIDTH
		ctx.strokeStyle = LINE_COLOR

		const lineSpace = size.height / LINE_AMOUNT
		const dashedLines = [lineSpace, lineSpace]

		new Array(LANE_AMOUNT - 1).fill(0).forEach((_, i) => {
			const x = lerp(0, size.width, (i + 1) / LANE_AMOUNT)
			ctx.beginPath()
			ctx.setLineDash(i == 0 || i == LANE_AMOUNT - 2 ? solidLines : dashedLines)
			ctx.moveTo(x, 0)
			ctx.lineTo(x, size.height)
			ctx.stroke()
		})
	}, // 0 straight
	(ctx: ContextProp) => (size: Size) => {
		ctx.fillStyle = ROAD_COLOR
		const roadStart = {
			x: lerp(0, size.width, 1 / LANE_AMOUNT),
			y: lerp(0, size.height, 1 / LANE_AMOUNT)
		}

		ctx.fillRect(
			roadStart.x - LINE_WIDTH * 2,
			0,
			size.width - roadStart.x * 2 + LINE_WIDTH * 4,
			size.height
		)
		ctx.fillRect(
			0,
			roadStart.y - LINE_WIDTH * 2,
			size.width,
			size.height - roadStart.y * 2 + LINE_WIDTH * 4
		)

		ctx.fillStyle = LINE_COLOR
		ctx.beginPath()
		ctx.arc(roadStart.x, roadStart.y, LINE_WIDTH / 2, 0, 2 * Math.PI)
		ctx.fill()
		ctx.beginPath()
		ctx.arc(size.width - roadStart.x, roadStart.y, LINE_WIDTH / 2, 0, 2 * Math.PI)
		ctx.fill()
		ctx.beginPath()
		ctx.arc(roadStart.x, size.height - roadStart.y, LINE_WIDTH / 2, 0, 2 * Math.PI)
		ctx.fill()
		ctx.beginPath()
		ctx.arc(size.width - roadStart.x, size.height - roadStart.y, LINE_WIDTH / 2, 0, 2 * Math.PI)
		ctx.fill()

		ctx.lineWidth = LINE_WIDTH
		ctx.strokeStyle = LINE_COLOR

		const lineSpace = size.height / LINE_AMOUNT
		const lineSpaceWidth = size.width / LINE_AMOUNT
		const dashedLines = [lineSpace, lineSpace]
		const dashedLinesWidth = [lineSpaceWidth, lineSpaceWidth]

		new Array(LANE_AMOUNT - 1).fill(0).forEach((_, i) => {
			let x = lerp(0, size.width, (i + 1) / LANE_AMOUNT)
			let y = lerp(0, size.height, 1 / LANE_AMOUNT)

			ctx.setLineDash(i == 0 || i == LANE_AMOUNT - 2 ? solidLines : dashedLines)

			ctx.beginPath()
			ctx.moveTo(x, 0)
			ctx.lineTo(x, y)
			ctx.stroke()

			ctx.beginPath()
			ctx.moveTo(x, size.height - y)
			ctx.lineTo(x, size.height)
			ctx.stroke()

			x = lerp(0, size.width, 1 / LANE_AMOUNT)
			y = lerp(0, size.height, (i + 1) / LANE_AMOUNT)

			ctx.setLineDash(i == 0 || i == LANE_AMOUNT - 2 ? solidLines : dashedLinesWidth)

			ctx.beginPath()
			ctx.moveTo(0, y)
			ctx.lineTo(x, y)
			ctx.stroke()

			ctx.beginPath()
			ctx.moveTo(size.width - x, y)
			ctx.lineTo(size.width, y)
			ctx.stroke()
		})
	}, // 1 four
	(ctx: ContextProp) => (size: Size) => {
		ctx.fillStyle = ROAD_COLOR
		const roadStart = {
			x: lerp(0, size.width, 1 / LANE_AMOUNT),
			y: lerp(0, size.height, 1 / LANE_AMOUNT)
		}

		ctx.fillRect(
			roadStart.x - LINE_WIDTH * 2,
			0,
			size.width - roadStart.x * 2 + LINE_WIDTH * 4,
			size.height
		)
		ctx.fillRect(
			0,
			roadStart.y - LINE_WIDTH * 2,
			size.width / 2,
			size.height - roadStart.y * 2 + LINE_WIDTH * 4
		)

		ctx.fillStyle = LINE_COLOR
		ctx.beginPath()
		ctx.arc(roadStart.x, roadStart.y, LINE_WIDTH / 2, 0, 2 * Math.PI)
		ctx.fill()
		ctx.beginPath()
		ctx.arc(roadStart.x, size.height - roadStart.y, LINE_WIDTH / 2, 0, 2 * Math.PI)
		ctx.fill()

		ctx.lineWidth = LINE_WIDTH
		ctx.strokeStyle = LINE_COLOR

		const lineSpace = size.height / LINE_AMOUNT
		const lineSpaceWidth = size.width / LINE_AMOUNT
		const dashedLines = [lineSpace, lineSpace]
		const dashedLinesWidth = [lineSpaceWidth, lineSpaceWidth]

		new Array(LANE_AMOUNT - 1).fill(0).forEach((_, i) => {
			let x = lerp(0, size.width, (i + 1) / LANE_AMOUNT)
			let y = lerp(0, size.height, 1 / LANE_AMOUNT)

			if (i == LANE_AMOUNT - 2) {
				ctx.setLineDash(solidLines)
				ctx.beginPath()
				ctx.moveTo(x, 0)
				ctx.lineTo(x, size.height)
				ctx.stroke()
			} else {
				ctx.setLineDash(i == 0 || i == LANE_AMOUNT - 2 ? solidLines : dashedLines)

				ctx.beginPath()
				ctx.moveTo(x, 0)
				ctx.lineTo(x, y)
				ctx.stroke()

				ctx.beginPath()
				ctx.moveTo(x, size.height - y)
				ctx.lineTo(x, size.height)
				ctx.stroke()
			}

			x = lerp(0, size.width, 1 / LANE_AMOUNT)
			y = lerp(0, size.height, (i + 1) / LANE_AMOUNT)

			ctx.setLineDash(i == 0 || i == LANE_AMOUNT - 2 ? solidLines : dashedLinesWidth)

			ctx.beginPath()
			ctx.moveTo(0, y)
			ctx.lineTo(x, y)
			ctx.stroke()
		})
	}, // 2 three
	(ctx: ContextProp) => (size: Size) => {
		ctx.fillStyle = ROAD_COLOR
		const roadStart = {
			x: lerp(0, size.width, 1 / LANE_AMOUNT),
			y: lerp(0, size.height, 1 / LANE_AMOUNT)
		}

		ctx.fillRect(
			roadStart.x - LINE_WIDTH * 2,
			0,
			size.width - roadStart.x * 2 + LINE_WIDTH * 4,
			size.height - roadStart.y
		)
		ctx.fillRect(
			0,
			roadStart.y - LINE_WIDTH * 2,
			size.width - roadStart.x + LINE_WIDTH * 2,
			size.height - roadStart.y * 2 + LINE_WIDTH * 4
		)

		ctx.fillStyle = LINE_COLOR
		ctx.beginPath()
		ctx.arc(roadStart.x, roadStart.y, LINE_WIDTH / 2, 0, 2 * Math.PI)
		ctx.fill()
		ctx.beginPath()
		ctx.arc(size.width - roadStart.x, size.height - roadStart.y, LINE_WIDTH / 2, 0, 2 * Math.PI)
		ctx.fill()

		ctx.lineWidth = LINE_WIDTH
		ctx.strokeStyle = LINE_COLOR

		const lineSpace = size.height / LINE_AMOUNT
		const dashedLines = [lineSpace, lineSpace]

		new Array(LANE_AMOUNT - 1).fill(0).forEach((_, i) => {
			let x = lerp(0, size.width, (i + 1) / LANE_AMOUNT)
			let y = lerp(0, size.height, 1 / LANE_AMOUNT)

			if (i == LANE_AMOUNT - 2) {
				ctx.setLineDash(solidLines)
				ctx.beginPath()
				ctx.moveTo(x, 0)
				ctx.lineTo(x, size.height - roadStart.y)
				ctx.stroke()
			} else {
				ctx.setLineDash(i == 0 || i == LANE_AMOUNT - 2 ? solidLines : dashedLines)
				ctx.beginPath()
				ctx.moveTo(x, 0)
				ctx.lineTo(x, y)
				ctx.stroke()
			}

			x = lerp(0, size.width, 1 / LANE_AMOUNT)
			y = lerp(0, size.height, (i + 1) / LANE_AMOUNT)

			if (i == LANE_AMOUNT - 2) {
				ctx.setLineDash(solidLines)
				ctx.beginPath()
				ctx.moveTo(0, y)
				ctx.lineTo(size.width - roadStart.x, y)
				ctx.stroke()
			} else {
				ctx.setLineDash(i == 0 || i == LANE_AMOUNT - 2 ? solidLines : dashedLines)
				ctx.beginPath()
				ctx.moveTo(0, y)
				ctx.lineTo(x, y)
				ctx.stroke()
			}
		})
	}, // 3 turn
	() => () => {},
	// 4 zero
	(ctx: ContextProp) => (size: Size) => {
		ctx.fillStyle = ROAD_COLOR
		const roadStart = {
			x: lerp(0, size.width, 1 / LANE_AMOUNT),
			y: lerp(0, size.height, 1 / LANE_AMOUNT)
		}

		ctx.fillRect(
			roadStart.x - LINE_WIDTH * 2,
			0,
			size.width - roadStart.x * 2 + LINE_WIDTH * 4,
			size.height - roadStart.y + LINE_WIDTH * 2
		)

		ctx.fillStyle = LINE_COLOR
		ctx.beginPath()
		ctx.arc(roadStart.x, size.height - roadStart.y, LINE_WIDTH / 2, 0, 2 * Math.PI)
		ctx.fill()
		ctx.beginPath()
		ctx.arc(size.width - roadStart.x, size.height - roadStart.y, LINE_WIDTH / 2, 0, 2 * Math.PI)
		ctx.fill()

		ctx.lineWidth = LINE_WIDTH
		ctx.strokeStyle = LINE_COLOR

		const lineSpace = size.height / LINE_AMOUNT
		const dashedLines = [lineSpace, lineSpace]

		new Array(LANE_AMOUNT - 1).fill(0).forEach((_, i) => {
			let x = lerp(0, size.width, (i + 1) / LANE_AMOUNT)
			let y = lerp(0, size.height, 1 / LANE_AMOUNT)

			if (i == 0 || i == LANE_AMOUNT - 2) {
				ctx.setLineDash(solidLines)
				ctx.beginPath()
				ctx.moveTo(x, 0)
				ctx.lineTo(x, size.height - roadStart.y)
				ctx.stroke()
			} else {
				ctx.setLineDash(dashedLines)
				ctx.beginPath()
				ctx.moveTo(x, 0)
				ctx.lineTo(x, y)
				ctx.stroke()
			}

			x = lerp(0, size.width, 1 / LANE_AMOUNT)
			y = lerp(0, size.height, (i + 1) / LANE_AMOUNT)

			if (i == LANE_AMOUNT - 2) {
				ctx.setLineDash(solidLines)
				ctx.beginPath()
				ctx.moveTo(roadStart.x, y)
				ctx.lineTo(size.width - roadStart.x, y)
				ctx.stroke()
			}
		})
	}
	// 5 culdesac
]

export const conditional: ((connections: Connection) => RenderConfig)[] = [
	() => ({ type: 0, rotate: 0, draw: tiles[4] }),
	(connections) => ({
		type: 1,
		rotate: connections.indexOf(true) as 0 | 1 | 2 | 3,
		draw: tiles[5]
	}),
	(connections) => {
		const isStraight = connections[0] == connections[2]

		const rotate = isStraight
			? connections[0]
				? 0
				: 1
			: connections[0] && connections[3]
			? 0
			: connections[1] && connections[0]
			? 1
			: connections[2] && connections[1]
			? 2
			: 3
		const draw = isStraight ? tiles[0] : tiles[3]

		return { type: isStraight ? 2 : 3, rotate, draw }
	},
	(connections) => {
		const rotate =
			connections[2] && connections[3] && connections[0]
				? 0
				: connections[3] && connections[0] && connections[1]
				? 1
				: connections[0] && connections[1] && connections[2]
				? 2
				: 3
		return { type: 4, rotate, draw: tiles[2] }
	},
	() => ({ type: 5, rotate: 0, draw: tiles[1] })
]

const wallLoc = lerp(0, 1, 1 / LANE_AMOUNT)
const wallReference: Wall[] = [
	[
		[wallLoc, wallLoc],
		[1 - wallLoc, wallLoc]
	],
	[
		[1 - wallLoc, wallLoc],
		[1 - wallLoc, 1 - wallLoc]
	],
	[
		[1 - wallLoc, 1 - wallLoc],
		[wallLoc, 1 - wallLoc]
	],
	[
		[wallLoc, 1 - wallLoc],
		[wallLoc, wallLoc]
	]
]
const cornerReference: [Wall, Wall][] = [
	[
		[
			[wallLoc, 0],
			[wallLoc, wallLoc]
		],
		[
			[1 - wallLoc, 0],
			[1 - wallLoc, wallLoc]
		]
	],
	[
		[
			[1, wallLoc],
			[1 - wallLoc, wallLoc]
		],
		[
			[1, 1 - wallLoc],
			[1 - wallLoc, 1 - wallLoc]
		]
	],
	[
		[
			[1 - wallLoc, 1],
			[1 - wallLoc, 1 - wallLoc]
		],
		[
			[wallLoc, 1],
			[wallLoc, 1 - wallLoc]
		]
	],
	[
		[
			[0, wallLoc],
			[wallLoc, wallLoc]
		],
		[
			[0, 1 - wallLoc],
			[wallLoc, 1 - wallLoc]
		]
	]
]

export const walls = (connections: Connection): MapBorder =>
	connections.map((con, i) => (con ? cornerReference[i] : [wallReference[i]]))
