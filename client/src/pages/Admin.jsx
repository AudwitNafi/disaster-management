import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { redirect, useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/StatsContainer";

export const loader = async () => {
  try {
    const response = await customFetch.get("/users/admin/stats");
    // console.log(response.data);
    return response.data;
  } catch (error) {
    toast.error("You are not authorized to view this page");
    return redirect("/dashboard");
  }
};

function Admin() {
  const { count } = useLoaderData();
  return (
    <Wrapper>
      <h1>admin</h1>
    </Wrapper>
  );
}

export default Admin;
