import React, { useEffect, useState } from "react";

const UseApps = () => {
    const [apps, setApps] = useState([]);
      const [loading, setLoading] = useState(true);
      useEffect(() => {
        const fetchData = async () => {
          const res = await fetch("/data.json");
          const data = await res.json();
          console.log(data);
          setApps(data);
          setLoading(false);
        };
        fetchData();
      }, []);
      console.log(apps, "jjjjgtrshrjo");
      console.log(loading, "jdsf");


  return {apps,loading};
};

export default UseApps;
