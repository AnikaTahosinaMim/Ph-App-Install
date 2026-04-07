import React, { use } from "react";
const appspromissed = fetch("/data.json").then((res) => res.json());
const Trending = () => {
  const apps = use(appspromissed);
  console.log(apps);
  return (
    <div>
      <div className="mt-6 text-center">
        <h2>Trending Apps</h2>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
    </div>
  );
};

export default Trending;
