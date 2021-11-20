import GlobalStyle from "./styles/global";
import SignUp from "./pages/signUp";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/dashboard/:name">
          <Dashboard />
        </Route>
      </Switch>
    </>
  );
}

export default App;
