import { createRef } from 'react'
import create from 'zustand'

const useStore = create((set, get) => {
  return {
    paddle: createRef(),
    ball: createRef(),
    overlay: 'home',
    gamePlaying: false,
    setGamePlaying: (gamePlaying) => set(state => ({ gamePlaying: gamePlaying })),
    setOverlay: (overlay) => set(state => ({ overlay: overlay })),
  }
})

const mutation = {
}

export { useStore, mutation }