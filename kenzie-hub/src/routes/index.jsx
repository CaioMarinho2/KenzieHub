import { Switch, Route } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import DashBoard from "../pages/DashBoard";
import Login from "../pages/Login";

function Routes() {
  return (
    <Switch>

      <Route exact path="/">
        <Login />
      </Route>

      <Route exact path="/cadastro">
        <Cadastro />
      </Route>


      <Route path="/dashBoard">
       <DashBoard/>
      </Route>

    </Switch>
  );
}
export default Routes;
