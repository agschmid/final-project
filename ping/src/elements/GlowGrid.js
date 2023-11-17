import React from 'react'
import GlowSquare from './GlowSquare'
import { useStore } from '../state/useStore'


function GlowGrid(props) {
   let glowSquares = useStore((s) => s.glowSquares)
   let glowVals = useStore((s) => s.glowVals)


  return (
    <>
        <GlowSquare z={0} ref={glowSquares[0]} glow={glowVals[0]}></GlowSquare>
        <GlowSquare z={-1} ref={glowSquares[1]} glow={glowVals[1]}></GlowSquare>
        <GlowSquare z={-2} ref={glowSquares[2]} glow={glowVals[2]}></GlowSquare>
        <GlowSquare z={-3} ref={glowSquares[3]} glow={glowVals[3]}></GlowSquare>
        <GlowSquare z={-4} ref={glowSquares[4]} glow={glowVals[4]}></GlowSquare>
        <GlowSquare z={-5} ref={glowSquares[5]} glow={glowVals[5]}></GlowSquare>
        <GlowSquare z={-6} ref={glowSquares[6]} glow={glowVals[6]}></GlowSquare>
        <GlowSquare z={-7} ref={glowSquares[7]} glow={glowVals[7]}></GlowSquare>
        <GlowSquare z={-8} ref={glowSquares[8]} glow={glowVals[8]}></GlowSquare>
        <GlowSquare z={-9} ref={glowSquares[9]} glow={glowVals[9]}></GlowSquare>
        <GlowSquare z={-10} ref={glowSquares[10]} glow={glowVals[10]}></GlowSquare>
    </>
  )
}

export default GlowGrid;