import { writable, type Writable } from 'svelte/store'

export const wikiRoutes = writable([]) as Writable<Route[]>
export const game = writable({ route: [], id: '', ready: false }) as Writable<Game>
export const players = writable([]) as Writable<Player[]>
export const logs = writable({}) as Writable<{
	[key: string]: unknown
}>
