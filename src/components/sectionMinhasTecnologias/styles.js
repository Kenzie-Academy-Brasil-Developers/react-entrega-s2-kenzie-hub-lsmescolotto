import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  min-height: 120px;
  margin: 40px 0 60px 0;
  width: 290px;

  @media screen and (min-width: 768px) {
    padding-bottom: 30px;
    width: 467px;
  }

  @media screen and (min-width: 960px) {
    margin: 0;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;

  h3 {
    font-size: 16px;
  }

  button {
    font-size: 28px;
    background: #11995e;
    width: 43px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    height: 70px;

    h3 {
      margin-left: 25px;
    }

    button {
      margin-right: 25px;
    }
  }

  @media screen and (min-width: 960px) {
  }
`;

export const TechsContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
