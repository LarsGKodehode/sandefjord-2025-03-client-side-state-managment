import { create } from 'zustand'

const key = "bears"

export const useBearStore = create((set) => {
  return {
    // Tilstand som blir lagret
    bears: JSON.parse(window.localStorage.getItem(key)).bears || 0,
    // Metoder for å endre disse verdiene
    increaseBearPopulation: () => set((previousState) => {
      const newState = {
        bears: previousState.bears + 1
      }
      window.localStorage.setItem(key, JSON.stringify(newState))
      return newState
    }),
    removeAllBears: () => set(() => {
      const newState = {bears: 0}
      window.localStorage.set(key, JSON.stringify(newState))
      return newState
    })
  }
})
