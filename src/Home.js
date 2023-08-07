import React from 'react'
import Awards from './components/Awards'
import HomeVideo from './components/HomeVideo'
import Work from './components/Work'
function Home() {
  return (
    <div className='homePage'>
    <HomeVideo/>
    <Awards/>
    <div className='horizontalLine'></div>
    <Work/>
    </div>
  )
}

export default Home