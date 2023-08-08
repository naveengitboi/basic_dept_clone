import React from 'react'
import { NavLink } from 'react-router-dom'
import '../cssComponents/Work.css'
import mountainImg from '../assets/mountain.webp' 
import tennisImg from '../assets/tennis.webp'
const works = [
    {
        "workImg":mountainImg,
        "workHeading":"paragonia",
        "workDesc":"An Ecommerce experience drive by patagonian's brand mission"
    },
    {
        "workImg":tennisImg,
        "workHeading":"Wilson",
        "workDesc":"Wilson — Helping a century-old sports brand find its place in culture and step into an all-new category."
    },
    {
        "workImg":mountainImg,
        "workHeading":"paragonia",
        "workDesc":"store.google.com — A long-term relationship committed to bringing the best of Google to people worldwide."
    }
]

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

        <div className="works">
            {
                works.map((item, index) => (
                    <div className="worksImageContainer">
            <div className="imageContainer">
                <img src={item.workImg} alt="" />
            </div>
            <div className="workContent">
                <h1 className='mediumPara'>
                {item.workHeading}
                </h1>
                <p className='smallPara'>
                    {item.workDesc}
                </p>
            </div>
        </div>
                ))
            }
        </div>
    </div>
  )
}

export default Work