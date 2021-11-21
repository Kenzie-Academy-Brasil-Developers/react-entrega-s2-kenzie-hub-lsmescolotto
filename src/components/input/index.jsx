import { Container, AppInput } from "./styles";

const Input = ({ placeholder, type, ...rest }) => {
  return (
    <Container>
      <AppInput placeholder={placeholder} type={type} {...rest} />
    </Container>
  );
};

export default Input;
