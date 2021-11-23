import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory, Redirect } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

import AppHeader from "../../components/header";
import Button from "../../components/button";
import Input from "../../components/input";
import api from "../../services/api";

import { LoginPage, LoginForm } from "./styles";

const Login = ({ authenticated, setAuthenticated }) => {
  const history = useHistory();

  const handleNavigation = (path) => {
    history.push(path);
  };

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitFunction = (userInfo) => {
    api
      .post("/sessions", userInfo)
      .then((response) => {
        const { token } = response.data;

        localStorage.setItem("@Kenziehub:token", JSON.stringify(token));

        setAuthenticated(true);

        return history.push("/dashboard");
      })
      .catch((err) =>
        toast.error("Email ou senha inválidos. Tente novamente.")
      );
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <LoginPage>
      <div>
        <Toaster />
      </div>
      <AppHeader />
      <LoginForm onSubmit={handleSubmit(submitFunction)}>
        <Input
          placeholder="Email"
          type="text"
          register={register}
          name="email"
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
