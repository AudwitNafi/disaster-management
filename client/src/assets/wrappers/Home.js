import styled from "styled-components";

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .funds {
    width: 90%;
    margin: 0 auto;
    padding: 2rem 0;
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    border-bottom: 5px solid green;
  }
  .page {
    display: flex;
    gap: 20px;
    justify-content: center;
    padding: 2rem;
  }

  .bdt {
    font-size: 2rem;
  }

  .title {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    text-align: center;
    margin-top: 0.5rem;
    font-size: 1.25rem;
  }

  .crisis-volunteer-container {
    display: flex;
    justify-content: space-around;
  }
  .cv-container {
    width: 700px;
    height: 650px;
    margin-top: 50px;
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-2);
  }

  h3 {
    text-align: center;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`;
export default Wrapper;
