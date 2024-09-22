import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { redirect } from "react-router-dom";

export const action = async ({ params }) => {
  const data = { status: "available" };
  try {
    await customFetch.patch(`/volunteers/${params.id}`, data);
    toast.success("Volunteer Successfully Approved");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return redirect("/dashboard/volunteers");
};
