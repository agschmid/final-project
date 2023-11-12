import { createRef } from 'react'
import create from 'zustand'

const useStore = create((set, get) => {
  return {
    paddle: createRef(),
    ball: createRef(),
  }
})

const mutation = {
}

export { useStore, mutation }