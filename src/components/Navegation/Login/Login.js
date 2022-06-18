import "./login.css"
import {useEffect, useState} from "react";


import history from "../../../services/history"

export default function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    //--------------caso já estiver feito o login------------------------------
    useEffect(() => {
        if (localStorage.getItem("isAuthenticated") != null) {
            history.push("/perfilutilizador")
        }
    }, [])

    //------------------------------------------------------------------------


    function loginUser() {
        if (userName === "Admin" && password === "Admin") {
            localStorage.setItem("isAuthenticated", "true")
            history.push("/perfilutilizador")
        }
    }

    return (
        <>
            <h2> login </h2>
            <h4>Sistema de administracao Academica</h4>
            <div id="formLogin">
                <div className="form-floating mb-3 ">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                           onChange={(event) => setUserName(event.target.value)}/>
                    <label htmlFor="floatingInput">Nome</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                           onChange={(event) => setPassword(event.target.value)}/>
                    <label htmlFor="floatingPassword">Senha</label>
                </div>
                <button className="btn btn-success" onClick={() => loginUser()}>Login</button>
            </div>
        </>
    )
}