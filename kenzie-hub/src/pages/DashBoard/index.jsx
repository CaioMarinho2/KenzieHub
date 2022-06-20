import logo from "../../assets/Logo.png";
import Modal from "react-modal";
import { useState } from "react";
import {BsPlusLg} from 'react-icons/bs'
import "./index.css";
import List from "../../components/ListaTecnologias";

Modal.setAppElement('#root')


function DashBoard() {


  const[modalOpen,setModalOpen]=useState(false)

  function abrirModal(){
    setModalOpen(true)
  }

   function fecharModal(){
    setModalOpen(false)
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
          <button className="addBnt"  onClick={abrirModal} ><BsPlusLg/></button>
        </div>
        
          <div className="listArea">
         
         <List/>
            
          </div>

      </main>


    </div>
  );
}
export default DashBoard;
