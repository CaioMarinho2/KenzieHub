import Card from "../CardTecnologia"
import "./index.css";
function List({abrirFecharModalEdit}) {
    return(
        <ul className="techList">
       <Card abrirFecharModalEdit={abrirFecharModalEdit}  />
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
        </ul>
    )
}
export default List