import logo from "../../assets/Logo.png";
import "./index.css";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { toast } from "react-toastify";

function FormCadastro() {
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido "),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(6, "A senha deve conter no mínimo 6 caracteres"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas não são iguais!")
      .required("Confirme a senha!"),
    bio: yup.string().required("Bio obrigatória"),
    contact: yup.string().required("Contato obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const history = useHistory();

  function newUserCadastro({
    email,
    password,
    name,
    bio,
    contact,
    course_module,
  }) {
    const newUser = {
      email: email,
      password: password,
      name: name,
      bio: bio,
      contact: contact,
      course_module: course_module,
    };
    api
      .post("/users", newUser)
      .then(() => {
        toast.success("Conta criada com sucesso!");

        history.push("/");
      })
      .catch(() => {
        toast.error("Erro ao criar a conta, esse Email já foi cadastrado!");
      });
  }

  return (
    <section className="sectionCadastro">
      <div className="topoPag">
        <img alt="Logo" className="logoCadastro" src={logo} />
        <button
          className="voltarBnt"
          onClick={() => {
            history.push("/");
          }}
        >
          Voltar
        </button>
      </div>

      <div className="cadastroFormArea">
        <form className="Cadastroform" onSubmit={handleSubmit(newUserCadastro)}>
          <h2 className="cadastro">Crie sua conta</h2>
          <p className="infos">Rapido e grátis, vamos nessa</p>

          <div className="formAreas">
            <label className="formLabel" htmlFor="nome">
              Nome
            </label>
            <input
              placeholder=" Digite aqui seu Nome"
              id="nome"
              className="formInput"
              {...register("name")}
            ></input>
            <p className="error"> {errors.name?.message}</p>
          </div>

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

          <div className="formAreas">
            <label className="formLabel" htmlFor="senhaConfirm">
              Confirmar Senha
            </label>
            <input
              type="password"
              placeholder=" Digite novamente sua Senha"
              id="senhaConfirm"
              className="formInput"
              {...register("passwordConfirm")}
            ></input>
            <p className="error"> {errors.passwordConfirm?.message}</p>
          </div>

          <div className="formAreas">
            <label className="formLabel" htmlFor="bio">
              Bio
            </label>
            <input
              placeholder="Fale sobre você"
              id="bio"
              className="formInput"
              {...register("bio")}
            ></input>
            <p className="error"> {errors.bio?.message}</p>
          </div>

          <div className="formAreas">
            <label className="formLabel" htmlFor="contact">
              Contato
            </label>
            <input
              placeholder="Opção de contato"
              id="contact"
              className="formInput"
              {...register("contact")}
            ></input>
            <p className="error"> {errors.contact?.message}</p>
          </div>

          <div className="formAreas">
            <label className="formLabel" htmlFor="selectModulo">
              Selecionar módulo
            </label>
            <select
              id="selectModulo"
              className="formInput"
              {...register("course_module")}
            >
              <option value="Primeiro Módulo (Introdução ao Frontend)">
                {" "}
                Primeiro Módulo
              </option>
              <option value="Segundo Módulo (Frontend Avançado)">
                Segundo Módulo{" "}
              </option>
              <option value="Terceiro Módulo (Introdução ao Backend)">
                {" "}
                Terceiro Módulo
              </option>
              <option value="Quarto Módulo  (Backend Avançado)">
                {" "}
                Quarto Módulo
              </option>
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
