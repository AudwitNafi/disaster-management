import { FormRow, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/ChartsContainer";
import { useOutletContext, redirect } from "react-router-dom";
import { Form } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  try {
    await customFetch.patch("/users/update-user", data);
    toast.success("Profile updated successfully");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return null;
  }
};

const Profile = () => {
  const { user } = useOutletContext();

  const { firstName, lastName, username, age, location, email, phoneNumber } =
    user;

  return (
    <Wrapper>
      <Form method="post" className="form">
        <FormRow
          type="text"
          name="firstName"
          labelText="First Name"
          defaultValue={firstName}
        />
        <FormRow
          type="text"
          name="lastName"
          labelText="Last Name"
          defaultValue={lastName}
        />
        <FormRow type="text" name="username" defaultValue={username} />
        <FormRow type="number" name="age" defaultValue={age} />
        <FormRow type="text" name="location" defaultValue={location} />
        <FormRow type="email" name="email" defaultValue={email} />
        <FormRow
          type="text"
          name="phoneNumber"
          labelText="Phone Number"
          defaultValue={phoneNumber}
        />

        <SubmitBtn />
      </Form>
    </Wrapper>
  );
};
export default Profile;
