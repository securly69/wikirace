import "./firebase"
import {
	createUserWithEmailAndPassword,
	FacebookAuthProvider,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	sendEmailVerification,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signInWithPopup,
	updatePassword
} from "firebase/auth"
import session from "./session"
import { ErrorMessaging } from "./errors"
import { uploadDocument } from "./firestore"
import type { TodoContentConfig } from "$lib/content/todo/TodoContent"
import type { UserContentConfig } from "$lib/content/user/UserContent"

const auth = getAuth()

const loginPipe: (pipe: () => Promise<void>) => Promise<{ error?: string }> = async (pipe) =>
	await new Promise((resolve) => {
		pipe()
			.then(() => {
				resolve({})
			})
			.catch((e) => {
				resolve({
					error: ErrorMessaging(e.code)
				})
			})
	})

export const awaitMyId: () => Promise<string> = () =>
	new Promise<string>((resolveOuter) => {
		const existing = myId()

		if (existing != null) {
			resolveOuter(existing)
			return
		}

		session.subscribe(async ({ user, ready }) => {
			if (!ready) return

			resolveOuter(user?.uid ?? "")
		})
	})
export const myId = (): string | null => auth.currentUser?.uid

export const loginWithGoogle = () =>
	loginPipe(async () => {
		await signInWithPopup(auth, new GoogleAuthProvider())
	})
export const loginWithFacebook = () =>
	loginPipe(async () => {
		await signInWithPopup(auth, new FacebookAuthProvider())
	})
export const loginWithInfo = (email: string, password: string) =>
	loginPipe(async () => {
		await signInWithEmailAndPassword(auth, email, password)
	})
export const newUser = (email: string, password: string) =>
	loginPipe(async () => {
		await createUserWithEmailAndPassword(auth, email, password)
		await sendEmailVerification(auth.currentUser)

		const userContent: UserContentConfig = {
			contentType: "user",
			email,
			id: await awaitMyId()
		}
		const welcomeContent: TodoContentConfig = {
			contentType: "todo",
			id: "",
			title: `Welcome to Haja! Get started by tapping (+) Add`,
			caption: "We are glad to help you :)",
			status: "todo",
			type: "from_haja",
			date: new Date()
		}
		const aniversaryContent: TodoContentConfig = {
			contentType: "todo",
			id: "",
			title: `Happy Aniversary!!`,
			caption: "Thanks for using Haja for 1 year :)",
			status: "todo",
			type: "from_haja",
			date: new Date()
		}

		uploadDocument({
			isTeam: false,
			id: await awaitMyId(),
			content: userContent
		})
		uploadDocument({
			source: await awaitMyId(),
			isTeam: false,
			content: welcomeContent,
			type: "todo"
		})
		uploadDocument({
			source: await awaitMyId(),
			isTeam: false,
			content: aniversaryContent,
			type: "todo"
		})
	})
export const changePassword = (password: string, requestLink?: string) =>
	loginPipe(async () => {
		await updatePassword(auth.currentUser, password)
	})
export const lostPassword = (email: string) =>
	loginPipe(async () => {
		await sendPasswordResetEmail(auth, email)
	})

export const signOut = () => {
	auth.signOut()
}

onAuthStateChanged(auth, (user) => {
	session.set({
		user,
		ready: true
	})
})
