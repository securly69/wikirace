export const lerp = (A: number, B: number, t: number) => A + (B - A) * t

export const split =
	<T, L, R>(layer1: (input: T) => L, layer2: (input: T) => R) =>
	(input: T): [L, R] =>
		[layer1(input), layer2(input)]

export const coalesce =
	<I, O>(left: (input: I) => O, right: () => O) =>
	(input: I | null) =>
		input == null ? right() : left(input)
