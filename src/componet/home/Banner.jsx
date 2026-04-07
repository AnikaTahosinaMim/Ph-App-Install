import React from "react";
import bannerImg from "../../assets/images/hero.png";

const Banner = () => {
  return (
    <div className="min-h-[90vh] ">
      <div className="text-center justify-center items-center space-y-3">
        <h2 className="text-2xl text-purple-400 font-bold">
          We Build <br /> Productive Apps
        </h2>
        <p>
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
        <div className="gap-3 flex items-center justify-center">
          <button className="btn">Play Store</button>
          <button className="btn">Google</button>
        </div>
        <img src={bannerImg} className="mx-auto justify-center" alt="" />
      </div>
    </div>
  );
};

export default Banner;
