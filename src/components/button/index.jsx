import AppButton from "./style";

const Button = ({ children, graySchema, ...rest }) => {
  return (
    <AppButton graySchema={graySchema} type="button" {...rest}>
      {children}
    </AppButton>
  );
};

export default Button;
