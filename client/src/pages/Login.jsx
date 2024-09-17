import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";
function Login() {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow type="email" name="email" defaultValue="nafi@gmail.com" />
        <FormRow type="password" name="password" defaultValue="nafi123" />
        <button type="submit" className="btn btn-block">
          LOGIN
        </button>
        <p>
          Want to be a Volunteer?
          <Link to="/register" className="member-btn">
            Sign Up
          </Link>
        </p>
      </form>
    </Wrapper>
  );
}

export default Login;
