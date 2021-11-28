import { GrCodeSandbox } from "react-icons/gr";

import Button from "../button";

import { Container, Content, SvgContainer } from "./styles";

const Technology = ({ title, status, onClick }) => {
  return (
    <Container>
      <SvgContainer>
        <GrCodeSandbox />
      </SvgContainer>
      <Content>
        <h3>{title}</h3>
        <span>{status}</span>
      </Content>
      <Button onClick={onClick}>Excluir</Button>
    </Container>
  );
};

export default Technology;
