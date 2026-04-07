import React from "react";
import Banner from "../componet/home/Banner";
import Stats from "../componet/home/Stats";
import Trending from "../componet/home/Trending";
// import { useLoaderData } from "react-router";

const Homepage = () => {
//   const data = useLoaderData();
//   console.log(data, "data from homepage");
  return (
    <div>
      <Banner></Banner>
      <Stats></Stats>
      <Trending></Trending>
    </div>
  );
};

export default Homepage;
