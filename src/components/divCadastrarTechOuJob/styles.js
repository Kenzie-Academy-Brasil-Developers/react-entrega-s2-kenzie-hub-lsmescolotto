import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  z-index: 1;
  left: 10px;
  top: 60px;
  background-color: #f5f5f5;
  width: 275px;
  height: 250px;
  border-radius: 15px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 210px;

    div {
      margin-bottom: 0;

      input {
        height: 40px;
        margin-bottom: 0;
        font-size: 14px;
        background: #fff;
      }
    }

    span {
      color: red;
    }

    button {
      margin-bottom: 0;
      height: 46px;
      font-size: 14px;
    }
  }

  @media screen and (min-width: 768px) {
    left: 95px;
    top: 100px;
    border: solid 2px #999;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;

  h3 {
    margin-left: 15px;
  }

  button {
    border-radius: 50%;
    padding: 3px 5px 7px 5px;
    width: 25px;
    height: 25px;
    margin-bottom: 0;
    margin-right: 5px;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    margin-bottom: 10px;
  }

  select {
    border: none;
    border-radius: 5px;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #403caa;
    height: 30px;
    width: 125px;
    padding: 7px;
    background: #fff;
  }

  option {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 14px;
    color: #403caa;
  }
`;
