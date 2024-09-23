import styled from "styled-components";

const Wrapper = styled.aside`
  h5 {
    text-align: center;
    margin: 0.5rem;
  }
  .donations-table__container {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto; /* Center the table */
    padding: 20px;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .donations-table__title {
    text-align: center;
    margin-bottom: 20px;
    color: #004d99; /* Dark Blue */
  }

  .donations-table {
    width: 100%;
    border-collapse: collapse;
  }

  .donations-table th,
  .donations-table td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #dddddd;
    cursor: pointer;
  }

  .donations-table th {
    background-color: #f2f2f2;
    color: #333333;
  }

  .donations-table tr:hover {
    background-color: #f9f9f9;
  }

  .donations-table__no-data {
    text-align: center;
    padding: 20px;
    color: #777777;
  }

  .donations-table__message {
    text-align: center;
    font-size: 18px;
    color: #555555;
  }

  .donations-table__error {
    color: #ff3333; /* Red */
  }
`;

export default Wrapper;
