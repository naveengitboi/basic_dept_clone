import React from 'react'
import Awards from './components/Awards'
import HomeVideo from './components/HomeVideo'
import Work from './components/Work'
import {BsDot} from 'react-icons/bs'
import Featured from './components/Featured'
import AboutUs from './components/AboutUs'
function Home() {
  return (
    <div className='homePage'>
    <HomeVideo/>
    <Awards/>
    <div className='horizontalLine'></div>
    <Work/>
    <div className="horizontalLine"></div>
    <div className="horizontalTextBelowLine smallPara">
      <span>00</span>
      <span>/05</span>
      <span><BsDot/></span>
    </div>

    <Featured/>
    <AboutUs/>
    </div>
  )
}

export default Home