import React from "react";

function MetricCard({ description, value, icon }: {description: string, value: number | string, icon: React.ReactNode}) {

  return (
    <div className="bg-white p-6 rounded-xl m-4 shadow-lg">
      {icon}
      <h2 className="text-3xl">
        {value}
      </h2>
      <p className="text-sm">{description}</p>
    </div>
  );
}

export default MetricCard;
