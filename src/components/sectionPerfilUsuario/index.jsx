import { useHistory } from "react-router";

import Button from "../../components/button";
import { Container, Header, Content } from "./styles";

const UserProfile = ({ setAuthenticated, user }) => {
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    setAuthenticated(false);
    history.replace("/");
  };

  return (
    <Container>
      <Header>
        <img
          src={
            user.avatar_url === null
              ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              : user.avatar_url
          }
          alt="user"
        />
        <div>
          <h3>{user.name}</h3>
          <span>{user.course_module}</span>
        </div>
      </Header>
      <Content>
        <div>
          <h3>Email</h3>
          <span>{user.email}</span>
        </div>
        <div>
          <h3>Telefone ou outro meio de contato:</h3>
          <span>{user.contact}</span>
        </div>
        <Button graySchema onClick={logout}>
          Sair
        </Button>
      </Content>
    </Container>
  );
};

export default UserProfile;
