import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory, Redirect } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

import AppHeader from "../../components/header";
import Button from "../../components/button";
import Input from "../../components/input";
import api from "../../services/api";

import { SignUpPage, SignUpForm } from "./styles";

const SignUp = ({ authenticated }) => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        "Somente letras aqui"
      ),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
    // ver como vai ser a validação do input select
    password: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
        "A sua senha deve ter pelo menos: 6 dígitos, um número, letras maiúsculas e minúsculas e um caracter especial"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitFunction = ({
    name,
    email,
    bio,
    contact,
    course_module,
    password,
  }) => {
    const user = { name, email, bio, contact, course_module, password };
    api
      .post("/users", user)
      .then((_) => {
        toast.success("Conta criada com sucesso!");
        // return history.push("/");
      })
      .catch((err) => toast.error("Erro ao criar a conta. Tente outro email."));
    // setRegistered(true);
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <SignUpPage>
      <div>
        <Toaster />
      </div>
      <AppHeader />
      <SignUpForm onSubmit={handleSubmit(submitFunction)}>
        <Input
          placeholder="Nome"
          type="text"
          register={register}
          name="name"
          error={errors.name?.message}
        />
        <Input
          placeholder="Email"
          type="email"
          register={register}
          name="email"
          error={errors.email?.message}
        />
        <Input
          placeholder="Bio"
          type="text"
          register={register}
          name="bio"
          error={errors.bio?.message}
        />
        <Input
          placeholder="Contato"
          type="text"
          register={register}
          name="contact"
          error={errors.contact?.message}
        />
        <div>
          <label>Selecionar módulo:</label>
          <select {...register("course_module")}>
            <option></option>
            <option>Módulo 1</option>
            <option>Módulo 2</option>
            <option>Módulo 3</option>
            <option>Módulo 4</option>
          </select>
          <span>{errors.course_module?.message}</span>
        </div>

        <Input
          placeholder="Senha"
          type="password"
          register={register}
          name="password"
          error={errors.password?.message}
        />
        <Input
          placeholder="Confirmar senha"
          type="password"
          register={register}
          name="confirmPassword"
          error={errors.confirmPassword?.message}
        />

        <Button type="submit">Cadastrar</Button>
      </SignUpForm>
    </SignUpPage>
  );
};

export default SignUp;
