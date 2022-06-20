import Modal from "react-modal";
import "./index.css";
import { AiOutlineClose } from "react-icons/ai";
Modal.setAppElement("#root");

function ModalEditTechnology({modalOpenEdit,abrirFecharModalEdit}) {
    return (
      <Modal
        isOpen={modalOpenEdit}
        onRequestClose={abrirFecharModalEdit}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="closeModal">
          <h6 className="cadastroTechnology">Tecnologia Detalhes  </h6>
          <button className="closeBnt" onClick={abrirFecharModalEdit}>
          <AiOutlineClose/> 
          </button>
        </div>
        <form className="formModal">
          <div className="inputsTechnology">
            <label className="labelTechnology" htmlFor="nameNewTecnology">
              Nome do projeto
            </label>
            <input className="inputNewTechnology" id="nameNewTecnology" />
  
            <label className="labelTechnology" htmlFor="statusNewTecnology">
       
              Status
            </label>
            <select className="inputNewTechnology" id="statusNewTecnology">
              <option value="Iniciante">Iniciante </option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado </option>
            </select>
          </div>
          <div className="buttonsEdit">
          <button className="saveBnt">Salvar alterações</button>
          <button className="deleteBnt">Excluir</button>
          </div>
        </form>
      </Modal>
    );
  }
  export default ModalEditTechnology;
  