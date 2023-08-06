import React from 'react'
import '../cssComponents/HomeVideo.css'
import videoBg from '../assets/mainVideo.mp4'
function HomeVideo() {
  return (
    <div className='homeVideo'>
        <video src={videoBg} autoPlay loop muted/>
    </div>
  )
}

export default HomeVideo