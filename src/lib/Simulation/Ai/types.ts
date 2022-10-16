type NetworkInputs = {
	car: Car
	sensor: Ray[]
}[]

type NetworkActions = {
	car: Car
	action: CarActions
}[]

type LayerNode = number

type Layer = {
	inputs: LayerNode[]
	outputs: LayerNode[]
	biases: LayerNode[]
	weights: LayerNode[][]
}

type AI = {
	layers: Layer[]
}

type NetworkLayer = (0 | 1)[]

type Network = NetworkLayer[]

type FitnessResults = AI & {
	reward: number
}
