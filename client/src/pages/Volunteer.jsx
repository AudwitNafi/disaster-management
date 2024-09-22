import { VolunteerCard } from "../components";
import Wrapper from "../assets/wrappers/ChartsContainer";

import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";
// const volunteers = [
//   {
//     id: 1,
//     fullName: "John Doe",
//     username: "johndoe123",
//     phone: "123-456-7890",
//     email: "john.doe@example.com",
//     assignedTasks: ["Community Outreach", "Fundraising"],
//   },
//   {
//     id: 2,
//     fullName: "Jane Smith",
//     username: "janesmith456",
//     phone: "987-654-3210",
//     email: "jane.smith@example.com",
//     assignedTasks: ["Data Entry", "Event Planning"],
//   },
// ];

const VolunteersContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const loader = async () => {
  try {
    const data = await customFetch("/volunteers/available");
    const volunteers = data.data;
    // console.log(volunteers);
    return volunteers;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

function Volunteer() {
  const volunteers = useLoaderData();
  console.log(volunteers);
  return (
    <>
      <h1>Volunteers</h1>
      <h3>Here are the list of available volunteers!</h3>
      <VolunteersContainer>
        {volunteers.map((volunteer) => (
          <VolunteerCard key={volunteer.id} volunteer={volunteer} />
        ))}
      </VolunteersContainer>
    </>
  );
}

export default Volunteer;
