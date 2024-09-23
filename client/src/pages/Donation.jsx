import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import {
  Form,
  redirect,
  useLoaderData,
  useOutletContext,
} from "react-router-dom";
import { createContext, useContext } from "react";
import { DonationsTable, StatsContainer, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/DonationForm";

export const loader = async () => {
  try {
    const { data } = await customFetch("/donations");
    const totalexpense = await customFetch("/donations/expenses");
    // console.log(data);
    const { sum } = totalexpense.data;
    // console.log(sum);
    return { data, sum };
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
  const { data, sum } = useLoaderData();
  const { user } = useOutletContext();
  // console.log(user);
  // console.log(data);
  // const navigation = useNavigation();
  // const isSubmitting = navigation.state == "submitting";
  return (
    <AllDonationsContext.Provider value={{ data, sum }}>
      <DonationsTable />
      <StatsContainer />
      <h3>Total Expenses incurred for crises: {sum}</h3>
      <Wrapper>
        <div className="donation-form-container">
          <h2>Make a Donation</h2>

          {/* Success Message */}
          {/* {actionData?.success && (
        <div className="success-message">{actionData.success}</div>
        )} */}

          {/* Error Message */}
          {/* {actionData?.errors && (
        <div className="error-message">
        {actionData.errors.map((error, index) => (
          <p key={index}>{error}</p>
          ))}
          </div>
          )} */}

          {/* Donation Form */}
          <Form method="post" className="donation-form">
            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="name">
                Name<span className="required">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="donorName"
                placeholder="Your full name"
                defaultValue={
                  user.first_name
                    ? `${user.first_name} ${user.last_name}`
                    : null
                }
                required
              />
            </div>

            {/* Email Field */}

            {/* Donation Amount Field */}
            <div className="form-group">
              <label htmlFor="amount">
                Donation Amount ($)<span className="required">*</span>
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                placeholder="50"
                min="1"
                step="0.01"
                required
              />
            </div>

            {/* Message Field */}
            <div className="form-group">
              <label htmlFor="message">Message (Optional)</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message or reason for donating"
                rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <SubmitBtn />
          </Form>
        </div>
      </Wrapper>
    </AllDonationsContext.Provider>
  );
}
export const useAllDonationsContext = () => useContext(AllDonationsContext);
export default Donation;
