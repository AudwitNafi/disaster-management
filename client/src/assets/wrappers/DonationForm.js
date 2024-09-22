import styled from "styled-components";

const Wrapper = styled.section`
  .donation-form-container {
    max-width: 500px;
    margin: 40px auto;
    padding: 25px;
    background-color: #ffffff;
    border: 1px solid #dddddd;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .donation-form-container h2 {
    text-align: center;
    color: #333333;
    margin-bottom: 20px;
  }

  .success-message {
    background-color: #d4edda;
    color: #155724;
    padding: 12px 20px;
    border: 1px solid #c3e6cb;
    border-radius: 4px;
    margin-bottom: 20px;
    text-align: center;
  }

  .error-message {
    background-color: #f8d7da;
    color: #721c24;
    padding: 12px 20px;
    border: 1px solid #f5c6cb;
    border-radius: 4px;
    margin-bottom: 20px;
  }

  .donation-form {
    display: flex;
    flex-direction: column;
  }

  .form-group {
    margin-bottom: 18px;
  }

  .form-group label {
    display: block;
    margin-bottom: 6px;
    font-weight: 600;
    color: #555555;
  }

  .required {
    color: red;
    margin-left: 2px;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #cccccc;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    border-color: #007bff;
    outline: none;
  }

  .submit-button {
    padding: 12px 20px;
    background-color: #28a745;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .submit-button:disabled {
    background-color: #94d3a2;
    cursor: not-allowed;
  }

  .submit-button:hover:not(:disabled) {
    background-color: #218838;
  }

  .submit-button:active:not(:disabled) {
    background-color: #1e7e34;
  }

  .success-message,
  .error-message {
    border-radius: 4px;
  }

  @media (max-width: 600px) {
    .donation-form-container {
      margin: 20px;
      padding: 20px;
    }

    .submit-button {
      font-size: 1rem;
      padding: 10px 16px;
    }
  }
`;

export default Wrapper;
