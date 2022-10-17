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
	Query,
} from 'firebase/firestore'
import { firebaseApp } from './firebase'
import { pipe } from '$lib/fp-ts'


type Location = DocumentReference<DocumentData> | CollectionReference<DocumentData> | Query<DocumentData>
type LocationContent = {
	location: Location
	content: DocumentData
}
type PossibleConnections = typeof doc | typeof collection 

const db = getFirestore(firebaseApp)

export const api: (data: StoreLocation) => string = ({
	source = null,
	isTeam = false,
	type = null,
	id = null
}): string => {
	let api = isTeam ? 'teams' : 'users'

	if (source != null && type != null) {
		api += `/${source}/${type}`
	}

	if (id != null) {
		api += `/${id}`
	}

	return api
}

const connect = <T extends PossibleConnections>(store: T) => (api: string) => store(db, api)

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
	source = null,
	isTeam = false,
	type = null,
	id
}) => pipe({ source, isTeam, type, id }, api, connect(doc), getDoc)

export const deleteDocument: (data: StoreLocation) => Promise<void> = ({
	source = null,
	isTeam = false,
	type = null,
	id
}) => pipe({ source, isTeam, type, id }, api, connect(doc), deleteDoc)

export const uploadDocument: (
	data: StoreLocation & {
		content: DocumentData
		timestamp?: string
	}
) => Promise<void | DocumentReference<DocumentData>> = ({
	content,
	source = null,
	type = null,
	isTeam = false,
	timestamp = 'created'
}) =>
	pipe(
		{ source, type, isTeam },
		api,
		connect(collection),
		clense(content, timestamp),
		upload(addDoc)
	)

export const updateDocument: (
	data: StoreLocation & {
		content: DocumentData
		timestamp?: string
	}
) => Promise<void | DocumentReference<DocumentData>> = ({
	id,
	content,
	source = null,
	type = null,
	isTeam = false,
	timestamp = 'edited'
}) =>
	pipe(
		{ source, type, isTeam, id },
		api,
		connect(doc),
		clense(content, timestamp),
		upload(setDoc, { merge: true })
	)

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
) => Promise<QuerySnapshot<DocumentData>> = ({
	source = null,
	isTeam = false,
	type = null,
	amount = 50,
	timestamp = 'date',
	queries
}) =>
	pipe(
		{ source, isTeam, type },
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
