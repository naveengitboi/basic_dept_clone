import React, { useRef } from "react";
import "../cssComponents/HomeVideo.css";
import videoBg from "../assets/mainVideo.mp4";
import { useState } from "react";

function HomeVideo() {
  const cursorSec = useRef();
  const [mouseEnter, setMouseEnter] = useState({
    top: 0,
    left: 0,
  });
  // const [mouseLeave, setMouseLeave] = useState(false);

  const handleMousePostion = (e) => {
    cursorSec.current.addEventListener("mousemove", (event) => {
      setMouseEnter({
        top: event.clientY,
        left: event.clientX,
      });
    });

    cursorSec.current.addEventListener("mouseleave", () => {
      setMouseEnter({
        top: window.innerHeight/2,
        left: window.innerWidth/2,
      });
    });
  };

  return (
    <div
      className="homeVideo"
      ref={cursorSec}
      onMouseEnter={() => handleMousePostion()}
    >
      <div className="cursorStyling tinyTexts" style={{ ...mouseEnter }}>
        Watch Reel
      </div>
      <video src={videoBg} autoPlay loop muted onClick={(event) => {
        event.nativeEvent.target.muted = !event.nativeEvent.target.muted
      }}/>
    </div>
  );
}

export default HomeVideo;
