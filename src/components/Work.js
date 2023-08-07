import React from 'react'
import { NavLink } from 'react-router-dom'
import '../cssComponents/Work.css'

function Work() {
  return (
    <div className='workPage'>
        <div className='workInfoContainer'>
            <div className="workInfo">
                <p className='headings'>
                    BASIC/DEPT® is a global branding and digital design agency building products, services, and eCommerce experiences that turn cultural values into company value.
                </p>
                <button className="buttonLink smallPara">See The Work</button>
            </div>
            <div className='hugeHeading hugeHeadingClass'>
                B/D <div className='rIcon'>R</div>
            </div>
        </div>
    </div>
  )
}

export default Work