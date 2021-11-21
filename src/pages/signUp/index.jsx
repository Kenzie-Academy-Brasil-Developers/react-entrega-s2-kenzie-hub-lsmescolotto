import AppHeader from "../../components/header";
import Button from "../../components/button";
import Input from "../../components/input";

const SignUp = () => {
  return (
    <main>
      <AppHeader />
      <Input placeholder="Nome" />
      <Input placeholder="Email" />
      <Input placeholder="Bio" />
      <Input placeholder="Contato" />
      {/* aqui tem o input pra selecionar o módulo */}
      <Input placeholder="Senha" type="password" />
      <Input placeholder="Confirmar senha" type="password" />

      <Button>Cadastrar</Button>
    </main>
  );
};

export default SignUp;
