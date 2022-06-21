import FormCadastro from "../../components/FormCadastro"
import { Redirect} from "react-router-dom";

function Cadastro({autenticated}) {
    if(autenticated){
        return <Redirect  to="/dashBoard"/>
      }

      
    return(
        <div className="cadastro">
     <FormCadastro/>
    </div>
    )
}

export default Cadastro