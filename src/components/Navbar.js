import React from 'react'
import '../cssComponents/Navbar.css'
import { NavLink } from 'react-router-dom'
import {BsThreeDots} from 'react-icons/bs'
function Navbar() {
  return (
    <div className='navBar'>
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