// import React, { use } from "react";


import AppCard from "../../UI/AppCard";
import { ClimbingBoxLoader } from "react-spinners";
import { Link } from "react-router";
import UseApps from "../../hooks/UseApps";

// const appspromissed = fetch("/data.json").then((res) => res.json());
const Trending = () => {
  //   const apps = use(appspromissed);
  //   console.log(apps);
  const { apps, loading } = UseApps;

  //   console.log(apps, "jjjjgtrshrjo");
  //   console.log(loading, "jdsf");

  return (
    <div>
      <div className="mt-10 container mx-auto">
        <div className="text-center font-bold text-lg justify-center items-center mb-8">
          <h2>Trending Apps{apps.length}</h2>
          <p>Explore All Trending Apps on the Market developed by us</p>
        </div>
        {loading ? (
          <ClimbingBoxLoader></ClimbingBoxLoader>
        ) : (
          <div>
            <div className="grid grid-cols-3 gap-8">
              {apps.slice(0, 3).map((app, index) => {
                return <AppCard key={index} app={app}></AppCard>;
              })}
            </div>
          </div>
        )}
        <div className="text-center mt-8">
          <Link to={"/app"}>
            <button className="btn bg-sky-400 ">Show All</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Trending;
