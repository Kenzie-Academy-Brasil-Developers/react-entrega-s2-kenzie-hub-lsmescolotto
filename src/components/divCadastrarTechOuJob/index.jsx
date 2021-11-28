import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../services/api";

import Button from "../button";
import Input from "../input";
import { Container, Header, SelectContainer } from "./styles";
import { toast } from "react-hot-toast";

const DivAddTechOrJob = ({ setTech, token, showTechs }) => {
  const schema = yup.object().shape({
    title: yup.string().required("Insira uma tecnologia"),
    status: yup.string().required("Selecione o nível de conhecimento"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitFunction = (techInfo) => {
    api
      .post("/users/techs", techInfo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Tecnologia cadastrada com sucesso");
        setTech();
        showTechs();
      })
      .catch((err) =>
        toast.error(
          "Erro ao cadastrar tecnologia, provavelmente ela já está cadastrada"
        )
      );
  };

  return (
    <Container>
      <Header>
        <h3>Cadastrar Tecnologia</h3>
        <Button graySchema onClick={setTech}>
          x
        </Button>
      </Header>
      <form onSubmit={handleSubmit(submitFunction)}>
        <Input
          placeholder="Nome da Tech"
          type="text"
          register={register}
          name="title"
          error={errors.title?.message}
        />
        <SelectContainer>
          <label>Selecionar status:</label>
          <select {...register("status")}>
            <option></option>
            <option>Iniciante</option>
            <option>Intermediário</option>
            <option>Avançado</option>
          </select>
          <span>{errors.status?.message}</span>
        </SelectContainer>
        <Button type="submit">Cadastrar</Button>
      </form>
    </Container>
  );
};

export default DivAddTechOrJob;
