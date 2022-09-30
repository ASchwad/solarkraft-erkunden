import React from "react";
import Lottie from "lottie-react"
import noResultsAnimation from '../assets/noResults.json'
 
function NoResults({ city }: {city: string}){
  return (
    <div className="w-1/2 lg:w-2/5 mx-auto pb-12">
      <Lottie animationData={noResultsAnimation} loop={true} />
      <p className="text-center text-xl font-bold text-white -mt-5 md:-mt-14">Keine Einträge für "{city}" gefunden.</p>
    </div>
  )
}

export default NoResults;
