import {Route, Router, Switch} from "react-router-dom";
import history from "../services/history";

import GerirCursos from "../components/Home/layoutRotas/GerirCursos/GerirCursos";
import PerfilUtilizador from "../components/Home/layoutRotas/PerfilUtilizador/PerfilUtilizador";
import AdministarMatriculas from "../components/Home/layoutRotas/AdministrarMatriculas/AdministarMatriculas";
import ErrorPage from "../components/ErrorPage/ErrorPage";

export default function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/gerircursos" component={GerirCursos}></Route>
                <Route path="/perfilutilizador" component={PerfilUtilizador}/>
                <Route path="/administarmatriculas" component={AdministarMatriculas}/>
                <Route path={"*"} component={ErrorPage}/>
            </Switch>

        </Router>
    )
}