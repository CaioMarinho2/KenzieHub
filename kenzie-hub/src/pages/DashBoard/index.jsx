import logo from "../../assets/Logo.png";

import { useState } from "react";
import {BsPlusLg} from 'react-icons/bs'
import {  Redirect} from "react-router-dom";
import "./index.css";
import List from "../../components/ListaTecnologias";
import ModalNewTechnology from "../../components/modalnovaTecnologia";
import ModalEditTechnology from "../../components/modalEditarTecnologia";





function DashBoard({autenticated,setAutenticated}) {
  

  const name =localStorage.getItem("@KenzieHub:name");
  const module =localStorage.getItem("@KenzieHub:module");
  const techs =localStorage.getItem("@KenzieHub:techs");
 const arrTechs=JSON.parse(techs)


  const[modalOpen,setModalOpen]=useState(false)
  const[modalOpenEdit,setModalOpenEdit]=useState(false)
  
  function abrirFecharModal(){
    setModalOpen(!modalOpen)
  }
  
  
  function abrirFecharModalEdit(){
    setModalOpenEdit(!modalOpenEdit)
  }
  
  if(!autenticated){
    return <Redirect  to="/"/>
  }

      console.log( arrTechs)

  return (
    <div className="dashBoard">
      <nav className="topDashboard">
        <img alt="Logo" className="logoDashBoard" src={logo} />
        <button className="logoutBnt" onClick={()=>{

          localStorage.clear()
          setAutenticated(false)
   
          }}>Sair</button>
      </nav>

      <hr className="division" />

      <header className="infosUser">
        <h2 className="nameUser">Olá, {name}</h2>
        <p className="moduloUser">{module}</p>
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
