import { NavLink } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import "../cssComponents/FeaturedNews.css";

const newsFeed = [
  {
    ncImage:
      "https://cdn.sanity.io/images/8nn8fua5/production/162fd00622e522dddacedbb98f34181c860a6bbd-1000x734.png?w=720&fm=webp&q=65",
    newsHeading: "The new roadmap for auto brands",
    pressNum: "8.1.23",
  },
  {
    ncImage:
      "https://cdn.sanity.io/images/8nn8fua5/production/662f84ebd1a959663ce02b538af1acef645219b6-2000x1468.png?w=720&fm=webp&q=65",
    newsHeading: "Breaking through the branding blahs",
    pressNum: "6.16.23",
  },
  {
    ncImage:
      "https://cdn.sanity.io/images/8nn8fua5/production/8d1b579ad65366a487e57e88035fbd660124ee38-870x544.png?w=720&fm=webp&q=65",
    newsHeading: "RYANPARKHURST MODERATES TALK ON“THEART AND SCIENCE OF BRAND PURPOSE AND CREATIVITY”",
    pressNum: "6.5.23",
  },
  {
    ncImage:
      "https://cdn.sanity.io/images/8nn8fua5/production/7bfa1142f0f770512f035212055fb32dedc8b75b-1000x734.png?w=720&fm=webp&q=65",
    newsHeading: "John waters, bare walls, and spaking creativity",
    pressNum: "5.15.23",
  },
  {
    ncImage:
      "https://cdn.sanity.io/images/8nn8fua5/production/7015b4f1394f3902d211e59c17901811843cda0e-870x544.png?w=720&fm=webp&q=65",
    newsHeading: "BASIC/dept is the 27th webby awards: Agency of the year",
    pressNum: "4.25.23",
  },
];
function FeaturedNews() {
  return (
    <>
      <div className="feturedNewsContainer">
        <div className="featuredNewsHeader">
          <h1 className="bigHeading">
            Featured <br />
            News
          </h1>
          <NavLink className="buttonLink smallPara">View all</NavLink>
        </div>

        <div className="nccontentSection">
          {newsFeed.map((value, idx) => {
            return (
              <div className="newsContainer">
                <div className="newsImg">
                  <img src={value.ncImage} alt="" />
                </div>
                <div className="newsContent">
                  <div className="nctopContent">
                    <h1 className="headings">{value.newsHeading}</h1>
                    <div className="ncIcon">
                      <AiOutlineArrowRight />
                    </div>
                  </div>

                  <p className="smallPara pressText">
                    <span>PRESS</span> {value.pressNum}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FeaturedNews;
