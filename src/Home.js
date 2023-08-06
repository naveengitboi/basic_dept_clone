import React from 'react'
import Awards from './components/Awards'
import HomeVideo from './components/HomeVideo'
function Home() {
  return (
    <div className='homePage'>
    <HomeVideo/>
    <Awards/>
    </div>
  )
}

export default Home