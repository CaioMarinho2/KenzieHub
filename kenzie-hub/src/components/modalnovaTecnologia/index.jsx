import Modal from "react-modal";
import "./index.css";
import { AiOutlineClose } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { toast } from "react-toastify";

Modal.setAppElement("#root");
function ModalNewTechnology({ modalOpen, abrirFecharModal }) {
  const id = localStorage.getItem("@KenzieHub:id");
  const token = localStorage.getItem("@KenzieHub:token");

  const formSchema = yup.object().shape({
    title: yup.string().required("Nome da tecnologia é obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function registerTech(data) {
    api
      .post("/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        api.get(`/users/${id}`).then((response) => {
          localStorage.setItem(
            "@KenzieHub:techs",
            JSON.stringify(response.data.techs)
          );
          abrirFecharModal();

          toast.success("Tecnologia cadastrada com sucesso!");
          /*  data={title:"",status:"Iniciante"} */
        });
      })
      .catch(() => {
        toast.error(
          "Uma tecnologia com esse nome já foi cadastrada, tente outro!"
        );
      });
  }

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={abrirFecharModal}
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="closeModal">
        <h6 className="cadastroTechnology">Cadastrar Tecnologia</h6>
        <button className="closeBnt" onClick={abrirFecharModal}>
          <AiOutlineClose />
        </button>
      </div>
      <form className="formModal" onSubmit={handleSubmit(registerTech)}>
        <div className="inputsTechnology">
          <label className="labelTechnology" htmlFor="nameNewTecnology">
            Nome
          </label>
          <input
            className="inputNewTechnology"
            id="nameNewTecnology"
            {...register("title")}
          />
          <p className="errorModal"> {errors.title?.message}</p>

          <label className="labelTechnology" htmlFor="statusNewTecnology">
            Selecionar status
          </label>
          <select
            className="inputNewTechnology"
            id="statusNewTecnology"
            {...register("status")}
          >
            <option value="Iniciante">Iniciante </option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado </option>
          </select>
        </div>

        <button className="cadastroTechnologyBnt" type="submit">
          Cadastrar Tecnologia
        </button>
      </form>
    </Modal>
  );
}
export default ModalNewTechnology;
