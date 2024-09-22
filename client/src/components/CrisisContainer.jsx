import Crisis from "./Crisis";
import Wrapper from "../assets/wrappers/CrisisContainer";
import { useAllCrisisContext } from "../pages/AllCrisis";
import { useOutletContext } from "react-router-dom";

function CrisisContainer() {
  const { data } = useAllCrisisContext();
  const { user } = useOutletContext();
  const role = user.role;
  // console.log(role);
  const crises = data;
  console.log(crises);
  if (crises.length === 0) {
    return (
      <Wrapper>
        <h2>No Crisis Listed</h2>
      </Wrapper>
    );
  }

  const filteredCrises =
    role !== "admin"
      ? crises.filter((crisis) => crisis.status !== "pending")
      : crises;
  return (
    <Wrapper>
      <div className="crisis">
        {filteredCrises.map((crisis) => {
          return <Crisis key={crisis.id} {...crisis} role={role} />;
        })}
      </div>
    </Wrapper>
  );
}

export default CrisisContainer;
