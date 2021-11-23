import { Redirect } from "react-router-dom";

import AppHeader from "../../components/header";
import { AppDashboard } from "./styles";
import SectionMyJobs from "../../components/sectionMeusTrabalhos";
import SectionMyTechs from "../../components/sectionMinhasTecnologias";
import UserProfile from "../../components/sectionPerfilUsuario";

const Dashboard = ({ authenticated, setAuthenticated }) => {
  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <main>
      <AppHeader />
      <div>
        <SectionMyJobs />
        <SectionMyTechs />
        <UserProfile setAuthenticated={setAuthenticated} />
      </div>
    </main>
  );
};

export default Dashboard;
