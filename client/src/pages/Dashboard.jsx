import { toast } from "react-toastify";
import Wrapper from "../assets/wrappers/Home";
import customFetch from "../utils/customFetch";
import { CrisisShort, DashboardCrisisContainer } from "../components";
import { createContext, useContext } from "react";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  try {
    const crisesData = await customFetch.get("/crisis/recent");
    const volunteersData = await customFetch("/volunteers/available");
    const donation = await customFetch("/donations/all-donations");
    const recentCrises = crisesData.data;
    const availableVolunteers = volunteersData.data;
    const donationData = donation.data;
    // console.log(recentCrises);
    console.log(volunteersData);
    return { recentCrises, availableVolunteers, donationData };
    // return null;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

// const AllDashboardContext = createContext();
function Dashboard() {
  const { recentCrises, availableVolunteers, donationData } = useLoaderData();
  console.log(donationData.sum);
  return (
    // <AllDashboardContext.Provider
    //   values={{ recentCrises, availableVolunteers }}
    // >
    <Wrapper>
      <div className="funds">
        <div className="title">Total Funds</div>
        <div className="page">
          <span className="bdt">BDT</span>
          <h1>{donationData.sum}</h1>
        </div>
      </div>
      <div className="crisis-volunteer-container">
        <DashboardCrisisContainer
          values={{ recentCrises, availableVolunteers }}
        />
        <div className="cv-container">
          <h3>Volunteers</h3>
          <h4>
            For Full list of available volunteers navigate to Volunteers Section
          </h4>
        </div>
      </div>
    </Wrapper>
    // </AllDashboardContext.Provider>
  );
}

// export const useAllDashboardContext = () => useContext(AllDashboardContext);
export default Dashboard;
