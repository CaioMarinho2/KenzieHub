import logo from "../../assets/Logo.png";

import { useState } from "react";
import {BsPlusLg} from 'react-icons/bs'
import "./index.css";
import List from "../../components/ListaTecnologias";
import ModalNewTechnology from "../../components/modalnovaTecnologia";
import ModalEditTechnology from "../../components/modalEditarTecnologia";




function DashBoard() {


  const[modalOpen,setModalOpen]=useState(false)
  const[modalOpenEdit,setModalOpenEdit]=useState(false)

  function abrirFecharModal(){
    setModalOpen(!modalOpen)
  }

  
  function abrirFecharModalEdit(){
    setModalOpenEdit(!modalOpenEdit)
  }

  return (
    <div className="dashBoard">
      <nav className="topDashboard">
        <img alt="Logo" className="logoDashBoard" src={logo} />
        <button className="logoutBnt">Sair</button>
      </nav>

      <hr className="division" />

      <header className="infosUser">
        <h2 className="nameUser">Olá, Samuel Leão </h2>
        <p className="moduloUser">Primeiro módulo  (Introdução ao Frontend)</p>
      </header>

      <hr  className="division" />

      <main >
        <div className="addTecnologia">
          <h4 className="tecnologias">Tecnologias</h4>
          <button className="addBnt"  onClick={abrirFecharModal} ><BsPlusLg/></button>
        </div>
      <ModalNewTechnology  abrirFecharModal={abrirFecharModal} modalOpen={modalOpen} />
      <ModalEditTechnology  modalOpenEdit={modalOpenEdit}  abrirFecharModalEdit={abrirFecharModalEdit} />
          <div className="listArea">
         
         <List abrirFecharModalEdit={abrirFecharModalEdit} />
            
          </div>

      </main>


    </div>
  );
}
export default DashBoard;
