import styled from "styled-components";

const Header = styled.header`
  height: 170px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 32px;
    font-weight: 700;

    span {
      font-size: 24px;
      width: 46px;
      height: 30px;
      background-color: #403caa;
      color: #fff;
      border-radius: 5px;
      padding: 5px;
    }
  }
`;

export default Header;
