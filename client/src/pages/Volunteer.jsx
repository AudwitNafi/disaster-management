import { VolunteerCard } from "../components";
import Wrapper from "../assets/wrappers/ChartsContainer";

import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
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
  flex-wrap: wrap;
  gap: 20px;
`;
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`;

const PageButton = styled.button`
  padding: 8px 12px;
  background-color: ${(props) => (props.active ? "#2980b9" : "#ecf0f1")};
  color: ${(props) => (props.active ? "#ffffff" : "#2c3e50")};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
    color: #ffffff;
  }

  &:disabled {
    background-color: #bdc3c7;
    color: #ffffff;
    cursor: not-allowed;
  }
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
  const [currentPage, setCurrentPage] = useState(1);
  const volunteersPerPage = 6;

  const totalPages = Math.ceil(volunteers.length / volunteersPerPage);
  // Handle page change
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  // Get current volunteers
  const indexOfLastVolunteer = currentPage * volunteersPerPage;
  const indexOfFirstVolunteer = indexOfLastVolunteer - volunteersPerPage;
  const currentVolunteers = volunteers.slice(
    indexOfFirstVolunteer,
    indexOfLastVolunteer
  );
  return (
    <>
      <h1>Volunteers</h1>
      <h3>Here are the list of available volunteers!</h3>
      <VolunteersContainer>
        {currentVolunteers.map((volunteer) => (
          <VolunteerCard key={volunteer.id} volunteer={volunteer} />
        ))}
      </VolunteersContainer>
      <PaginationContainer>
        <PageButton onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </PageButton>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (number) => (
            <PageButton
              key={number}
              onClick={() => goToPage(number)}
              active={currentPage === number}
            >
              {number}
            </PageButton>
          )
        )}

        <PageButton
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </PageButton>
      </PaginationContainer>
    </>
  );
}

export default Volunteer;
