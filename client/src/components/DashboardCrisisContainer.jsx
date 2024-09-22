import Wrapper from "../assets/wrappers/DashboardCrisisContainer";
// import { useAllDashboardContext } from "../pages/Dashboard";
import CrisisShort from "./CrisisShort";

function DashboardCrisisContainer({ values }) {
  // const data = useAllDashboardContext();
  const recentCrises = values.recentCrises;
  console.log("Recent Crises props: ", values);
  if (recentCrises.length === 0) {
    return (
      <Wrapper>
        <h2>No Crisis Listed</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h3>Crisis</h3>

      <div className="crisis-container">
        {recentCrises.map((crisis) => {
          return <CrisisShort key={crisis.id} {...crisis} />;
        })}
      </div>
    </Wrapper>
  );
}

export default DashboardCrisisContainer;
