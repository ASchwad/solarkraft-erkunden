import React from "react";
import { getSolarSystems } from "../api";
import SystemsLineChart from "./SystemsLineChart";
import { useQuery } from 'react-query'
import Metrics from "./Metrics";

function Results({ city }: {city: string}) {
  const { data: systems } = useQuery(["getSystems", city], () => getSolarSystems(city), {
    enabled: city !== '',
  })

  if(systems === undefined) return null
  if(systems.length === 0) return <p>Keine Ergebnisse für "{city}"</p>
  
  return (
    <div className="w-11/12 flex flex-col lg:flex-row mt-10 items-center lg:items-start">
      <Metrics systems={systems ?? []} />
      <div className="h-96 w-full rounded-xl m-4 pt-6 pr-6 pb-16 lg:pb-12 shadow-lg bg-white">
        <SystemsLineChart systems={systems ?? []} />
      </div>
    </div>
  );
}

export default Results;
