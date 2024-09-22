import { Form, redirect, useNavigation, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo } from "../components";
import { FormRow } from "../components";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch.js";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration successful");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

function Register() {
  const navigation = useNavigation();
  // console.log(navigation);
  const isSubmitting = navigation.state == "submitting";

  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <p className="text">Become a Volunteer Now!</p>
        <FormRow
          type="text"
          name="firstName"
          labelText="First Name"
          defaultValue="Nafi"
        />
        <FormRow
          type="text"
          name="lastName"
          labelText="Last Name"
          defaultValue="Anam"
        />
        <FormRow type="text" name="username" defaultValue="audwitnafi" />
        <FormRow type="number" name="age" defaultValue="23" />
        <FormRow type="text" name="location" defaultValue="Dhaka" />
        <FormRow type="email" name="email" defaultValue="nafi@gmail.com" />
        <FormRow
          type="text"
          name="phoneNumber"
          labelText="Phone Number"
          defaultValue="135612623762476"
        />
        <FormRow type="password" name="password" defaultValue="12345678" />

        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "SUBMITTING..." : "SIGN UP"}
        </button>
        <p>
          Already a Volunteer?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
}

export default Register;
