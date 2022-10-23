import React, { useMemo } from "react";
import { System } from "../types";
import MetricCard from "./MetricCard";

function Metrics({ systems }: {systems: System[]}) {
  const sumPower = useMemo(() => {
    return Math.floor(systems.reduce((sum,item) => sum + item.Nettonennleistung, 0))
  }, [systems])

  const newSystems = useMemo(() => {
    const beginningYear = new Date()
    beginningYear.setMonth(0)
    beginningYear.setDate(0)
    return(systems.filter((entry) => entry.CleanedDate > beginningYear).length)
  }, [systems])

  return (
    <div className="flex flex-row lg:flex-col">
      <MetricCard description="Neue PV Anlagen dieses Jahr" value={newSystems} icon={null} />
      <MetricCard description="Gesamt Anzahl PV Anlagen" value={systems.length} icon={null} />
      <MetricCard description="Gesamt Nettonennleistung" value={sumPower + " kW"} icon={null} />
    </div>
  );
}

export default Metrics;
