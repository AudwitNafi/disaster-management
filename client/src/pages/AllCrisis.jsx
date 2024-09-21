import {
  CrisisContainer,
  FormRow,
  FormRowSelect,
  SearchContainer,
  SubmitBtn,
} from "../components";
import Wrapper from "../assets/wrappers/Testing";
import CrisisWrapper from "../assets/wrappers/CrisisContainer";
import { useOutletContext } from "react-router-dom";
import { CRISIS_STATUS, SEVERITY } from "../../../utils/constants";
import { Form, redirect, useLoaderData, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { createContext, useContext } from "react";

export const loader = async () => {
  try {
    const { data } = await customFetch("/crisis");
    const user = await customFetch("/users/current-user");
    console.log(user.data);
    const userData = user.data;
    return { data, userData };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/crisis", data);
    toast.success("Crisis Listed Successfully ");
    return redirect("/dashboard/crisis");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllCrisisContext = createContext();
function AllCrisis() {
  const { data, userData } = useLoaderData();
  console.log(userData);
  const navigation = useNavigation();
  // console.log(navigation);
  const isSubmitting = navigation.state == "submitting";
  return (
    <AllCrisisContext.Provider value={{ data, userData }}>
      <SearchContainer />
      <CrisisContainer />
      <Wrapper>
        <Form method="post" className="form">
          <h4 className="form-title">Add Crisis</h4>
          <div className="form-center">
            <FormRow type="text" name="title" />
            <FormRow type="textarea" name="description" />
            <FormRow
              type="text"
              labelText="Location"
              name="location"
              defaultValue="Dhaka"
            />
            {/* <FormRowSelect
              labelText="Status"
              name="status"
              defaultValue={"pending"}
              list={Object.values(CRISIS_STATUS)}
            /> */}
            <FormRowSelect
              labelText="Severity"
              name="severity"
              defaultValue="low"
              list={Object.values(SEVERITY)}
            />
            <button
              type="submit"
              className="btn btn-block"
              disabled={isSubmitting}
            >
              {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
            </button>
          </div>
        </Form>
      </Wrapper>
    </AllCrisisContext.Provider>
  );
}

export const useAllCrisisContext = () => useContext(AllCrisisContext);

export default AllCrisis;
