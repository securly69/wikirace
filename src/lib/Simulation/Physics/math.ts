const multiply = (constant: number, vector: Vector): Vector => {
	return { ...vector, magnitude: constant * vector.magnitude }
}
