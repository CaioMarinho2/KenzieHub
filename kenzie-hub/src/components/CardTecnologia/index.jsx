import "./index.css";

function Card({abrirFecharModalEdit}) {
  return (
    <>
      <li className="technologyCard" onClick={abrirFecharModalEdit} >
        
        <p className="technologyName" >React JS</p>
        <div className="technologyInfos">
          <p  className="technologyLevel">Intermediário</p>
       
        </div>
     
      </li>
    </>
  );
}
export default Card;
