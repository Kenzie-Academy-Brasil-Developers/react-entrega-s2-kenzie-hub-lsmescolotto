import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin-bottom: 22px;
  span {
    text-align: left;
    color: red;
    margin: 5px 0 0 10px;
  }
`;

export const AppInput = styled.input`
  background: #f5f5f5;
  border: solid 2px #f5f5f5;
  border-radius: 8px;
  width: 93%;
  height: 54px;
  font-size: 16px;
  padding-left: 1rem;

  :focus {
    background: #ffffff;
    border-color: #000000;
  }
`;
