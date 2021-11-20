import AppHeader from "../../components/header";
import { AppDashboard } from "./styles";
import SectionMyJobs from "../../components/sectionMeusTrabalhos";
import SectionMyTechs from "../../components/sectionMinhasTecnologias";
import UserProfile from "../../components/sectionPerfilUsuario";

const Dashboard = () => {
  return (
    <main>
      <AppHeader />
      <div>
        <SectionMyJobs />
        <SectionMyTechs />
        <UserProfile />
      </div>
    </main>
  );
};

export default Dashboard;
