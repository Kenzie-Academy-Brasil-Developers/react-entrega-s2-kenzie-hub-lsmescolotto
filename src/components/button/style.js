import styled from "styled-components";

const AppButton = styled.button`
  background: ${(props) => (props.graySchema ? "#F5F5F5" : "#403CAA")};
  color: ${(props) => (props.graySchema ? "#999999" : "#FFFFFF")};
  border: none;
  border-radius: 8px;
  width: 90%;
  height: 60px;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 22px;
  padding: 0;
`;

export default AppButton;
