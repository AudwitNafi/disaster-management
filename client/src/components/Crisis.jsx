import {
  FaLocationArrow,
  FaBriefcase,
  FaCalendarAlt,
  FaUserAlt,
  // MdCrisisAlert,
} from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { Link, Form } from "react-router-dom";
import Wrapper from "../assets/wrappers/Crisis";
import CrisisInfo from "./CrisisInfo";
import main from "../assets/images/landing-page.jpg";
import tornado from "../assets/images/tornado.jpg";
import day from "dayjs";

import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);

function Crisis({
  id,
  title,
  description,
  location,
  severity,
  status,
  assigned,
  reported_by,
  report_date,
  image_url,
  required_help,
  required_funds,
  role,
}) {
  const date = day(report_date).format("MMM Do, YYYY");
  console.log(date);

  return (
    <Wrapper>
      <img src={tornado} alt="main" />
      <div className="info">
        <h5>{title}</h5>
        <p>
          Severity:
          <span className={`severity-${severity}`}>{severity}</span>
        </p>
      </div>
      <div className="description">{description}</div>
      <div className="content-center">
        <CrisisInfo icon={<FaLocationArrow />} text={location} />
        <CrisisInfo icon={<FaCalendarAlt />} text={date} />
        <CrisisInfo icon={<GiMoneyStack />} text={`BDT ${required_funds}`} />
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
