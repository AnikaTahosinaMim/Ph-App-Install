import React, { useContext } from "react";
import { InstallAppsContext } from "../contaxtApi/InstallContaxt";

const Install = () => {
  const contaxtData = useContext(InstallAppsContext);
  console.log(contaxtData); 

  return (
    <div>
      <h2>Install Apps</h2>
      <p>Name: {contaxtData.name}</p>
      <p>Height: {contaxtData.height}</p>
      
    </div>
  );
};

export default Install;