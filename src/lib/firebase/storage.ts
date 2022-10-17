import { firebaseApp } from './firebase'
import {
	getDownloadURL,
	getStorage,
	ref,
	uploadBytes,
	type StorageReference,
	type UploadResult
} from 'firebase/storage'
import { api } from './firestore'
import { pipe } from '$lib/fp-ts'

const storage = getStorage()

const connect = (store: typeof ref) => (api: string) => store(storage, api)

const upload = (protocol: typeof uploadBytes, blob: ArrayBuffer) => (reference: StorageReference) =>
	protocol(reference, blob)

export const uploadFile: (
	data: StoreLocation & {
		blob: ArrayBuffer
	}
) => Promise<UploadResult> = ({ blob, id, source = null, type = null, isTeam = false }) =>
	pipe({ id, source, type, isTeam }, api, connect(ref), upload(uploadBytes, blob))

export const uploadFileAndGetUrl: (
	data: StoreLocation & {
		blob: ArrayBuffer
	}
) => Promise<string> = async (data) => getDownloadURL(await (await uploadFile(data)).ref)
