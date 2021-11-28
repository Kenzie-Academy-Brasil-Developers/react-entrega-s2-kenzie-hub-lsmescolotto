import styled from "styled-components";

export const AppDashboard = styled.main`
  min-height: 100vh;

  header {
    height: 80px;
    box-shadow: 10px 10px 10px 10px #f5f5f5;
  }

  @media screen and (min-width: 768px) {
    background: #f5f5f5;

    header {
      margin-top: 20px;
      background: #ffffff;
      width: 90%;
      border-radius: 8px;
      box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    }
  }
`;
export const SectionsContainer = styled.div`
  min-height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (min-width: 768px) {
    width: 90vw;
    justify-content: space-around;

    section {
      background: #ffffff;
      border-radius: 5px;
    }
  }

  @media screen and (min-width: 960px) {
    flex-direction: row;
  }
`;
