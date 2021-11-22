import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

import AppHeader from "../../components/header";
import Button from "../../components/button";
import Input from "../../components/input";

import { LoginPage, LoginForm } from "./styles";

const Login = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    history.push(path);
  };

  const schema = yup.object().shape({
    login: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitFunction = (userInfo) => {
    console.log("logou");
    history.push(`/dashboard/${userInfo.login}`);
  };

  return (
    <LoginPage>
      <AppHeader />
      <LoginForm onSubmit={handleSubmit(submitFunction)}>
        <Input
          placeholder="Login"
          type="text"
          register={register}
          name="login"
          error={errors.login?.message}
        />
        <Input
          placeholder="Senha"
          type="password"
          register={register}
          name="password"
          error={errors.password?.message}
        />
        {/* acrescentar validações da API */}
        <Button type="submit">
          {/* depois trocar pra template string pra conseguir pegar o nome dinamicamente */}
          Logar{" "}
        </Button>
        <p>
          Criar uma página para mostrar suas{" "}
          <span>habilidades, metas e progresso</span>
        </p>
        <Button graySchema onClick={() => handleNavigation("/signup")}>
          Cadastrar
        </Button>
      </LoginForm>
    </LoginPage>
  );
};

export default Login;
