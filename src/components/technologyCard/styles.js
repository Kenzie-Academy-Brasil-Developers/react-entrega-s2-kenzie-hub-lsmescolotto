import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70px;
  width: 90%;
  border-right: solid 4px #f5f5f5;
  margin-top: 30px;

  &:hover {
    border-right: solid 5px #11995e;
  }

  button {
    height: 30px;
    width: 50px;
    font-size: 12px;
    background: #ffffff;
    color: #999999;
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    width: 80%;
    margin-top: 15px;
    margin-bottom: 15px;
    justify-content: space-between;

    button {
      height: 50px;
      width: 70px;
    }
  }
`;

export const SvgContainer = styled.div`
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 71px;
  height: 77px;
  border-radius: 5px;

  svg {
    color: #11995e;
    width: 24px;
    height: 24px;
  }

  &:hover {
    background: #11995e;

    svg {
      color: #ffffff;
    }
  }
`;

export const Content = styled.div`
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background: #ffffff;

  span {
    height: 25px;
    width: 70px;
    background: #f5f5f5;
    color: #11995e;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
