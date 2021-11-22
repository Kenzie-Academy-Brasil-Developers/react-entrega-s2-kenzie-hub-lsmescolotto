import styled from "styled-components";

export const LoginPage = styled.main`
  header {
    height: 140px;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90vw;
  height: 400px;
  border: solid 2px #f5f5f5;
  p {
    color: #999999;
    margin: 22px 0;
    max-width: 90%;

    span {
      color: #333333;
    }
  }

  button {
    margin-bottom: 0;
  }

  @media screen and (min-width: 491px) {
    input {
      width: 95%;
    }
  }

  @media screen and (min-width: 491px) {
    input {
      width: 96%;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 959px) {
    width: 60vw;

    input {
      width: 95%;
    }
  }

  @media screen and (min-width: 960px) {
    width: 40vw;

    input {
      width: 94%;
    }
  }

  @media screen and (min-width: 960px) {
    input {
      width: 95%;
    }
  } ;
`;
