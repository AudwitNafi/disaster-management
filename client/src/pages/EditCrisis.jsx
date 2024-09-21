// import { FormRow, FormRowSelect, SubmitBtn } from '../components';
// import Wrapper from '../assets/wrappers/DashboardFormPage';
// import { useLoaderData, useParams } from 'react-router-dom';
// import { STATUS, SEVERITY } from '../../../utils/constants';
// import { Form, redirect } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import customFetch from '../utils/customFetch';
// import { useQuery } from '@tanstack/react-query';

import { Form, redirect, useLoaderData, useNavigation } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import Wrapper from "../assets/wrappers/Testing";
import { FormRow, FormRowSelect } from "../components";
import { CRISIS_STATUS, SEVERITY } from "../../../utils/constants";
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
    const { data } = customFetch.get(`/crisis/${params.id}`);
    // console.log(data);
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
export const action =
  //   (queryClient) =>
  async ({ request, params }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      await customFetch.patch(`/crisis/${params.id}`, data);
      //   queryClient.invalidateQueries(['jobs']);

      toast.success("Crisis edited successfully");
      return redirect("/dashboard/crisis");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

const EditJob = () => {
  const navigation = useNavigation();
  // console.log(navigation);
  const isSubmitting = navigation.state == "submitting";
  //   const { crisis } = useLoaderData();
  //   console.log(crisis);
  //   const id = useLoaderData();
  // const {
  //   data: { job },
  // } = useQuery(singleJobQuery(id));
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Add Crisis</h4>
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

          {/* <FormRow
            type="text"
            labelText="Location"
            name="location"
            defaultValue="Dhaka"
          /> */}
          <FormRowSelect
            labelText="Status"
            name="status"
            defaultValue={"pending"}
            list={Object.values(CRISIS_STATUS)}
          />
          {/* <FormRowSelect
            labelText="Severity"
            name="severity"
            defaultValue="low"
            list={Object.values(SEVERITY)}
          /> */}
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
export default EditJob;
