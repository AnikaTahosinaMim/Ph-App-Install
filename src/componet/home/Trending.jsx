// import React, { use } from "react";

import { useEffect, useState } from "react";

import AppCard from "../../UI/AppCard";

// const appspromissed = fetch("/data.json").then((res) => res.json());
const Trending = () => {
  //   const apps = use(appspromissed);
  //   console.log(apps);
  const [apps, setApps] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      console.log(data);
      setApps(data);
    };
    fetchData();
  }, []);
  console.log(apps, "jjjjgtrshrjo");

  return (
    <div>
      <div className="mt-6 container mx-auto">
        <h2>Trending Apps{apps.length}</h2>
        <p>Explore All Trending Apps on the Market developed by us</p>
        <div className="grid grid-cols-3 gap-8">
          {apps.map((app, index) => {
            return (
              <AppCard key={index} app={app}></AppCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Trending;
