import * as D from 'fp-ts/lib/Date.js'
import * as E from 'fp-ts/lib/Either.js'
import * as Eq from 'fp-ts/lib/Eq.js'
import * as Ord from 'fp-ts/lib/Ord.js'
import * as Ordering from 'fp-ts/lib/Ordering.js'
import * as O from 'fp-ts/lib/Option.js'
import * as ET from 'fp-ts/lib/EitherT.js'
import * as OT from 'fp-ts/lib/OptionT.js'
import * as IO from 'fp-ts/lib/IO.js'
import * as Rec from 'fp-ts/lib/Record.js'
import * as R from 'fp-ts/lib/Reader.js'
import * as RTE from 'fp-ts/lib/ReaderTaskEither.js'
import * as RA from 'fp-ts/lib/ReadonlyArray.js'
import * as RONEA from 'fp-ts/lib/ReadonlyNonEmptyArray.js'
import * as RT from 'fp-ts/lib/ReadonlyTuple.js'
import * as ReaderTask from 'fp-ts/lib/ReaderTask.js'
import * as fn from 'fp-ts/lib/function.js'
import * as S from 'fp-ts/lib/string.js'
import * as Map from 'fp-ts/lib/Map.js'
import * as Set from 'fp-ts/lib/Set.js'
import * as Semigroup from 'fp-ts/lib/Semigroup.js'
import * as Apply from 'fp-ts/lib/Apply.js'
import * as Applicative from 'fp-ts/lib/Applicative.js'
import * as NEA from 'fp-ts/lib/NonEmptyArray.js'
import * as Functor from 'fp-ts/lib/Functor.js'
import * as TE from 'fp-ts/lib/TaskEither.js'
import * as T from 'fp-ts/lib/Task.js'
import * as Json from 'fp-ts/lib/Json.js'
import * as Num from 'fp-ts/lib/number.js'

// import * as Dec from 'io-ts/lib/Decoder.js'
// import * as Enc from 'io-ts/lib/Encoder.js'
// import * as iots from 'io-ts'
// import { Lens } from 'monocle-ts'

const { pipe, flow, constant, identity, tupled, constVoid } = fn

export function toBoolean<T>(o: O.Option<T>): boolean {
	return pipe(o, O.match(fn.constFalse, fn.constTrue))
}

export function exhaustive(value: never): never {
	console.error(value)
	throw new Error(`inexhaustive case check: ${value}`)
}

export const sequenceEitherT = Apply.sequenceT(E.Apply)
export const sequenceOptionT = Apply.sequenceT(O.Apply)
export const sequenceEitherS = Apply.sequenceS(E.Apply)
export const sequenceOptionS = Apply.sequenceS(O.Apply)
export const sequenceIOS = Apply.sequenceS(IO.Apply)

// export { Lens, Dec, Enc, Functor }

export {
	D,
	Eq,
	E,
	ET,
	O,
	Ord,
	Ordering,
	OT,
	NEA,
	RONEA,
	IO,
	// iots,
	R,
	Rec,
	RA,
	RT,
	RTE,
	S,
	T,
	TE,
	Map,
	Set,
	Apply,
	Applicative,
	Semigroup,
	Json,
	pipe,
	flow,
	constant,
	identity,
	tupled,
	constVoid,
	ReaderTask,
	Num
}
