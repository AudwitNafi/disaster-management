import Crisis from "./Crisis";
import Wrapper from "../assets/wrappers/CrisisContainer";
import { useAllCrisisContext } from "../pages/AllCrisis";

function CrisisContainer() {
  const { data } = useAllCrisisContext();
  const crises = data;
  console.log(crises);
  // if (crises.length === 0) {
  //   return (
  //     <Wrapper>
  //       <h2>No Crisis Listed</h2>
  //     </Wrapper>
  //   );
  // }
  return (
    <Wrapper>
      <div className="crisis">
        {crises.map((crisis) => {
          return <Crisis key={crisis.id} {...crisis} />;
        })}
      </div>
    </Wrapper>
  );
}

export default CrisisContainer;
