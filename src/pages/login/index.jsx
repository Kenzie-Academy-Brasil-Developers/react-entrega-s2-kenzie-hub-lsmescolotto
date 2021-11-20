import AppHeader from "../../components/header";
import Button from "../../components/button";

import { AppForm } from "./styles";

const Login = () => {
  return (
    <main>
      <AppHeader />
      <AppForm>
        <Button>Logar</Button>
        <Button graySchema>Cadastrar</Button>
      </AppForm>
    </main>
  );
};

export default Login;
