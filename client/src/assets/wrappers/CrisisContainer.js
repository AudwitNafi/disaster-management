import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  .crisis {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }
  @media (min-width: 1120px) {
    .crisis {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
`;
export default Wrapper;

// display: grid;
// grid-template-columns: 1fr;
// row-gap: 2rem;
