import React from 'react'
import '../cssComponents/Navbar.css'
import { NavLink } from 'react-router-dom'
import {BsThreeDots} from 'react-icons/bs'
import { useState } from 'react'
function Navbar() {
  const [scroll, setScroll] = useState(false)
  console.log(scroll)

  const scrollHandler = () => {
    if(window.scrollY >= 60){
      setScroll(true)
      console.log(window.scrollY)
    }
    else{
      setScroll(false)
    }
  }

  window.addEventListener('scroll', scrollHandler)
  return (
    <div className={scroll ? "navBar addNavbarBg" : "navBar"} >
        <h1 className='hugeHeading mainLogo'>BASIC/DEPT</h1>

        <ul className="navLinks smallPara">
            <NavLink>work</NavLink>
            <NavLink>About</NavLink>
            <NavLink>news</NavLink>
            <NavLink>thinking</NavLink>
            <NavLink>careers</NavLink>
            <NavLink>contact</NavLink>
        </ul>

        <div className="hamBurgerMenu">
            <BsThreeDots/>
        </div>
    </div>
  )
}

export default Navbar