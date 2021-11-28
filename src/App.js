import GlobalStyle from "./styles/global";
import SignUp from "./pages/signUp";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

import { Toaster } from "react-hot-toast";

import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Kenziehub:token"));

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);
  return (
    <>
      <GlobalStyle />
      <Toaster />
      <Switch>
        <Route exact path="/">
          <Login
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/signup">
          <SignUp authenticated={authenticated} />
        </Route>
        <Route path="/dashboard">
          <Dashboard
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
      </Switch>
    </>
  );
}

export default App;
