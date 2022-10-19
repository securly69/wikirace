import { writable, type Writable } from 'svelte/store'

export const wikiRoutes = writable([]) as Writable<Route[]>
export const game = writable({ route: [], id: '', state: 'waiting', players: [] }) as Writable<Game>
export const me = writable({}) as Writable<Player & { gameId: string }>
export const location = writable('') as Writable<string>
export const joinedGameId = writable('') as Writable<string>
export const logs = writable({}) as Writable<{
	[key: string]: unknown
}>
