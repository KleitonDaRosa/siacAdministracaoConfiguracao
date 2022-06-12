import {Route, Router, Switch} from "react-router-dom";
import history from "../services/history";

import ProtectedRoute from "./protectedRoutes"
import GerirCursos from "../components/Home/layoutRotas/GerirCursos/GerirCursos";
import PerfilUtilizador from "../components/Home/layoutRotas/PerfilUtilizador/PerfilUtilizador";
import AdministarMatriculas from "../components/Home/layoutRotas/AdministrarMatriculas/AdministarMatriculas";
import Login from "../components/Navegation/Login/Login";

export default function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <ProtectedRoute path="/gerircursos" component={GerirCursos} showHome/>
                <ProtectedRoute path="/perfilutilizador" component={PerfilUtilizador} showHome/>
                <ProtectedRoute path="/administarmatriculas" component={AdministarMatriculas} showHome/>

                <Route path="/" component={Login}/>
            </Switch>
        </Router>
    )
}