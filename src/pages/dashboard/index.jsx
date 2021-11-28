import { useState } from "react";
import { Redirect } from "react-router-dom";

import AppHeader from "../../components/header";
import { AppDashboard, SectionsContainer } from "./styles";
import SectionMyTechs from "../../components/sectionMinhasTecnologias";
import UserProfile from "../../components/sectionPerfilUsuario";

const Dashboard = ({ authenticated, setAuthenticated }) => {
  const [user] = useState(
    JSON.parse(localStorage.getItem("@Kenziehub:user")) || {}
  );
  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <AppDashboard>
      <AppHeader />
      <SectionsContainer>
        <SectionMyTechs user={user} />
        <UserProfile setAuthenticated={setAuthenticated} user={user} />
      </SectionsContainer>
    </AppDashboard>
  );
};

export default Dashboard;
