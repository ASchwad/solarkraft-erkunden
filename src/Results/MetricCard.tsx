import React from "react";

function MetricCard({ description, value, icon }: {description: string, value: number | string, icon: React.ReactNode}) {

  return (
    <div className="bg-white p-3 lg:p-6 rounded-xl m-2 lg:m-4 shadow-lg">
      {icon}
      <h2 className="text-xl lg:text-3xl">
        {value}
      </h2>
      <p className="text-xs lg:text-sm">{description}</p>
    </div>
  );
}

export default MetricCard;
