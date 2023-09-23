import { NavLink } from "react-router-dom";
import '../cssComponents/Aboutus.css'
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
            <div className="aboutusrightSection"></div>
        </div>
        </>
    )
}


export default AboutUs;