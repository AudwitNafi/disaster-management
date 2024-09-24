import { toast } from "react-toastify";
import Wrapper from "../assets/wrappers/Home";
import customFetch from "../utils/customFetch";
import {
  AdminVCard,
  CrisisShort,
  DashboardCrisisContainer,
  VolunteerCard,
} from "../components";
import { createContext, useContext } from "react";
import { Link, useLoaderData, useOutletContext } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const loader = async () => {
  try {
    const crisesData = await customFetch.get("/crisis/recent");
    const volunteersData = await customFetch("/volunteers/available");
    const donation = await customFetch("/donations/all-donations");
    const recentCrises = crisesData.data;
    const availableVolunteers = volunteersData.data;
    const donationData = donation.data;
    // console.log(recentCrises);
    // console.log(volunteersData);
    return { recentCrises, availableVolunteers, donationData };
    // return null;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

function Dashboard() {
  const navigate = useNavigate();
  const { recentCrises, availableVolunteers, donationData } = useLoaderData();
  console.log(availableVolunteers);
  const { user } = useOutletContext();
  return (
    <Wrapper>
      <div className="funds">
        <div className="title">Total Funds</div>
        <div className="page">
          <span className="bdt">BDT</span>
          <h1>{donationData.sum}</h1>
        </div>
      </div>
      <div className="crisis-volunteer-container">
        <DashboardCrisisContainer values={{ recentCrises, user }} />
        <div className="volunteer-container">
          <h3>Available Volunteers</h3>

          {availableVolunteers.map((volunteer) => {
            return (
              <AdminVCard key={volunteer.id} volunteer={volunteer} page="" />
            );
          })}
        </div>
      </div>
    </Wrapper>
    // </AllDashboardContext.Provider>
  );
}

// export const useAllDashboardContext = () => useContext(AllDashboardContext);
export default Dashboard;
