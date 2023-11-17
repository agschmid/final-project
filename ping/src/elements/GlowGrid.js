import React from 'react'
import GlowSquare from './GlowSquare'


function GlowGrid(props) {

  return (
    <>
        <GlowSquare z={0}></GlowSquare>
        <GlowSquare z={-1}></GlowSquare>
        <GlowSquare z={-2}></GlowSquare>
        <GlowSquare z={-3}></GlowSquare>
        <GlowSquare z={-4}></GlowSquare>
        <GlowSquare z={-5}></GlowSquare>
        <GlowSquare z={-6}></GlowSquare>
        <GlowSquare z={-7}></GlowSquare>
        <GlowSquare z={-8}></GlowSquare>
        <GlowSquare z={-9}></GlowSquare>
        <GlowSquare z={-10}></GlowSquare>
    </>
  )
}

export default GlowGrid;