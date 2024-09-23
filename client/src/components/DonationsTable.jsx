// import * as React from "react";
import { useTable } from "react-table";
import Wrapper from "../assets/wrappers/DonationsTable";
import { useAllDonationsContext } from "../pages/Donation";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import advancedFormat from "dayjs/plugin/advancedFormat";
import day from "dayjs";
import { useState } from "react";
import styled from "styled-components";
day.extend(advancedFormat);

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

function DonationsTable() {
  const { data } = useAllDonationsContext();
  // console.log(data);
  const donations = data;

  const [currentPage, setCurrentPage] = useState(1);
  const volunteersPerPage = 6;

  const totalPages = Math.ceil(donations.length / volunteersPerPage);
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
  const currentDonations = donations.slice(
    indexOfFirstVolunteer,
    indexOfLastVolunteer
  );

  const [donationsData, setDonationsData] = useState(currentDonations);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  // Function to handle sorting when a column header is clicked
  const onSort = (columnKey) => {
    let direction = "ascending";

    // Toggle sort direction if the same column is clicked again
    if (sortConfig.key === columnKey && sortConfig.direction === "ascending") {
      direction = "descending";
    }

    // Copy and sort the data array
    const sortedData = [...data].sort((a, b) => {
      const aValue = a[columnKey];
      const bValue = b[columnKey];

      // Determine the data type of the column
      const isNumber = typeof aValue === "number" && typeof bValue === "number";

      if (isNumber) {
        // Numeric comparison
        return direction === "ascending" ? aValue - bValue : bValue - aValue;
      } else {
        // String comparison using localeCompare for proper alphabetical sorting
        const comparison = String(aValue).localeCompare(
          String(bValue),
          undefined,
          {
            numeric: true,
            sensitivity: "base",
          }
        );
        return direction === "ascending" ? comparison : -comparison;
      }
    });

    setSortConfig({ key: columnKey, direction });
    setDonationsData(sortedData);
  };

  return (
    <Wrapper>
      <div className="donations-table__container">
        <h2 className="donations-table__title">All-Time Donations</h2>
        <h5>Click on The Column Headers to Sort Them</h5>
        <table className="donations-table">
          <thead>
            <tr>
              {/* Column headers with onClick handlers for sorting */}
              <th onClick={() => onSort("id")}>Name</th>
              <th onClick={() => onSort("amount")}>Age</th>
              <th onClick={() => onSort("donor_name")}>Country</th>
              <th onClick={() => onSort("date")}>Country</th>
            </tr>
          </thead>
          <tbody>
            {/* Render table rows */}
            {donationsData.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.amount}</td>
                <td>{item.donor_name}</td>
                <td>{day(item.date).format("MMM Do, YYYY")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
    </Wrapper>
  );

  // console.log(donations);
  // return (
  //   <Wrapper>
  //     <div className="donations-table__container">
  //       <h2 className="donations-table__title">All-Time Donations</h2>
  //       <table className="donations-table">
  //         <thead>
  //           <tr>
  //             <th>ID</th>
  //             <th>Amount ($)</th>
  //             <th>Donor Name</th>
  //             <th>Date</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {donations.length > 0 ? (
  //             donations.map((donation) => (
  //               <tr key={donation.id}>
  //                 <td>{donation.id}</td>
  //                 <td>{donation.amount}</td>
  //                 <td>{donation.donor_name}</td>
  //                 <td>{day(donation.date).format("MMM Do, YYYY")}</td>
  //               </tr>
  //             ))
  //           ) : (
  //             <tr>
  //               <td colSpan="4" className="donations-table__no-data">
  //                 No donations found.
  //               </td>
  //             </tr>
  //           )}
  //         </tbody>
  //       </table>
  //     </div>
  //   </Wrapper>
  // );
}

export default DonationsTable;
