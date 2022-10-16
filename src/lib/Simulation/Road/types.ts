type Connection = [boolean, boolean, boolean, boolean]

type Possibilities = {
	possibilities: number[]
	connections: Connection
	index: number
}

type MapGeneration = {
	map: RenderConfig[]
	connections: Connection[]
	borders: MapBorder
}

type MapBorder = Wall[][]

type AstarProps = {
	map: Connection[]
	start: number
	end: number
}
