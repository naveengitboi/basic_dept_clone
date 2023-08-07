import React from 'react'
import '../cssComponents/HomeVideo.css'
import videoBg from '../assets/mainVideo.mp4'
import { useState } from 'react'


function HomeVideo() {
  const [mouseEnter, setMouseEnter] = useState({
    top:0,
    left:0
  })


  const handleMousePostion = (e) => {
   setMouseEnter({
     top : e.clientY,
     left: e.clientX
   })
  }

  return (
    <div className='homeVideo' 
    onMouseMove={(e)=> handleMousePostion(e)} >
      <div  className="cursorStyling tinyTexts" 
      style={{...mouseEnter}} >
        Watch Reel
      </div>
        <video src={videoBg} autoPlay loop muted/>
    </div>
  )
}

export default HomeVideo