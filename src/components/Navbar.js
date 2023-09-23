import React from 'react'
import '../cssComponents/Navbar.css'
import { NavLink } from 'react-router-dom'
import {BsThreeDots} from 'react-icons/bs'
import { useState } from 'react'
function Navbar() {
  const [scroll, setScroll] = useState(false)
  const [scrollBg, setScrollBg] = useState(false)
  let prevY = Math.floor(window.scrollY);

  const scrollHandler = (e) => {
    let moveY = Math.floor(window.scrollY)
    if(moveY >= 150 && prevY < moveY){
      setScroll(true)
      setScrollBg(false)
      //scrolling down
    }
    else{
      setScrollBg(true)
      setScroll(false)
      //scroll up
    }
    prevY = moveY
  }

  window.addEventListener('scroll', scrollHandler)
  return (
    <div className={scroll ? "navBar addNavbarBg hideNavbar" : scrollBg ? "addNavbarBg navBar": "navBar showNavbar"} >
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