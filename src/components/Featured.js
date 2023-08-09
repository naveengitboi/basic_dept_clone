import React from "react";
import "../cssComponents/Featured.css";

const featureContent = [
  {
    featureImg: "./images/google.webp",
    featureHeading: "Google",
    featureDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores iusto eaque illum veniam dolores harum repudiandae quas. Voluptatem fugiat dicta eum optio quasi sequi molestiae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, repellendus?",
  },
  {
    featureImg: "./images/kfc.webp",
    featureHeading: "Google",
    featureDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores iusto eaque illum veniam dolores harum repudiandae quas. Voluptatem fugiat dicta eum optio quasi sequi molestiae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, repellendus?",
  },
  {
    featureImg: "./images/google.webp",
    featureHeading: "Google",
    featureDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores iusto eaque illum veniam dolores harum repudiandae quas. Voluptatem fugiat dicta eum optio quasi sequi molestiae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, repellendus?",
  },

  {
    featureImg: "./images/google.webp",
    featureHeading: "Google",
    featureDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores iusto eaque illum veniam dolores harum repudiandae quas. Voluptatem fugiat dicta eum optio quasi sequi molestiae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, repellendus?",
  },
  {
    featureImg: "./images/kfc.webp",
    featureHeading: "Google",
    featureDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores iusto eaque illum veniam dolores harum repudiandae quas. Voluptatem fugiat dicta eum optio quasi sequi molestiae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, repellendus?",
  },
  {
    featureImg: "./images/kfc.webp",
    featureHeading: "Google",
    featureDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores iusto eaque illum veniam dolores harum repudiandae quas. Voluptatem fugiat dicta eum optio quasi sequi molestiae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, repellendus?",
  },
];

function Featured() {
  return (
    <div className="featuredContent">
      <h1 className="bigHeading">
        Featured <br /> Engagements
      </h1>

      <div  className="horizontalDragSection">
        {featureContent.map((item, index) => (
          <div className="featureHorizontalScroll">
            <div className="imageDiv">
              <img src={item.featureImg} alt="" />
            </div>

            <div className="scrollContent">
              <h1 className="mediumPara">{item.featureHeading}</h1>
              <p className="smallPara">{item.featureDesc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
