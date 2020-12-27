import React, { useState, useEffect} from 'react'

// Styled component
import { Cursor } from "../styles/globalStyles"

// Context
import { useGlobalDispatchContext } from "../context/globalContext"

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 400,
    y: 400,
  })

  const onMouseMove = event => {
    const { pageX: x, pageY: y } = event
    setMousePosition({ x, y })
  }

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove)
    return () => {
      document.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return (
    <>
      <Cursor style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }} />
    </>
  )
}

export default CustomCursor
