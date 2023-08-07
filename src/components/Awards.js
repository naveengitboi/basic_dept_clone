import React from 'react'
import '../cssComponents/Awards.css'



function Awards() {
  const awards = [
    {
      awardImg:"./images/adage.png",
      text:"Design And Branding"
    },
     {
      awardImg:"./images/webbyawards.png",
      text:"Agency of the Year"
    },
     {
      awardImg:"./images/campaign.png",
      text:`Digital Innovation 
      agency of the year finalist`
    },
  ]
  return (
    <div className='awardsSection'>
      {
        awards.map((item, index) => (
          <div className="award">
            <img src={item.awardImg} alt="" />
            <p className='smallPara'>{item.text}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Awards