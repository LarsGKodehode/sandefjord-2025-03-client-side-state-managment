import { create } from 'zustand'

export const useBearStore = create((set) => {
  return {
    // Tilstand som blir lagret
    bears: 42,
    // Metoder for å endre disse verdiene
    increaseBearPopulation: () => set((previousState) => {
      return {
        bears: previousState.bears + 1
      }
    }),
    removeAllBears: () => set(() => ({bears: 0}))
  }
})
