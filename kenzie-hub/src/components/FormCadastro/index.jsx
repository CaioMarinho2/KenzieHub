import logo from "../../assets/Logo.png";
import "./index.css";
import { useHistory } from "react-router-dom";

function FormCadastro() {
    const history = useHistory();
  return (
    <section className="sectionCadastro">

      <div className="topoPag">
        <img alt="Logo" className="logoCadastro" src={logo} />
        <button className="voltarBnt"onClick={()=>{
            history.push("/")
          }}>Voltar</button>
      </div>

      <div className="cadastroFormArea">
        <form className="Cadastroform">
          <h2 className="cadastro">Crie sua conta</h2>
          <p className="infos" >Rapido e grátis, vamos nessa</p>

          <div className="formAreas">
            <label className="formLabel" htmlFor="nome">
              Nome
            </label>
            <input
              placeholder=" Digite aqui seu Nome"
              id="nome"
              className="formInput"
            ></input>
         
          </div>

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

          <div className="formAreas">
            <label className="formLabel" htmlFor="senhaConfirm">
              Confirmar Senha
            </label>
            <input
              type="password"
              placeholder=" Digite novamente sua Senha"
              id="senhaConfirm"
              className="formInput"
            ></input>
          </div>

          <div className="formAreas">
            <label className="formLabel" htmlFor="bio">
              Bio
            </label>
            <input
              placeholder="Fale sobre você"
              id="bio"
              className="formInput"
            ></input>
          </div>

          <div className="formAreas">
            <label className="formLabel" htmlFor="contact">
              Contato
            </label>
            <input
              placeholder="Opção de contato"
              id="contact"
              className="formInput"
            ></input>
          </div>

          <div className="formAreas">
            <label className="formLabel" htmlFor="selectModulo">
              Selecionar módulo
            </label>
            <select id="selectModulo" className="formInput">
              <option value="Primeiro Módulo"> Primeiro Módulo</option>
              <option value="Segundo Módulo">Segundo Módulo</option>
              <option value="Terceiro Módulo"> Terceiro Módulo</option>
              <option value="Quarto Módulo"> Quarto Módulo</option>
            </select>
          </div>

          <button className="cadastrar" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  );
}
export default FormCadastro;
