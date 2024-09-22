import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { FaChartBar, FaUser } from "react-icons/fa";
import { MdCrisisAlert } from "react-icons/md";
import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/CrisisContainer";
import styled from "styled-components";

export const loader = async () => {
  try {
    const response = await customFetch("/users/admin/stats");
    const volData = await customFetch("/volunteers");
    const crisesData = await customFetch("/crisis");
    console.log(crisesData.data);
    const userCount = response.data.count;
    const volunteers = volData.data;
    const crises = crisesData.data;
    // console.log(volunteers);
    return { userCount, volunteers, crises };
    // return null;
  } catch (error) {
    toast.error("You are not authorized to view this page");
    return redirect("/dashboard");
  }
};

const DashboardGrid = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
  margin: 50px;
`;

const DashboardCard = styled.div`
  background-color: #ffffff;
  border: 2px solid #bdc3c7;
  border-radius: 8px;
  width: 100%;
  max-width: 300px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  .icon {
    font-size: 40px;
    color: #2980b9;
    margin-bottom: 10px;
  }

  .title {
    font-size: 20px;
    color: #2c3e50;
    text-align: center;
  }
`;

function Admin() {
  const navigate = useNavigate();
  const { count, volunteers, crises } = useLoaderData();
  // console.log(crises);
  console.log(volunteers);
  return (
    <>
      <h3>Admin Dashboard</h3>
      <DashboardGrid>
        <DashboardCard onClick={() => navigate("volunteers")}>
          <FaUser className="fas fa-users icon" />
          <div className="title">Manage Volunteers</div>
        </DashboardCard>
        <DashboardCard onClick={() => navigate("crisis")}>
          <MdCrisisAlert className="fas fa-exclamation-triangle icon" />
          <div className="title">Manage Crisis</div>
        </DashboardCard>
        <DashboardCard onClick={() => navigate("report")}>
          <FaChartBar className="fas fa-chart-line icon" />
          <div className="title">View Reports</div>
        </DashboardCard>
      </DashboardGrid>
      <Wrapper>
        <Outlet context={{ volunteers, crises }} />
      </Wrapper>
    </>
  );
}

export default Admin;
