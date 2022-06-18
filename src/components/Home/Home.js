import "./Home.css"
import history from "../../services/history";
import Cabecalho from "./cabecalho/cabecalho";
import {useLocation} from 'react-router-dom'

export default function Home() {
    const location = useLocation();
    console.log(location.pathname);

    return (
        <>
            <Cabecalho/>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link " aria-current="page" onClick={() => history.push("/administarmatriculas")}>Administrar
                        matriculas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="abcd" onClick={() => history.push("/gerircursos")}>Gerir Cursos</a>
                </li>
                <li className="nav-item ">
                    <a className="nav-link" onClick={() => history.push("/perfilutilizador")}>Perfil de
                        utilizador</a>
                </li>
            </ul>

        </>
    )
}