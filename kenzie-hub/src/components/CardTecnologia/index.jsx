import "./index.css";
import{FaRegTrashAlt } from "react-icons/fa"
function Card({abrirFecharModalEdit}) {
  return (
    <>
      <li className="technologyCard" onClick={abrirFecharModalEdit} >
        
        <p className="technologyName" >React JS</p>
        <div className="technologyInfos">
          <p  className="technologyLevel">inicante</p>
          <button  className="technologyDelete"> <FaRegTrashAlt/></button>
        </div>
     
      </li>
    </>
  );
}
export default Card;
