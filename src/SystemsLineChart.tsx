import { useEffect, useState } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { System } from "./types";
interface Dictionary<T> {
  [Key: string]: T;
}

function SystemsLineChart({ systems }: {systems: System[]}) {
  const [cumulatedSum, setCumulatedSum] = useState<{ date: string; value: number; }[]>([]);

  useEffect(() => {
     // Group data by month
     // Generate hash map for each year and summarize systems
     // e.g. sumByYear['2020'] = 173
    const sumByYear : Dictionary<number>  = {}
    systems.forEach((system) => {
      const year = system.CleanedDate.getFullYear()
      if (Object.keys(sumByYear).includes(year.toString())){
        sumByYear[year] += 1
      }else{
        sumByYear[year] = 1
      }
    })
    let prev = 0
    // Generate the cumulated sum of each year and transform in format for LineChart
     // e.g. cumulatedSumByYearArray[0] = {"date": "2020", value: 1732}
    const cumulatedSumByYearArray = Object.entries(sumByYear).map(([key, value]) => {
      prev += value
      return ({
        date: key,
        value: prev
      })
    })
    setCumulatedSum(cumulatedSumByYearArray)
  }, [systems])

  return (
    <>
      <ResponsiveContainer>
        <AreaChart
          width={500}
          height={500}
          data={cumulatedSum}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip labelFormatter={(value) => "Jahr: " + value} />
          <Area type="monotone" dataKey="value" strokeWidth={4} stroke="#FFC658" fill="#FDE047" fillOpacity={1} />

        </AreaChart>
      </ResponsiveContainer>
      <p className="text-center text-sm px-5">Anzahl der in Betrieb genommenen (und immer noch im Betrieb befindlichen) Photovoltaik Anlagen pro Jahr.</p>
    </>
  );
}

export default SystemsLineChart;
