import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import DashBoard from "../pages/DashBoard";
import Login from "../pages/Login";

function Routes() {
  const [autenticated, setAutenticated] = useState(false);

  useEffect(() => {
    const token =localStorage.getItem("@KenzieHub:token");

    if (token) {
      return setAutenticated(true);
    }
  }, [autenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Login autenticated={autenticated} setAutenticated={setAutenticated} />
      </Route>

      <Route exact path="/cadastro">
        <Cadastro autenticated={autenticated} />
      </Route>

      <Route exact path="/dashBoard">
        <DashBoard autenticated={autenticated}  setAutenticated={setAutenticated} />
      </Route>
    </Switch>
  );
}
export default Routes;
