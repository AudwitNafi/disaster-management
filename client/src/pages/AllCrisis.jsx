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
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  // const data = Object.fromEntries(formData);
  const file = formData.get("avatar");
  console.log(file);
  if (file && file.size > 500000) {
    toast.error("Image size too large");
    return null;
  }
  try {
    await customFetch.post("/crisis", formData);
    toast.success("Crisis Listed Successfully ");
    return redirect("/dashboard/crisis");
  } catch (error) {
    toast.error(error?.response?.formData?.msg);
    return error;
  }
};

const AllCrisisContext = createContext();
function AllCrisis() {
  const { data } = useLoaderData();
  console.log(data);
  // console.log(userData);
  const navigation = useNavigation();
  // console.log(navigation);
  const isSubmitting = navigation.state == "submitting";
  return (
    <AllCrisisContext.Provider value={{ data }}>
      <SearchContainer />
      <CrisisContainer />
      <Wrapper>
        <Form method="post" className="form" encType="multipart/form-data">
          <h4 className="form-title">Add Crisis</h4>
          <div className="form-center">
            <FormRow type="text" name="title" />
            <FormRow
              type="textarea"
              name="description"
              placeholder="Write a short description of the disaster"
            />

            <FormRow
              type="text"
              labelText="Location"
              name="location"
              defaultValue=""
            />
            <div className="form-row">
              <label htmlFor="avatar" className="form-label">
                Select an image file (max 0.5 MB)
              </label>
              <input
                type="file"
                id="avatar"
                name="avatar"
                className="form-input"
                accept="image/*"
              />
            </div>
            <FormRowSelect
              labelText="Severity"
              name="severity"
              defaultValue=""
              list={Object.values(SEVERITY)}
            />
            <FormRow
              type="textarea"
              labelText="Required Help"
              name="requiredHelp"
              placeholder="List all the help required"
            />
            <FormRow
              type="number"
              labelText="Required Funds"
              name="requiredFunds"
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
