import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { InstallAppsContext } from "../contaxtApi/InstallContaxt";
import UseApps from "../hooks/UseApps";

const Dashboad = () => {
  const { installApps } = useContext(InstallAppsContext);
  const { apps } = UseApps();
  const unstallApps = apps.length - installApps.length;
  const data = [
    { name: "installApp", value: installApps.length, fill: "#0088FE" },
    { name: "unstallApp", value: unstallApps, fill: "#00C49F" },
  ];
  return (
    <div className="flex flex-col justify-center my-10 container border border-gray-200 mx-auto">
      <h2 className="text-2xl text-center ">Install and Unstall Apps</h2>
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          margin: "auto",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        <Legend></Legend>
        <Tooltip></Tooltip>
      </PieChart>
    </div>
  );
};

export default Dashboad;
