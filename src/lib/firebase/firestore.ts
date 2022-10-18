import './firebase'
import {
	getFirestore,
	addDoc,
	collection,
	doc,
	DocumentReference,
	DocumentSnapshot,
	getDoc,
	getDocs,
	limit,
	orderBy,
	query,
	QuerySnapshot,
	serverTimestamp,
	setDoc,
	where,
	deleteDoc,
	CollectionReference,
	type DocumentData,
	type WhereFilterOp,
	type SetOptions,
	Query
} from 'firebase/firestore'
import { firebaseApp } from './firebase'
import { pipe } from '$lib/fp-ts'

type Location =
	| DocumentReference<DocumentData>
	| CollectionReference<DocumentData>
	| Query<DocumentData>
type LocationContent = {
	location: Location
	content: DocumentData
}
type PossibleConnections = typeof doc | typeof collection

const db = getFirestore(firebaseApp)

export const api: (data: StoreLocation) => string = ({ type, id = null }): string =>
	`${type}${id != null ? `/${id}` : ''}`

const connect =
	<T extends PossibleConnections>(store: T) =>
	(api: string) =>
		store(db, api)

const clense = (content: DocumentData, timestamp: string) => (location: Location) => {
	delete content.id
	delete content.contentType
	content[timestamp] = serverTimestamp()

	return {
		location,
		content
	}
}

const upload =
	(protocol: typeof addDoc | typeof setDoc, options: SetOptions | null = null) =>
	(data: LocationContent) =>
		protocol(data.location, data.content, options)

export const getDocument: (data: StoreLocation) => Promise<DocumentSnapshot<DocumentData>> = ({
	type,
	id
}) => pipe({ type, id }, api, connect(doc), getDoc)

export const deleteDocument: (data: StoreLocation) => Promise<void> = ({ type, id }) =>
	pipe({ type, id }, api, connect(doc), deleteDoc)

export const uploadDocument: (
	data: StoreLocation & {
		content: DocumentData
		timestamp?: string
	}
) => Promise<void | DocumentReference<DocumentData>> = ({ content, type, timestamp = 'created' }) =>
	pipe({ type }, api, connect(collection), clense(content, timestamp), upload(addDoc))

export const updateDocument: (
	data: StoreLocation & {
		content: DocumentData
		timestamp?: string
	}
) => Promise<void | DocumentReference<DocumentData>> = ({
	id,
	content,
	type,
	timestamp = 'edited'
}) =>
	pipe({ type, id }, api, connect(doc), clense(content, timestamp), upload(setDoc, { merge: true }))

export const storeQuery: (
	data: StoreLocation & {
		amount?: number
		timestamp?: string
		queries: {
			type: string
			compare: WhereFilterOp
			value: unknown
		}[]
	}
) => Promise<QuerySnapshot<DocumentData>> = ({ type, amount = 50, timestamp = 'date', queries }) =>
	pipe(
		{ type },
		api,
		connect(collection),
		(reference) =>
			query(
				reference,
				...queries.map((query) => where(query.type, query.compare, query.value)),
				orderBy(timestamp, 'desc'),
				limit(amount)
			),
		getDocs
	)
