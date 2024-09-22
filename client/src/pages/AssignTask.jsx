import {
  Form,
  redirect,
  useLoaderData,
  useNavigation,
  useOutletContext,
} from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import Wrapper from "../assets/wrappers/Testing";
import { FormRow, FormRowSelect } from "../components";
import { CRISIS_STATUS, SEVERITY } from "../../../utils/constants";
import { useState } from "react";
// const singleJobQuery = (id) => {
//   return {
//     queryKey: ['job', id],
//     queryFn: async () => {
//       const { data } = await customFetch.get(`/jobs/${id}`);
//       return data;
//     },
//   };
// };

export const loader = async ({ params }) => {
  try {
    // await queryClient.ensureQueryData(singleJobQuery(params.id));
    const { data } = customFetch.get(`/volunteer/${params.id}`);
    console.log(data);
    // return data;
    return null;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/dashboard/crisis");
  }
};

//   (queryClient) =>
//   async ({ params }) => {
//     try {
//       await queryClient.ensureQueryData(singleJobQuery(params.id));
//       return params.id;
//     } catch (error) {
//       toast.error(error?.response?.data?.msg);
//       return redirect('/dashboard/all-jobs');
//     }
//   };
export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.patch(`/volunteers/assign/${params.id}`, data);
    toast.success("Task assigned successfully");
    console.log(data);
    return redirect("/dashboard/admin");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/dashboard/admin");
  }
};

const AssignTask = () => {
  const [locationState, setLocationState] = useState("");
  const navigation = useNavigation();
  // console.log(navigation);
  const isSubmitting = navigation.state == "submitting";
  const handleClick = (e) => {
    // console.log(e.target.value);
    const location = e.target.value.split(", ")[1];
    console.log(location);
    setLocationState(location);
  };
  const { crises } = useOutletContext();
  //   console.log(crises);
  const titles = crises.map((crisis) => `${crisis.title}, ${crisis.location}`);
  console.log(titles);
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Assign Task</h4>
        <div className="form-center">
          {/* <FormRow type="text" name="title" />
          <FormRow type="textarea" name="description" /> */}
          {/* <textarea
            id="crisis-description"
            name="description"
            rows="5"
            cols="50"
            placeholder="Enter a detailed description of the crisis..."
            required
          ></textarea> */}

          <FormRowSelect
            labelText="Crisis to Assign"
            name="assignedCrisis"
            defaultValue=""
            list={titles}
            onChange={handleClick}
          />
          <FormRow labelText="Tasks" name="tasks" defaultValue={""} />
          <FormRow
            labelText="Task Location"
            name="taskLocation"
            defaultValue={locationState}
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
  );
};

export default AssignTask;
