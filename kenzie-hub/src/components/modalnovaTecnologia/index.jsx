import Modal from "react-modal";
import "./index.css";
import { AiOutlineClose } from "react-icons/ai";
Modal.setAppElement("#root");

function ModalNewTechnology({ modalOpen, abrirFecharModal }) {
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
      <form className="formModal">
        <div className="inputsTechnology">
          <label className="labelTechnology" htmlFor="nameNewTecnology">
            Nome
          </label>
          <input className="inputNewTechnology" id="nameNewTecnology" />

          <label className="labelTechnology" htmlFor="statusNewTecnology">
     
            Selecionar status
          </label>
          <select className="inputNewTechnology" id="statusNewTecnology">
            <option value="Iniciante">Iniciante </option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado </option>
          </select>
        </div>

        <button className="cadastroTechnologyBnt">Cadastrar Tecnologia</button>
      </form>
    </Modal>
  );
}
export default ModalNewTechnology;
