import { createRef } from 'react'
import create from 'zustand'

const useStore = create((set, get) => {
  return {
    paddle: createRef(),
    enemy: createRef(),
    ball: createRef(),
    prism: createRef(),
    glowSquare: createRef(),
    overlay: 'home',
    gamePlaying: false,
    paddleBrightness: 0,
    enemyBrightness: 0,
    setGamePlaying: (gamePlaying) => set(state => ({ gamePlaying: gamePlaying })),
    setOverlay: (overlay) => set(state => ({ overlay: overlay })),
    setPaddleBrightness: (paddleBrightness) => set(state => ({ paddleBrightness: paddleBrightness })),
    setEnemyBrightness: (enemyBrightness) => set(state => ({ enemyBrightness: enemyBrightness })),
  }
})

const mutation = {
}

export { useStore, mutation }