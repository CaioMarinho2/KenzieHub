import logo from "../../assets/Logo.png";
import "./index.css";
import { Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

function FormLogin({setAutenticated,autenticated}) {
  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido "),
    password: yup
      .string()
      .required("Senha obrigatória")
    
  });

  const history = useHistory();
  const { register, handleSubmit, formState:{errors} } = useForm({
    resolver: yupResolver(formSchema)
  });

  function logar(user) {
    api.post('/sessions',user)
    .then((response)=>{
     
     localStorage.setItem("@KenzieHub:token",response.data.token)
     localStorage.setItem("@KenzieHub:name",response.data.user.name)
     localStorage.setItem("@KenzieHub:module",response.data.user.course_module)
     localStorage.setItem("@KenzieHub:techs",JSON.stringify(response.data.user.techs))

     setAutenticated(true)
    
     history.push('/dashBoard')

    })
    .catch(()=>{
     toast.error("Erro ao logar, Email ou Senha incorretas!")
    })
  }
if(autenticated){
  return <Redirect  to="/dashBoard"/>
}
  return (
    <section className="sectionLogin">
      <img alt="Logo" className="logo" src={logo} />
      <div className="loginFormArea">
        <form className="loginform" onSubmit={handleSubmit(logar)}>
          <h2 className="login">Login</h2>
          <div className="formAreas">
            <label className="formLabel" htmlFor="email">
              Email
            </label>
            <input
              placeholder=" Digite aqui seu Email"
              id="email"
              className="formInput"
              {...register("email")}
            ></input>
            <p className="error"> {errors.email?.message}</p>
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
              {...register("password")}
            ></input>
              <p className="error"> {errors.password?.message}</p>
          </div>

          <button className="Entrar" type="submit">
            Entrar
          </button>
        </form>
        <div>
          <p className="semConta">Ainda não possui uma conta?</p>
          <button
            className="cadastrese"
            onClick={() => {
              history.push("/cadastro");
            }}
          >
            Cadastre-se
          </button>
        </div>
      </div>
    </section>
  );
}
export default FormLogin;
