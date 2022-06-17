import logo from "../../assets/Logo.png";
import "./index.css";
import { useHistory } from "react-router-dom";

function FormLogin() {
    const history = useHistory();

  return (
    <section className="sectionLogin">
      <img alt="Logo" className="logo" src={logo} />
      <div className="loginFormArea">
        <form className="loginform">
          <h2 className="login">Login</h2>
          <div className="formAreas">
            <label className="formLabel" htmlFor="email">
              Email
            </label>
            <input
              placeholder=" Digite aqui seu Email"
              id="email"
              className="formInput"
            ></input>
          </div>

          <div className="formAreas">
            <label className="formLabel" htmlFor="senha">
              Senha
            </label>
            <input
              type="password"
              placeholder=" Digite aqui sua Senha"
              id="senha"
              className="formInput"
            ></input>
          </div>

          <button className="Entrar" type="submit">
            Entrar
          </button>
        </form>
        <div>
          <p className="semConta">Ainda não possui uma conta?</p>
          <button className="cadastrese" onClick={()=>{
            history.push("/cadastro")
          }}>Cadastre-se</button>
        </div>
      </div>
    </section>
  );
}
export default FormLogin;
