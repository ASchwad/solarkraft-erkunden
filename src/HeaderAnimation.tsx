import React from "react";
import Lottie from "lottie-react"
import solarAnimation from './assets/solar.json'
 
function HeaderAnimation({ city } : {city: string}){
  if(city !== '') return null
  return (
    <div className="w-1/2 mx-auto pb-12">
      <Lottie animationData={solarAnimation} loop={true} />
    </div>
  )
}

export default HeaderAnimation;
