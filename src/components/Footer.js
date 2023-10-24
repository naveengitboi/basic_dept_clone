import '../cssComponents/Footer.css'
import { AiOutlineArrowRight } from "react-icons/ai";
import {GoDotFill} from "react-icons/go"
function Footer() {
  return (
    <div className="footerContainer" >
        <div className="footerDiv logoDiv">
            <h1 className="headings">B/D </h1>
        </div>
        <div className="footerDiv infoDiv">
            <h1 className="headings">
                we collaborate with ambitious brands 
                <br /> and people. Lets build 
            </h1>
        </div>
        <div className="footerDiv contactDiv">
            <h1 className="mediumPara">
                Stay in the know
            </h1>
            <div className="inputdiv">
                <input type="text" placeholder="Email Address" className='tinyTexts' /> 
                <AiOutlineArrowRight/>
            </div>
        </div>

        <div className="footerDiv socialDiv">
            <div className="linksDiv">
                <h1 className="mediumPara"> <GoDotFill/>Social </h1>
                <ul className='names'>
                    <li className='smallPara'>Instagram</li>
                    <li className='smallPara'>Twitter(X)</li>
                    <li className='smallPara'>Linked In</li>
                    <li className='smallPara'>Facebook</li>
                </ul>
            </div>

             <div className="linksDiv">
                <h1 className="mediumPara"> <GoDotFill/>Initiatives </h1>
                <ul className='names'>
                    <li className='smallPara'>crafted</li>
                    <li className='smallPara'>Applied(X)</li>
                    <li className='smallPara'>BrandBeats</li>
                    <li className='smallPara'>Moves</li>
                    <li className='smallPara'>B/Good</li>
                </ul>
            </div>

             <div className="linksDiv">
                <h1 className="mediumPara"> <GoDotFill/>Offices</h1>
                <ul className='names'>
                    <li className='smallPara'>San Diego -  CA</li>
                    <li className='smallPara'>New York - NY</li>
                    <li className='smallPara'>Bay Area - CA</li>
                    <li className='smallPara'>St. Louis -MO</li>
                    <li className='smallPara'>Amsterdam -NL </li>
                    <li className='smallPara'>London- EN</li>
                    <li className='smallPara'>Berlin- GE</li>
                    <li className='smallPara'>Argentina -AR</li>
                </ul>
            </div>

            
        </div>

        <div className="bootomSection">
            <p className='tinyTexts'>BASIC/DEPT®, INC 10 - 23©</p>
            <p className='tinyTexts'>EASY TO UNDERSTAND, IMPOSSIBLE TO IGNORE.™</p>
            <p className='tinyTexts'>TERMS, PRIVACY POLICY</p>
        </div>

    </div>
  )
}

export default Footer

