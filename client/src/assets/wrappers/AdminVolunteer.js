import styled from "styled-components";

const Wrapper = styled.aside`
  body {
    background: #fcfcfc;
  }

  .pr-12 {
    padding-right: 12px !important;
  }

  .mb-20 {
    margin-bottom: 20px !important;
  }

  .b-1 {
    border: 1px solid #ebebeb !important;
  }

  .card {
    border: 0;
    border-radius: 0;
    margin-bottom: 30px;
    transition: 0.5s;
  }

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
  }

  .media {
    padding: 16px 12px;
    transition: background-color 0.2s linear;
    display: flex;
    align-items: flex-start;
  }

  .card-body {
    flex: 1 1 auto;
    padding: 1.25rem;
  }

  .media .avatar {
    flex-shrink: 0;
  }

  .no-radius {
    border-radius: 0 !important;
  }

  .avatar-xl {
    width: 64px;
    height: 64px;
    line-height: 64px;
    font-size: 1.25rem;
  }

  .avatar {
    position: relative;
    display: inline-block;
    width: 36px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    border-radius: 100%;
    background-color: #f5f6f7;
    color: #8b95a5;
    text-transform: uppercase;
  }

  img {
    max-width: 100%;
    vertical-align: middle;
    border-style: none;
  }

  .mb-2 {
    margin-bottom: 0.5rem !important;
  }

  .fs-20 {
    font-size: 20px !important;
  }

  .pr-16 {
    padding-right: 16px !important;
  }

  .ls-1 {
    letter-spacing: 1px !important;
  }

  .fw-300 {
    font-weight: 300 !important;
  }

  .fs-16 {
    font-size: 16px !important;
  }

  .media-body > * {
    margin-bottom: 0;
  }

  small,
  time,
  .small {
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 11px;
    color: #8b95a5;
  }

  .fs-14 {
    font-size: 14px !important;
  }

  .mb-12 {
    margin-bottom: 12px !important;
  }

  .text-fade {
    color: rgba(77, 82, 89, 0.7) !important;
  }

  .card-footer:last-child {
    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
  }

  .card-footer {
    background-color: #fcfdfe;
    border-top: 1px solid rgba(77, 82, 89, 0.07);
    color: #8b95a5;
    padding: 10px 20px;
  }

  .flexbox {
    display: flex;
    justify-content: space-between;
  }

  .align-items-center {
    align-items: center !important;
  }

  .card-hover-show a {
    margin-right: 5px;
  }

  .hover-shadow {
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.11);
  }

  .fs-10 {
    font-size: 10px !important;
  }
`;
export default Wrapper;
