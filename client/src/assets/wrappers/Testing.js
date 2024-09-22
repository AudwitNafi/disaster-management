import styled from "styled-components";

const Wrapper = styled.main`
  .admin-container {
    display: flex;
    height: 100vh; /* Full viewport height */
  }

  .admin-sidebar {
    width: 200px;
    background-color: #2c3e50;
    padding: 20px;
  }

  .admin-sidebar ul {
    list-style: none;
    padding: 0;
  }

  .admin-sidebar li {
    margin-bottom: 15px;
  }

  .admin-sidebar a {
    color: #ecf0f1;
    text-decoration: none;
    font-weight: bold;
  }

  .admin-sidebar a.active {
    color: #3498db;
  }

  .admin-main {
    flex: 1;
    padding: 20px;
    background-color: #ecf0f1;
  }
`;
export default Wrapper;
