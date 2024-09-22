import {
  Link,
  Form,
  redirect,
  useNavigation,
  useNavigate,
} from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo, SubmitBtn } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/login", data);
    // queryClient.invalidateQueries();
    toast.success("Login successful");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

// const check = async () => {
//   const testUserExists = await customFetch.get("/users/check-test-user");
//   console.log(testUserExists);
// };

function Login() {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state == "submitting";
  // const loginDemoUser = async () => {
  //   const data = {
  //     firstName: "Test",
  //     lastName: "User",
  //     username: "anonymous user",
  //     age: 23,
  //     location: "Dhaka",
  //     email: "test@gmail.com",
  //     phoneNumber: "999",
  //     password: "secret123",
  //   };
  //   try {
  //     const loginData = {};
  //     loginData.username = data.username;
  //     loginData.password = data.password;
  //     //check if test user exists

  //     console.log(testUserExists);
  //     // if (testUserExists) {
  //     //   await customFetch.post("/auth/login", loginData);
  //     //   toast.success("You can browse our website anonymously!");
  //     // } else {
  //     //   await customFetch.post("/auth/register", data);
  //     //   await customFetch.post("/auth/login", loginData);
  //     //   toast.success("You can browse our website anonymously!");
  //     // }
  //     navigate("/dashboard");
  //   } catch (error) {
  //     toast.error(error?.response?.data?.msg);
  //   }
  // };
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow type="text" name="username" defaultValue="ayush" />
        <FormRow type="password" name="password" defaultValue="12345678" />
        {/* <SubmitBtn /> */}
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "Signing in" : "Sign in"}
        </button>
        {/* <button type="button" className="btn btn-block" onClick={check}>
          explore the app
        </button> */}
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
