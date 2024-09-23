import { useEffect, useRef, useState } from "react";
import Wrapper from "../assets/wrappers/DashboardCrisisContainer";
// import { useAllDashboardContext } from "../pages/Dashboard";
import CrisisShort from "./CrisisShort";

function DashboardCrisisContainer({ values }) {
  const { user } = values;
  const role = user.role;
  // const data = useAllDashboardContext();
  const recentCrises = values.recentCrises;
  const filteredCrises =
    role !== "admin"
      ? recentCrises.filter((crisis) => crisis.status !== "pending")
      : recentCrises;
  // console.log("Recent Crises props: ", values);
  // if (recentCrises.length === 0) {
  //   return (
  //     <Wrapper>
  //       <h2>No Crisis Listed</h2>
  //     </Wrapper>
  //   );
  // }
  // return (
  //   <Wrapper>
  //     <h3>Crisis</h3>

  //     <div className="crisis-container">
  //       {recentCrises.map((crisis) => {
  //         return <CrisisShort key={crisis.id} {...crisis} />;
  //       })}
  //     </div>
  //   </Wrapper>
  // );

  const containerRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    // Calculate the total height of the first five items
    const container = containerRef.current;
    const itemElements = container.querySelectorAll(".item");
    let totalHeight = 0;

    for (let i = 0; i < Math.min(5, itemElements.length); i++) {
      totalHeight += itemElements[i].offsetHeight;
    }

    setMaxHeight(`${totalHeight}px`);
  }, [filteredCrises]);

  // const containerStyle = {
  //   maxHeight: maxHeight,
  //   overflowY: "auto",
  //   padding: "10px",
  //   boxSizing: "border-box",
  // };

  const itemStyle = {
    width: "100%",
    boxSizing: "border-box",
    marginBottom: "10px",
  };

  return (
    <div ref={containerRef}>
      <Wrapper>
        {filteredCrises.map((crisis) => {
          return <CrisisShort style={itemStyle} key={crisis.id} {...crisis} />;
        })}
      </Wrapper>
    </div>
  );
}

export default DashboardCrisisContainer;
