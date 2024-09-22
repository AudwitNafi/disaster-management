import { MdCrisisAlert } from "react-icons/md";
import Wrapper from "../assets/wrappers/VolunteerCard";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaTasks,
  FaLocationArrow,
} from "react-icons/fa";
const VolunteerCard = ({ volunteer }) => {
  return (
    <Wrapper>
      <div className="volunteer-card">
        <div className="card-header">
          <FaUser className="icon user-icon" />
          <h2 className="full-name">{`${volunteer.first_name} ${volunteer.last_name}`}</h2>
        </div>
        <div className="card-body">
          <p className="username">{volunteer.username}</p>
          <p className="phone">
            <FaPhone className="icon" /> {volunteer.phone_number}
          </p>
          <p className="email">
            <FaEnvelope className="icon" /> {volunteer.email}
          </p>
          <div className="tasks">
            <FaTasks className="icon tasks-icon" />
            <strong>Assigned Tasks: </strong>
            {volunteer.tasks}
          </div>
          <div className="tasks">
            <MdCrisisAlert className="icon tasks-icon" />
            <strong>Assigned Crisis: </strong>
            {volunteer.assigned_crisis_title}
          </div>
          <div className="tasks">
            <FaLocationArrow className="icon tasks-icon" />
            <strong>Assigned Location: </strong>
            {volunteer.task_location}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default VolunteerCard;
