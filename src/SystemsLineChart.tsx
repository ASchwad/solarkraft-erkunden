import { Area, AreaChart, CartesianGrid, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { System } from "./types";
interface Dictionary<T> {
  [Key: string]: T;
}

function SystemsLineChart({ systems }: {systems: System[]}) {
  // Group data by month
  let sumByYear : Dictionary<number>  = {}
  systems.forEach((system) => {
    const year = system.CleanedDate.getFullYear()  
    if (Object.keys(sumByYear).includes(year.toString())){
      sumByYear[year] += 1
    }else{
      sumByYear[year] = 1
    }
  })
  let prev = 0
  const sumByMonthArray = Object.entries(sumByYear).map(([key, value]) => {
    prev += value
    return ({
      date: key,
      value: prev + value
    })
  })

  return (
    <>
      <ResponsiveContainer>
        <AreaChart
          width={500}
          height={500}
          data={sumByMonthArray}
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
          <Line type="monotone" dataKey="value" stroke="black" activeDot={{ r: 4 }} />
          <Area type="monotone" dataKey="value" strokeWidth={0.5} stroke="black" fill="#FDE047" fillOpacity={1} />

        </AreaChart>
      </ResponsiveContainer>
      <p className="text-center text-sm px-5">Anzahl der in Betrieb genommenen (und immer noch im Betrieb befindlichen) Photovoltaik Anlagen pro Jahr.</p>
    </>
  );
}

export default SystemsLineChart;
