import "./perfilutilizador.css"
import history from "../../../../services/history";

export default function PerfilUtilizador(){
    return(
        <div id="perfilDeUtilizador">
            <h2>Perfil de Utilizador</h2>
            <button className="btnTipe1" >Criar Pefil</button>
            <button className="btnTipe1" onClick={() =>history.push("/perfilutilizador/editarperfil")}>Editar perfil</button>
        </div>
    )

}