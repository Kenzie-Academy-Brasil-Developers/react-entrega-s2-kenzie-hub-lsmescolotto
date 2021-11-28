import { useEffect, useState } from "react";

import api from "../../services/api";
import DivAddTechOrJob from "../divCadastrarTechOuJob";
import Button from "../../components/button";
import Technology from "../technologyCard";
import { Container, Header, TechsContainer } from "./styles";

const SectionMyTechs = ({ user }) => {
  const [addTech, setAddTech] = useState(false);
  const [myTechs, setMyTechs] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Kenziehub:token")) || ""
  );

  const setTech = () => {
    setAddTech(!addTech);
  };

  const showTechs = () => {
    api
      .get(`/users/${user.id}`, {
        headers: {
          Authorazation: `Bearer ${token}`,
        },
      })
      .then((response) => setMyTechs(response.data.techs));
  };

  useEffect(() => {
    showTechs();
  });

  const deleteTech = (id) => {
    const newMyTechs = myTechs.filter((tech) => tech.id !== id);
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setMyTechs(newMyTechs));
  };

  return (
    <Container>
      <Header>
        <h3>Minhas tecnologias</h3>
        <Button onClick={setTech}>+</Button>
      </Header>

      {addTech ? (
        <DivAddTechOrJob
          setTech={setTech}
          token={token}
          showTechs={showTechs}
        />
      ) : (
        <p />
      )}

      <TechsContainer>
        {myTechs.map((tech) => (
          <Technology
            key={tech.id}
            title={tech.title}
            status={tech.status}
            onClick={() => deleteTech(tech.id)}
          />
        ))}
      </TechsContainer>
    </Container>
  );
};

export default SectionMyTechs;
