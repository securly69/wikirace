const localStorageMe = 'wikiRaceMe'

export const getLocalStorage = () => JSON.parse(localStorage.getItem(localStorageMe) ?? '{}')

export const removeLocalStorage = () => localStorage.removeItem(localStorageMe)

export const addLocalStorage = (myself: Player) =>
	localStorage.setItem(localStorageMe, JSON.stringify(myself))
