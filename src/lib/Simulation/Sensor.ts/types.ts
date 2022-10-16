type Ray = {
	start: XYPosition
	end: XYPosition
	contacts: Intersection[]
}

type Intersection = {
	position: XYPosition
	offset: number
}
