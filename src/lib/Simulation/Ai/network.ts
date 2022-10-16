export const create = (nodeCounts: number[]) => {
	const layers = new Array<Layer>()
	for (let i = 0; i < nodeCounts.length - 1; i++) {
		layers.push(layer(nodeCounts[i], nodeCounts[i + 1]))
	}
	return { layers }
}

const layer = (inputCount: number, outputCount: number): Layer => {
	const inputs = new Array<LayerNode>(inputCount)
	const outputs = new Array<LayerNode>(outputCount)
	const biases = outputs.fill(0).map((_) => Math.random() * 2 - 1)
	const weights = inputs.fill(0).map((_) => outputs.map((_) => Math.random() * 2 - 1))

	return { inputs, outputs, biases, weights }
}

export const prediction = (network: AI) => (input: number[]) =>
	network.layers.reduce((layer, current) => feed(layer, current), input)

export const watch = (network: AI) => (input: number[]) =>
	network.layers.reduce(
		(layer, current) => {
			const input = feed(layer.input, current)
			const output = layer.output
			output.push({ ...current, inputs: layer.input, outputs: input })
			return { input, output }
		},
		{ input, output: [] as Layer[] }
	).output

const feed = (inputs: LayerNode[], layer: Layer) =>
	layer.outputs.map((_, i) =>
		inputs.reduce((sum, value, j) => sum + scale(value * layer.weights[j][i]), 0) +
			layer.biases[i] >
		0
			? 1
			: 0
	)

// todo: add scale function
const scale = (node: LayerNode) => node
