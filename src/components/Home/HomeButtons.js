import "./HomeButtons.css"
import history from "../../services/history";

export default function homebuttons() {
    return (
        <div className="buttonsNav">
            <button className="btnNav" onClick={() => history.push("/administarmatriculas")}>Administar Matriculas</button>
            <button className="btnNav" onClick={() => history.push("/gerircursos")}>Gerir Cursos</button>
            <button className="btnNav" onClick={() => history.push("/perfilutilizador")}>Perfil de Utilizador</button>
        </div>
    )
}