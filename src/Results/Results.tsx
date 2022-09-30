import React from "react";
import { getSolarSystems } from "../api";
import SystemsLineChart from "./SystemsLineChart";
import { useQuery } from 'react-query'
import Metrics from "./Metrics";
import NoResults from "./NoResults";

function Results({ city }: {city: string}) {
  const { data: systems } = useQuery(["getSystems", city], () => getSolarSystems(city), {
    enabled: city !== '',
  })

  if(systems === undefined) return null
  if(systems.length === 0) return <NoResults city={city}/>
  
  return (
    <div className="w-11/12 flex flex-col lg:flex-row mt-10 items-start">
      <Metrics systems={systems ?? []} />
      <div className="h-96 rounded-xl m-2 lg:m-4 pt-6 pb-16 lg:pb-12 shadow-lg bg-white">
        <SystemsLineChart systems={systems ?? []} />
      </div>
    </div>
  );
}

export default Results;
