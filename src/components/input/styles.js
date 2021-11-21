import styled from "styled-components";

export const Container = styled.div`
  width: 86%;
  margin-bottom: 22px;
  span {
    //msg de erro
  }
`;

export const AppInput = styled.input`
  background: #f5f5f5;
  border: solid 2px #f5f5f5;
  border-radius: 8px;
  width: 100%;
  height: 54px;
  font-size: 16px;
  padding-left: 15px;

  :focus {
    background: #ffffff;
    border-color: #000000;
  }
`;
