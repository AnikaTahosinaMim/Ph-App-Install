import React, { useContext } from "react";
import { InstallAppsContext } from "../contaxtApi/InstallContaxt";

const Install = () => {
  const contaxtData = useContext(InstallAppsContext);
  const { installApps, setInstallApps } = useContext(InstallAppsContext);
  const handleUnistall = (apps) => {
    console.log(apps, "hankjv");
    const filtalUnstall = installApps.filter((iapp) => iapp.id != apps.id);
    setInstallApps(filtalUnstall);
  };

  console.log(installApps, "install", "setinstall");
  console.log("install componts");
  return (
    <div>
      <h2>your Install Apps</h2>
      <div>
        {installApps.map((apps) => {
          return (
            <div className="container mx-auto">
              <div className="flex justify-between items-center gap-5 border border-gray-200 shadow-md my-6 p-4 ">
                <div>
                  <img
                    src={apps.image}
                    className="w-[100px] h-[100px]"
                    alt=""
                  />
                  <h2>{apps.title}</h2>
                </div>
                <div>
                  <button
                    onClick={() => handleUnistall(apps)}
                    className="btn btn-secondary text-white"
                  >
                    Unstall
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Install;
