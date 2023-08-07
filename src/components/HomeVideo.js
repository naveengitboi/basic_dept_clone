import React, { useRef } from 'react'
import '../cssComponents/HomeVideo.css'
import videoBg from '../assets/mainVideo.mp4'
import { useState } from 'react'


function HomeVideo() {
  const cursorSec = useRef()
  const [mouseEnter, setMouseEnter] = useState({
    top:0,
    left:0
  })
  const [mouseLeave, setMouseLeave] = useState(false)


  const handleMousePostion = (e) => {
   cursorSec.current.addEventListener("mousemove", (e) => {
    setMouseEnter({
     top : e.clientY,
     left: e.clientX
   })
   })
  }

  return (
    <div className='homeVideo' ref={cursorSec} 
    onMouseEnter={()=>handleMousePostion()}
     >
      <div  className="cursorStyling tinyTexts" 
      style={{...mouseEnter}} >
        Watch Reel
      </div>
        <video src={videoBg} autoPlay loop muted/>
    </div>
  )
}

export default HomeVideo