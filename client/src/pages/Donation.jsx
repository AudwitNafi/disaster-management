import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { Form, redirect, useLoaderData, useNavigation } from "react-router-dom";
import { createContext, useContext } from "react";
import { DonationsTable } from "../components";

export const loader = async () => {
  try {
    const { data } = await customFetch("/donations");
    // console.log(data);
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/donations", data);
    toast.success("Thank you for your donation!");
    return redirect("/dashboard/donation");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllDonationsContext = createContext();
function Donation() {
  const { data } = useLoaderData();
  // console.log(data);
  // const navigation = useNavigation();
  // const isSubmitting = navigation.state == "submitting";
  return (
    <AllDonationsContext.Provider value={{ data }}>
      <DonationsTable />
    </AllDonationsContext.Provider>
  );
}
export const useAllDonationsContext = () => useContext(AllDonationsContext);
export default Donation;
