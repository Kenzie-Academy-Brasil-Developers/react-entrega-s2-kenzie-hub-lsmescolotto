import AppHeader from "../../components/header";
import Button from "../../components/button";
import Input from "../../components/input";

import { LoginForm } from "./styles";

const Login = () => {
  return (
    <main>
      <AppHeader />
      <LoginForm>
        <Input placeholder="Login" type="text" />
        <Input placeholder="Senha" type="password" />
        <Button>Logar</Button>
        <p>
          Criar uma página para mostrar suas{" "}
          <span>habilidades, metas e progresso</span>
        </p>
        <Button graySchema>Cadastrar</Button>
      </LoginForm>
    </main>
  );
};

export default Login;
