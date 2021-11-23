import styled from "styled-components";

export const SignUpPage = styled.main`
  header {
    height: 140px;
  }
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90vw;
  height: auto;
  border: solid 2px #f5f5f5;
  padding-top: 30px;

  div {
    margin-bottom: 22px;

    label {
      margin-right: 15px;
    }

    select {
      margin-left: 15px;
      border: none;
      border-radius: 5px;
      font-family: "Inter", sans-serif;
      font-weight: 600;
      font-size: 14px;
      color: #403caa;
      height: 40px;
      width: 100px;
      padding: 7px;
      background: #f5f5f5;
    }

    span {
      color: red;
      display: block;
    }
  }

  button {
    margin-bottom: 30px;
  }

  @media screen and (min-width: 491px) {
    input {
      width: 95%;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 959px) {
    width: 60vw;
  }

  @media screen and (min-width: 960px) {
    width: 40vw;

    input {
      /* width: 94%; */
    }
  }
`;
