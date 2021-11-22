import { appendErrors } from "react-hook-form";
import { Container, AppInput } from "./styles";

const Input = ({ placeholder, type, register, name, error, ...rest }) => {
  return (
    <Container>
      <AppInput
        placeholder={placeholder}
        type={type}
        {...register(name)}
        {...rest}
      />
      <span>{error}</span>
    </Container>
  );
};

export default Input;
