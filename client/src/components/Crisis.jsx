import {
  FaLocationArrow,
  FaBriefcase,
  FaCalendarAlt,
  // MdCrisisAlert,
} from "react-icons/fa";
import { Link, Form } from "react-router-dom";
import Wrapper from "../assets/wrappers/Crisis";
import CrisisInfo from "./CrisisInfo";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import main from "../assets/images/landing-page.jpg";

day.extend(advancedFormat);

function Crisis({
  id,
  title,
  description,
  location,
  severity,
  status,
  reported_by,
  report_date,
  image_url,
  required_help,
  role,
}) {
  const date = day(report_date).format("MMM Do, YYYY");
  console.log(role);
  return (
    <Wrapper>
      <img src={main} alt="main" />
      <div className="info">
        <h5>{title}</h5>
        <p>{severity}</p>
      </div>
      <div className="description">{description}</div>
      <div className="content-center">
        <CrisisInfo icon={<FaLocationArrow />} text={location} />
        <CrisisInfo icon={<FaCalendarAlt />} text={date} />
        <CrisisInfo icon={<FaCalendarAlt />} text={reported_by} />
        <div className={`status ${status}`}>{status}</div>
      </div>
      {role === "admin" && (
        <footer className="actions">
          <Link to={`../edit-crisis/${id}`} className="btn edit-btn">
            Edit
          </Link>
          <Form method="post" action={`../delete-crisis/${id}`}>
            <button type="submit" className="btn delete-btn">
              Delete
            </button>
          </Form>
        </footer>
      )}
    </Wrapper>
  );
}

export default Crisis;
