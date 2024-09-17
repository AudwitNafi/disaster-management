import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo } from "../components";
import { FormRow } from "../components";

function Register() {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <p className="text">Become a Volunteer Now!</p>
        <FormRow type="text" name="name" defaultValue="Nafi" />
        <FormRow
          type="text"
          name="lastName"
          labelText="Last Name"
          defaultValue="Anam"
        />
        <FormRow type="text" name="location" defaultValue="Dhaka" />
        <FormRow type="email" name="email" defaultValue="nafi@gmail.com" />
        <FormRow type="password" name="password" defaultValue="nafi123" />

        <button type="submit" className="btn btn-block">
          SIGN UP
        </button>
        <p>
          Already a Volunteer?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
}

export default Register;
