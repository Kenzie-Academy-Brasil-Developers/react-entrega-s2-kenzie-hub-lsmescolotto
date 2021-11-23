import { useHistory } from "react-router";

import Button from "../../components/button";
import { Container } from "./styles";

const UserProfile = ({ setAuthenticated }) => {
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    setAuthenticated(false);
    history.replace("/");
  };

  return (
    <Container>
      <Button graySchema onClick={logout}>
        Sair
      </Button>
    </Container>
  );
};

export default UserProfile;
