import React from "react";
import { CiStar } from "react-icons/ci";
import { FaDownLong } from "react-icons/fa6";

const AppCard = ({ app }) => {
  return (
    <div>
      <div className="card bg-base-100  shadow-sm">
        <figure>
          <img src={app.image}   className="rounded-md h-[200px] w-auto" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{app.title}</h2>

          <div className="card-actions justify-between">
            <span className="text-green-500 font-semibold rounded-md bg-green-200 px-3 py-1 flex items-center gap-1">
              {" "}
              <FaDownLong></FaDownLong> {app.downloads}
            </span>
            <span className="text-pink-500 font-semibold rounded-md bg-pink-200 px-3 py-1 flex items-center gap-1">
              {" "}
              <CiStar></CiStar> {app.ratingAvg}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
