import { ClimbingBoxLoader } from "react-spinners";
import AppCard from "../UI/AppCard";
import UseApps from "../hooks/UseApps";

const AllApps = () => {
  const { apps, loading } = UseApps();

  console.log(apps, "jjjjgtrshrjo");
  console.log(loading, "jdsf");
  return (
    <div>
      <div className="text-center font-semibold my-10">
        <h2>Our All Applications</h2>
        <p>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      {loading ? (
        <ClimbingBoxLoader></ClimbingBoxLoader>
      ) : (
        <div className="container mx-auto my-8">
          <div className="grid grid-cols-3 gap-8">
            {apps.map((app, index) => {
              return <AppCard key={index} app={app}></AppCard>;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllApps;
