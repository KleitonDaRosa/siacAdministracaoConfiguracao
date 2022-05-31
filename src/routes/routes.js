import {Router,Switch,Route} from "react-router-dom";
import history from "../services/history";

import GerirCursos from "../components/Home/layoutRotas/GerirCursos/GerirCursos";
import PerfilUtilizador from "../components/Home/layoutRotas/PerfilUtilizador/PerfilUtilizador";
import AdministarMatriculas from "../components/Home/layoutRotas/AdministrarMatriculas/AdministarMatriculas";

export default function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/gerircursos" component={GerirCursos}/>
                <Route path="/perfilutilizador" component={PerfilUtilizador}/>
                <Route path="/administarmatriculas" component={AdministarMatriculas}/>
            </Switch>
        </Router>
    )
}