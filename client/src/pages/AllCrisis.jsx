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
import { Form, redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { createContext, useContext } from "react";

export const loader = async () => {
  try {
    const { data } = await customFetch("/crisis");
    console.log(data);
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllCrisisContext = createContext();
function AllCrisis() {
  const { data } = useLoaderData();
  // console.log(data);
  return (
    <AllCrisisContext.Provider value={{ data }}>
      <SearchContainer />
      <CrisisContainer />
      <Wrapper>
        <Form method="post" className="form">
          <h4 className="form-title">Add Crisis</h4>
          <div className="form-center">
            <FormRow type="text" name="title" />
            <FormRow type="text" name="description" />
            <FormRow
              type="text"
              labelText="Location"
              name="location"
              defaultValue="Dhaka"
            />
            <FormRowSelect
              labelText="Status"
              name="status"
              defaultValue={"pending"}
              list={Object.values(CRISIS_STATUS)}
            />
            <FormRowSelect
              labelText="Severity"
              name="severity"
              defaultValue="low"
              list={Object.values(SEVERITY)}
            />
            <SubmitBtn formBtn />
          </div>
        </Form>
      </Wrapper>
    </AllCrisisContext.Provider>
  );
}

export const useAllCrisisContext = () => useContext(AllCrisisContext);

export default AllCrisis;
