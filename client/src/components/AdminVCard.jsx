import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { Form } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/Testing";

const VCard = styled.div`
  background-color: #fff;
  border: 2px solid #2980b9;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

function AdminVCard({ volunteer, page }) {
  console.log(volunteer);
  const navigate = useNavigate();
  //   day.extend(advancedFormat);
  //   const date = day(report_date).format("MMM Do, YYYY");
  return (
    <>
      <div
        className="container"
        style={{ boxSizing: "border-box", width: "790px" }}
      >
        <div className="row">
          <div className="col-12">
            <div className="card b-1 hover-shadow mb-20">
              <div className="media card-body">
                <div className="media-left pr-12">
                  <img
                    className="avatar avatar-xl no-radius"
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    alt="..."
                  />
                </div>
                <div className="media-body">
                  <div className="mb-2">
                    <span className="fs-20 pr-16">{`${volunteer.first_name} ${volunteer.last_name}`}</span>
                  </div>
                  <small className="fs-16 fw-300 ls-1">
                    {volunteer.username}
                  </small>
                </div>
                <div className="media-right text-right d-none d-md-block">
                  <span className="fs-14 text-fade mb-12">
                    Age: {volunteer.age}
                  </span>
                  <span className="text-fade" style={{ marginLeft: "20px" }}>
                    <i className="fa fa-user pr-1"></i> {volunteer.status}
                  </span>
                </div>
                <div className="media-right text-right d-none d-md-block">
                  <span className="text-fade" style={{ marginLeft: "20px" }}>
                    <i className="fa fa-phone pr-1 "></i>
                    {volunteer.phone_number}
                  </span>
                  <span className="text-fade">
                    <i
                      className="fa fa-envelope pr-1"
                      style={{ marginLeft: "20px" }}
                    ></i>{" "}
                    {volunteer.email}
                  </span>
                </div>
              </div>
              <footer className="card-footer flexbox align-items-center">
                <div>
                  <strong>Assigned Crisis: </strong>
                  <span>{volunteer.assigned_crisis_title ?? "None"}</span>
                </div>
                {page === "admin" && (
                  <div className="card-hover-show">
                    <Form method="post" action={`../approve/${volunteer.id}`}>
                      {volunteer.status === "pending approval" && (
                        <button
                          className="btn btn-info"
                          style={{ display: "inline" }}
                        >
                          Approve
                        </button>
                      )}
                    </Form>

                    <button
                      className="btn btn-bold btn-primary"
                      href="#"
                      data-toggle="modal"
                      data-target="#modal-contact"
                      onClick={() => navigate(`../assign/${volunteer.id}`)}
                    >
                      Assign Task
                    </button>
                    {/* <button className="btn btn-bold btn-warning" href="#">
                  Delete
                </button> */}
                  </div>
                )}
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminVCard;
