import styled from "styled-components";

const Wrapper = styled.section`
  .crisis-container {
    width: 700px;
    height: 650px;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-2);
    padding: 40px 20px;
    gap: 10px;
  }
  h3 {
    margin: 20px;
  }
`;
export default Wrapper;
