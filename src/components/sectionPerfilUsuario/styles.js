import styled from "styled-components";

export const Container = styled.section`
  width: 90vw;
  height: 400px;
  width: 290px;
  button {
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    width: 361px;
  }
`;

export const Header = styled.div`
  background: #403caa;
  height: 104px;
  border-radius: 10px 10px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  img {
    border-radius: 50%;
    width: 64px;
    height: 64px;
  }

  div {
    h3 {
      font-size: 18px;
    }
    span {
      font-size: 12px;
    }
  }
`;

export const Content = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  div {
    background: #f5f5f5;
    width: 85%;
    height: 65px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 10px;
  }

  button {
    margin-bottom: 0;
  }
`;
