import FormLogin from "../../components/FormLogin";
import { Redirect} from "react-router-dom";

function Login({setAutenticated,autenticated}) {
  if(autenticated){
    return <Redirect  to="/dashBoard"/>
  }
  return (
    <div className="login">
     <FormLogin  setAutenticated={setAutenticated}   autenticated={autenticated}/>
    </div>
  );
}
export default Login;
