import * as React from "react";
import { useTable } from "react-table";
import Wrapper from "../assets/wrappers/DonationsTable";
import { useAllDonationsContext } from "../pages/Donation";

function DonationsTable() {
  const { data } = useAllDonationsContext();
  //   const donations = data;
  const donations = [
    { id: 1, amount: "Dud", donor_name: "Shemwell", date: "11/19/2023" },
    { id: 2, amount: "Carver", donor_name: "Asgodby", date: "9/13/2024" },
    { id: 3, amount: "Sonia", donor_name: "Yankishin", date: "4/6/2024" },
    { id: 4, amount: "Zaneta", donor_name: "Arber", date: "12/15/2023" },
    { id: 5, amount: "Elisabeth", donor_name: "O'Reilly", date: "4/18/2024" },
    { id: 6, amount: "Wittie", donor_name: "Lippard", date: "1/20/2024" },
    { id: 7, amount: "Rea", donor_name: "Gauge", date: "3/11/2024" },
    { id: 8, amount: "Ximenez", donor_name: "McKeever", date: "1/17/2024" },
    { id: 9, amount: "Selina", donor_name: "Spawforth", date: "1/23/2024" },
    { id: 10, amount: "Daryle", donor_name: "Yakunchikov", date: "11/24/2023" },
    { id: 11, amount: "Merla", donor_name: "Cardon", date: "7/2/2024" },
    { id: 12, amount: "Brandy", donor_name: "Saxon", date: "1/23/2024" },
    { id: 13, amount: "Will", donor_name: "Kears", date: "11/10/2023" },
    { id: 14, amount: "Mohammed", donor_name: "Eyden", date: "12/23/2023" },
    { id: 15, amount: "Lulita", donor_name: "Scarsbrooke", date: "10/12/2023" },
    { id: 16, amount: "Nina", donor_name: "Sigmund", date: "6/27/2024" },
    { id: 17, amount: "Odele", donor_name: "Vanni", date: "7/8/2024" },
    { id: 18, amount: "Jacob", donor_name: "Cully", date: "4/28/2024" },
    { id: 19, amount: "Ranee", donor_name: "Timbs", date: "4/18/2024" },
    { id: 20, amount: "Johnathan", donor_name: "Thompson", date: "9/19/2024" },
    { id: 21, amount: "Lianne", donor_name: "Probey", date: "6/21/2024" },
    { id: 22, amount: "Vasily", donor_name: "Cubbini", date: "6/17/2024" },
    { id: 23, amount: "Kip", donor_name: "Timmons", date: "4/2/2024" },
    { id: 24, amount: "Josephine", donor_name: "Carlan", date: "9/25/2023" },
    { id: 25, amount: "Pavia", donor_name: "Constantine", date: "5/19/2024" },
    { id: 26, amount: "Alvira", donor_name: "Elphey", date: "10/8/2023" },
    { id: 27, amount: "Bellina", donor_name: "Rosoman", date: "6/22/2024" },
    { id: 28, amount: "Heriberto", donor_name: "Fletham", date: "3/17/2024" },
    { id: 29, amount: "Kimbra", donor_name: "Naptine", date: "4/17/2024" },
    { id: 30, amount: "Reine", donor_name: "Herkess", date: "6/27/2024" },
    { id: 31, amount: "Lynelle", donor_name: "Kennally", date: "9/10/2024" },
    { id: 32, amount: "Xerxes", donor_name: "Gaskall", date: "9/23/2023" },
    {
      id: 33,
      amount: "Giralda",
      donor_name: "McDermott-Row",
      date: "11/17/2023",
    },
    { id: 34, amount: "Jeremiah", donor_name: "Pedro", date: "2/25/2024" },
    { id: 35, amount: "Karyl", donor_name: "Notman", date: "8/5/2024" },
    { id: 36, amount: "Meris", donor_name: "Peizer", date: "5/18/2024" },
    { id: 37, amount: "Mario", donor_name: "Carnell", date: "9/8/2024" },
    { id: 38, amount: "Tommie", donor_name: "Nicklinson", date: "3/29/2024" },
    { id: 39, amount: "Marina", donor_name: "Warder", date: "8/16/2024" },
    { id: 40, amount: "Toddy", donor_name: "Keays", date: "8/26/2024" },
    { id: 41, amount: "Tod", donor_name: "Ingram", date: "12/16/2023" },
    { id: 42, amount: "Bret", donor_name: "Cartmael", date: "4/13/2024" },
    { id: 43, amount: "Amandi", donor_name: "Rigard", date: "3/23/2024" },
    { id: 44, amount: "Daphne", donor_name: "Whayman", date: "2/26/2024" },
    { id: 45, amount: "Kendra", donor_name: "Brandli", date: "5/31/2024" },
    { id: 46, amount: "Thelma", donor_name: "Malpas", date: "6/6/2024" },
    { id: 47, amount: "Tyne", donor_name: "Jowett", date: "4/24/2024" },
    { id: 48, amount: "Gale", donor_name: "Blincow", date: "9/20/2024" },
    { id: 49, amount: "Reid", donor_name: "Belk", date: "11/15/2023" },
    { id: 50, amount: "Verney", donor_name: "Ruddin", date: "11/23/2023" },
    { id: 51, amount: "Constantine", donor_name: "Uppett", date: "9/11/2024" },
    { id: 52, amount: "Gilemette", donor_name: "Trowsdale", date: "4/5/2024" },
    { id: 53, amount: "Renae", donor_name: "Boshere", date: "3/10/2024" },
    { id: 54, amount: "Rich", donor_name: "Woodyer", date: "10/21/2023" },
    { id: 55, amount: "Adore", donor_name: "Usher", date: "12/4/2023" },
    {
      id: 56,
      amount: "Charmion",
      donor_name: "Pellamonuten",
      date: "11/5/2023",
    },
    { id: 57, amount: "Fayina", donor_name: "Lubomirski", date: "9/15/2024" },
    { id: 58, amount: "Banky", donor_name: "Godfrey", date: "12/9/2023" },
    { id: 59, amount: "Marian", donor_name: "Khidr", date: "9/6/2024" },
    { id: 60, amount: "Kay", donor_name: "Hatje", date: "6/3/2024" },
    { id: 61, amount: "Bjorn", donor_name: "Behning", date: "4/6/2024" },
    { id: 62, amount: "Aurora", donor_name: "Moller", date: "4/1/2024" },
    { id: 63, amount: "Cyrille", donor_name: "Ludwig", date: "7/21/2024" },
    { id: 64, amount: "Pierrette", donor_name: "Monks", date: "2/14/2024" },
    { id: 65, amount: "Devonne", donor_name: "Jago", date: "6/5/2024" },
    { id: 66, amount: "Beverly", donor_name: "Redwall", date: "11/14/2023" },
    { id: 67, amount: "Morly", donor_name: "Upchurch", date: "9/8/2024" },
    { id: 68, amount: "Lenora", donor_name: "Reese", date: "11/5/2023" },
    { id: 69, amount: "Clare", donor_name: "Alleyn", date: "8/14/2024" },
    { id: 70, amount: "Sarajane", donor_name: "Heinecke", date: "9/2/2024" },
    { id: 71, amount: "Marten", donor_name: "Ceschi", date: "1/16/2024" },
    { id: 72, amount: "Wildon", donor_name: "Bielfelt", date: "9/12/2024" },
    { id: 73, amount: "Allistir", donor_name: "Jiroudek", date: "2/5/2024" },
    { id: 74, amount: "Robby", donor_name: "Finlry", date: "1/16/2024" },
    { id: 75, amount: "Carlin", donor_name: "Mugford", date: "8/16/2024" },
    { id: 76, amount: "Cori", donor_name: "Reade", date: "8/2/2024" },
    { id: 77, amount: "Nappie", donor_name: "Tradewell", date: "11/14/2023" },
    { id: 78, amount: "Laurella", donor_name: "Rowley", date: "12/1/2023" },
    { id: 79, amount: "Billie", donor_name: "Bushen", date: "9/21/2023" },
    { id: 80, amount: "Morten", donor_name: "Bew", date: "6/26/2024" },
    { id: 81, amount: "Fredek", donor_name: "Tunsley", date: "6/4/2024" },
    { id: 82, amount: "Phineas", donor_name: "Lainton", date: "7/3/2024" },
    { id: 83, amount: "Codie", donor_name: "Rosenkranc", date: "4/24/2024" },
    { id: 84, amount: "Farra", donor_name: "Ellam", date: "7/10/2024" },
    { id: 85, amount: "Vin", donor_name: "Craigg", date: "8/19/2024" },
    { id: 86, amount: "Corty", donor_name: "Hirschmann", date: "9/16/2024" },
    { id: 87, amount: "Aylmer", donor_name: "Kupec", date: "10/14/2023" },
    { id: 88, amount: "Nertie", donor_name: "Vest", date: "7/25/2024" },
    { id: 89, amount: "Meredithe", donor_name: "Creggan", date: "2/28/2024" },
    { id: 90, amount: "Dotty", donor_name: "Reames", date: "8/18/2024" },
    { id: 91, amount: "Neron", donor_name: "Broadnicke", date: "1/10/2024" },
    { id: 92, amount: "Amil", donor_name: "Rockey", date: "2/24/2024" },
    { id: 93, amount: "Regan", donor_name: "Enefer", date: "9/10/2024" },
    { id: 94, amount: "Giustina", donor_name: "Richie", date: "2/15/2024" },
    { id: 95, amount: "Claudine", donor_name: "Pobjay", date: "3/31/2024" },
    { id: 96, amount: "Dayle", donor_name: "Grimster", date: "2/21/2024" },
    { id: 97, amount: "Annecorinne", donor_name: "Ellson", date: "9/22/2023" },
    { id: 98, amount: "Pail", donor_name: "Canty", date: "12/4/2023" },
    { id: 99, amount: "Ibrahim", donor_name: "Sharpus", date: "6/6/2024" },
    { id: 100, amount: "Oliver", donor_name: "Menendez", date: "12/10/2023" },
  ];
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
                  <td>{donation.date}</td>
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
