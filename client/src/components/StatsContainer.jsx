import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import Wrapper from "../assets/wrappers/Testing";
import styled from "styled-components";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

const VolunteersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 2rem;
`;

function StatsContainer() {
  return (
    <VolunteersContainer>
      <BarChart
        width={500}
        height={300}
        series={[
          { data: pData, label: "Donations", id: "donationsId" },
          { data: uData, label: "Expenses", id: "expensesId" },
        ]}
        xAxis={[{ data: xLabels, scaleType: "band" }]}
      />
    </VolunteersContainer>
  );
}

export default StatsContainer;
