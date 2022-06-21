import Card from "../CardTecnologia"
import "./index.css";
function List({abrirFecharModalEdit,arrTechs,setCardItens}) {

    if(arrTechs.length!==0){
        return (
<ul className="techList">
         
         {arrTechs.map(({id,status,title})=>{
            return(
                
                <Card  setCardItens={setCardItens}  id={id} key={id} title={title}  status={status} abrirFecharModalEdit={abrirFecharModalEdit}  />
                
                )
            })}   
        </ul>
        )
     }  
   else {return(
    <ul className="techList">
        <h2 className="semTech">Você ainda não tem nenhuma Tecnologia cadastrada!</h2>
          </ul>
    )}
}
export default List