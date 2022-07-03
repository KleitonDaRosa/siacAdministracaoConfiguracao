import "./perfilutilizador.css"
import history from "../../../../services/history";


export default function PerfilUtilizador() {
    return (
        <div id="perfilDeUtilizador">
            <h2>Perfil de Utilizador</h2>
            <div className="container">
                <div className="button-ok-cancelar">
                    <button className="btnTipe1 btn btn-primary" onClick={() => history.push("/criarperfil")}>Criar Pefil
                    </button>
                    <button className="btnTipe1 btn btn-primary" onClick={() => history.push("/editarperfil")}>Editar perfil
                    </button>
                </div>
            </div>

        </div>
    )

}