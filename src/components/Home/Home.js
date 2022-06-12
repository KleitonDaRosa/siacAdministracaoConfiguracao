import "./Home.css"
import history from "../../services/history";
import Cabecalho from "./cabecalho/cabecalho";

export default function Home() {
    return (
        <>
            <Cabecalho/>

            <div className="buttonsNav">
                <button className="btnNav" onClick={() => history.push("/administarmatriculas")}>Administar Matriculas</button>
                <button className="btnNav" onClick={() => history.push("/gerircursos")}>Gerir Cursos</button>
                <button className="btnNav" onClick={() => history.push("/perfilutilizador")}>Perfil de Utilizador</button>
            </div>

        </>
    )
}