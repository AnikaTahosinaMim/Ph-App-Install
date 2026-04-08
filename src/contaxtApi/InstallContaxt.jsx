import React, { createContext } from "react";

export const InstallAppsContext = createContext();

const InstallAppsProvider = ({ children }) => {
  const data = {
    name: "uthso",
    height: "34",
  };

  return (
    <InstallAppsContext.Provider value={data}>
      {children}
    </InstallAppsContext.Provider>
  );
};

export default InstallAppsProvider;