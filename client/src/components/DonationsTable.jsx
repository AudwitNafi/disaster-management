import * as React from "react";
import { useTable } from "react-table";
import Wrapper from "../assets/wrappers/DonationsTable";
import { useAllDonationsContext } from "../pages/Donation";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import advancedFormat from "dayjs/plugin/advancedFormat";
import day from "dayjs";
day.extend(advancedFormat);
// const VISIBLE_FIELDS = ["sl.no", "amount", "donor_name", "date"];
function DonationsTable() {
  const { data, sum } = useAllDonationsContext();
  console.log(data);
  const donations = data;

  // console.log(donations);
  return (
    <Wrapper>
      <div className="donations-table__container">
        <h2 className="donations-table__title">All-Time Donations</h2>
        <table className="donations-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Amount ($)</th>
              <th>Donor Name</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {donations.length > 0 ? (
              donations.map((donation) => (
                <tr key={donation.id}>
                  <td>{donation.id}</td>
                  <td>{donation.amount}</td>
                  <td>{donation.donor_name}</td>
                  <td>{day(donation.date).format("MMM Do, YYYY")}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="donations-table__no-data">
                  No donations found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
}

export default DonationsTable;
