import Modal from "react-modal";
import "./index.css";
import { AiOutlineClose } from "react-icons/ai";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useState } from "react";

Modal.setAppElement("#root");

function ModalEditTechnology({
  modalOpenEdit,
  abrirFecharModalEdit,
  cardItens,
}) {
  const { register, handleSubmit } = useForm();

  const token = localStorage.getItem("@KenzieHub:token");
  const id = localStorage.getItem("@KenzieHub:id");

  function atualizationTech(data) {
    api
      .put(`/users/techs/${cardItens.id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        api.get(`/users/${id}`).then((response) => {
          console.log(response);
          localStorage.setItem(
            "@KenzieHub:techs",
            JSON.stringify(response.data.techs)
          );
          abrirFecharModalEdit();
          toast.success("Tecnologia editada com sucesso!");
        });
      })
      .catch(() => {
        toast.error("Algo deu errado, tente novamente em alguns instantes");
      });
  }
  console.log(cardItens.status);

 
  return (
    <Modal
      isOpen={modalOpenEdit}
      onRequestClose={abrirFecharModalEdit}
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="closeModal">
        <h6 className="cadastroTechnology">Tecnologia Detalhes </h6>
        <button className="closeBnt" onClick={abrirFecharModalEdit}>
          <AiOutlineClose />
        </button>
      </div>
      <form className="formModal" onSubmit={handleSubmit(atualizationTech)}>
        <div className="inputsTechnology">
          <label className="labelTechnology" htmlFor="nameNewTecnology">
            Nome do projeto
          </label>
          <div className="inputNewTechnology" id="nameNewTecnology">
            <p className="dadoImutável">{cardItens.title}</p>
          </div>

          <label className="labelTechnology" htmlFor="statusNewTecnology">
            Status
          </label>
          <select
              defaultValue={cardItens.status}
            className="inputNewTechnology"
            id="statusNewTecnology"
            {...register("status")}
          >
            <option value="Iniciante">Iniciante </option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado </option>
          </select>
        </div>
        <div className="buttonsEdit">
          <button className="saveBnt" type="submit">
            Salvar alterações
          </button>
          <button
            className="deleteBnt"
            onClick={(e) => {
              e.preventDefault();
              api
                .delete(`/users/techs/${cardItens.id}`, {
                  headers: { Authorization: `Bearer ${token}` },
                })
                .then(() => {
                  api.get(`/users/${id}`).then((response) => {
                    console.log(response);
                    localStorage.setItem(
                      "@KenzieHub:techs",
                      JSON.stringify(response.data.techs)
                    );
                    abrirFecharModalEdit();
                    toast.success("Tecnologia deletada com sucesso!");
                  });
                })
                .catch(() => {
                  toast.error(
                    "Algo deu errado, tente novamente em alguns instantes"
                  );
                });
            }}
          >
            Excluir
          </button>
        </div>
      </form>
    </Modal>
  );
}
export default ModalEditTechnology;
