import styled from "styled-components";

const Wrapper = styled.aside`
  .crisis-card {
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    display: grid;
    grid-template-rows: 1fr auto;
    width: 100%;
    box-shadow: var(--shadow-2);
    padding: 20px;
    paddding-right: 30px;
  }

  .crisis-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }
  h5 {
    margin-bottom: 0.5rem;
  }

  .info {
    display: flex;
    justify-content: space-between;
  }
  .crisis-card__status {
    border-radius: var(--border-radius);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    text-align: center;
    width: 100px;
    height: 30px;
    display: grid;
    align-items: center;
    background: #fef3c7;
    color: #f59e0b;
  }
  .crisis-card__status--approved {
    border-radius: var(--border-radius);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    text-align: center;
    width: 100px;
    height: 30px;
    display: grid;
    align-items: center;
    background-color: #6cbec7;
    color: var(--grey-500);
  }
  .crisis-card__status--resolved {
    border-radius: var(--border-radius);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    text-align: center;
    width: 100px;
    height: 30px;
    display: grid;
    align-items: center;
    background-color: #88d66c;
    color: var(--grey-500);
  }
  .crisis-card__severity {
    font-weight: bold;
  }
  .critical {
    color: #dc3545; /* Red */
  }

  .high {
    color: orange;
  }

  .medium {
    color: #ffc107; /* Yellow */
  }

  .low {
    color: #28a745; /* Green */
  }
`;
export default Wrapper;

// background: var(--background-secondary-color);
//   border-radius: var(--border-radius);
//   display: grid;
//   grid-template-rows: 1fr auto;
//   width: 400px;
//   box-shadow: var(--shadow-2);
//   header {
//     padding: 1rem 1.5rem;
//     border-bottom: 1px solid var(--grey-100);
//     display: grid;
//     grid-template-columns: auto 1fr;
//     align-items: center;
//   }
//   img {
//     width: 100%;
//   }

//   .main-icon {
//     width: 60px;
//     height: 60px;
//     display: grid;
//     place-items: center;
//     background: var(--primary-500);
//     border-radius: var(--border-radius);
//     font-size: 1.5rem;
//     font-weight: 700;
//     text-transform: uppercase;
//     color: var(--white);
//     margin-right: 2rem;
//   }
//   .info {
//     h5 {
//       margin-bottom: 0.5rem;
//     }
//     p {
//       margin: 0;
//       text-transform: capitalize;
//       letter-spacing: var(--letter-spacing);
//       color: var(--text-secondary-color);
//     }
//   }
//   .info {
//     width: 100%;
//     height: 100%;
//     margin-top: 1rem;
//     margin-left: 0.8rem;
//   }
//   .content {
//     padding: 1rem 1.5rem;
//   }
//   .content-center {
//     display: grid;
//     margin-top: 1rem;
//     margin-bottom: 1.5rem;
//     grid-template-columns: 1fr;
//     row-gap: 1.5rem;
//     align-items: center;
//     @media (min-width: 576px) {
//       grid-template-columns: 1fr 1fr;
//     }
//     padding: 10px;
//   }
//   .status {
//     border-radius: var(--border-radius);
//     text-transform: capitalize;
//     letter-spacing: var(--letter-spacing);
//     text-align: center;
//     width: 100px;
//     height: 30px;
//     display: grid;
//     align-items: center;
//   }
//   .approved {
//     border-radius: var(--border-radius);
//     text-transform: capitalize;
//     letter-spacing: var(--letter-spacing);
//     text-align: center;
//     width: 100px;
//     height: 30px;
//     display: grid;
//     align-items: center;
//     background-color: cyan;
//   }
//   .resolved {
//     border-radius: var(--border-radius);
//     text-transform: capitalize;
//     letter-spacing: var(--letter-spacing);
//     text-align: center;
//     width: 100px;
//     height: 30px;
//     display: grid;
//     align-items: center;
//     background-color: #88d66c;
//   }
//   .actions {
//     margin-top: 1rem;
//     display: flex;
//     align-items: center;
//   }
//   .edit-btn,
//   .delete-btn {
//     height: 30px;
//     font-size: 0.85rem;
//     display: flex;
//     align-items: center;
//     margin-bottom: 1rem;
//   }
//   .edit-btn {
//     margin-right: 0.5rem;
//     margin-left: 1rem;
//   }
//   .description {
//     margin-left: 0.8rem;
//     margin-top: 20px;
//   }
// `;
