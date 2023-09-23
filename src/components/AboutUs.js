import { NavLink } from "react-router-dom";
import '../cssComponents/Aboutus.css'
import aboutVideo from '../assets/e4a840ba8dfeded08ac4d0ba6e930be56fc68e3b.mp4'
function AboutUs(){
    return(
        <>
        <div className="aboutusContainer">
            <div className="aboutusleftSection">
                <h1 className="biggerTexts">
                    BASIC/DEPT® HELPS BRANDS ● CONNECT W/ CULTURE
                </h1>
                <p className="smallPara">ADWEEK AGENCY SPOTLIGHT</p>

                <NavLink className="smallPara aboutusBtn">About Us</NavLink>
            </div>
            <div className="aboutusrightSection">
                <video className="aboutusVideo" src={aboutVideo} autoPlay loop muted ></video>
            </div>
        </div>
        </>
    )
}


export default AboutUs;