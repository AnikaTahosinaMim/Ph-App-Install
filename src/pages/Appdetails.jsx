import React, { useContext, useState } from "react";
import { useParams } from "react-router";
import UseApps from "../hooks/UseApps";
import { CiStar } from "react-icons/ci";
import { FaDownLong, FaStar } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { InstallAppsContext } from "../contaxtApi/InstallContaxt";

const Appdetails = () => {
  const { installApps, setInstallApps } = useContext(InstallAppsContext);

  const { id } = useParams();
  // console.log(id, "id");
  const { apps, loading } = UseApps();
  // console.log(apps, loading, "app", "loadinf");
  const expectedData = apps.find((app) => app.id == id);
  // console.log(expectedData, "expectdaa");
  if (!expectedData) {
    return <p>App not found</p>;
  }
  const handleApp = () => {
    setInstallApps([...installApps, expectedData]);
    // console.log(installApps, setInstallApps, "install app");
  };

  return (
    <div className="border border-gray-300 shadow-lg p-8 container mx-auto">
      <div className="flex items-center gap-8  rounded-lg">
        <div>
          <img
            src={expectedData.image}
            className="h[200px] w-[200px] my-5 px-2 rounded-lg"
            alt=""
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold">{expectedData.title}</h2>
          <p>
            Devloped by :{" "}
            <span className="text-2xl font-bold text-purple-500">
              {expectedData.companyName}
            </span>
          </p>
          <div className="flex justify-between">
            <p className="flex items-center gap-1">
              {" "}
              <FaDownLong className="text-green-500"></FaDownLong> Download
            </p>
            <p className="flex items-center gap-1">
              {" "}
              <FaStar className="text-amber-500"></FaStar>{" "}
              {expectedData.ratingAvg}
            </p>
            <p className="flex items-center gap-1">
              {" "}
              <AiFillLike className="text-purple-600"></AiFillLike>{" "}
              {expectedData.reviews}
            </p>
          </div>
        </div>
      </div>
      <div>
        
          <button onClick={() => handleApp()} className="btn bg-purple-500">
            Install Now
          </button>
       
      </div>
    </div>
  );
};

export default Appdetails;
