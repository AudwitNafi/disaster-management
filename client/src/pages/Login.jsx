import { Link, Form, redirect, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo, SubmitBtn } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      await customFetch.post("/auth/login", data);
      queryClient.invalidateQueries();
      toast.success("Login successful");
      return redirect("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

function Login() {
  const navigate = useNavigate();
  const isSubmitting = navigation.state == "submitting";
  const loginDemoUser = async () => {
    const data = {
      email: "test@test.com",
      password: "secret123",
    };
    try {
      await customFetch.post("/auth/login", data);
      toast.success("Take a test drive");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow type="text" name="username" defaultValue="audwitnafi" />
        <FormRow type="password" name="password" defaultValue="nafi123" />
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "SIGNING IN..." : "LOGIN"}
        </button>
        <button type="button" className="btn btn-block" onClick={loginDemoUser}>
          explore the app
        </button>
        <p>
          Want to be a Volunteer?
          <Link to="/register" className="member-btn">
            Sign Up
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
}

export default Login;
