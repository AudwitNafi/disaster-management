import styled from "styled-components";

const Wrapper = styled.aside`
  .volunteer-card {
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    max-width: 350px;
    margin: 20px;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .volunteer-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }

  .card-header {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  .user-icon {
    font-size: 2rem;
    color: #4a90e2;
    margin-right: 10px;
  }

  .full-name {
    font-size: 1.5rem;
    color: #333333;
  }

  .card-body p {
    margin: 8px 0;
    color: #555555;
    display: flex;
    align-items: center;
  }

  .card-body .icon {
    margin-right: 8px;
    color: #4a90e2;
  }

  .username {
    font-weight: bold;
  }

  .tasks {
    margin-top: 10px;
  }

  .tasks-icon {
    margin-right: 8px;
    color: #f5a623;
  }

  .tasks ul {
    list-style-type: disc;
    margin-left: 24px;
    margin-top: 5px;
    color: #555555;
  }

  @media (max-width: 400px) {
    .volunteer-card {
      max-width: 100%;
      margin: 10px;
      padding: 15px;
    }

    .full-name {
      font-size: 1.3rem;
    }

    .user-icon {
      font-size: 1.5rem;
    }
  }
`;
export default Wrapper;
