import "./index.css";
import{FaRegTrashAlt } from "react-icons/fa"
function Card() {
  return (
    <>
      <li className="technologyCard">
        
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
