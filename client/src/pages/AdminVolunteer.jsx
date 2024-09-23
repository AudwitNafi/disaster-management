import styled from "styled-components";
import Wrapper from "../assets/wrappers/AdminVolunteer";

// import { vc } from "../components";
// import Pagination from "../components/Pagination";
import AdminVCard from "../components/AdminVCard";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";

const VolunteersContainer = styled.div`
  display: flex;
  flex-direction: column;
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

function AdminVolunteer() {
  const { volunteers } = useOutletContext();
  console.log(volunteers);
  // Calculate total pages

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
    <VolunteersContainer>
      {currentVolunteers.map((volunteer) => {
        return <AdminVCard key={volunteer.id} volunteer={volunteer} />;
      })}
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
    </VolunteersContainer>
  );
}

export default AdminVolunteer;
