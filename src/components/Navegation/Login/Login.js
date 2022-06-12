import {useEffect, useState} from "react";
import history from "../../../services/history"

export default function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (localStorage.getItem("isAuthenticated") != null) {
            history.push("/perfilutilizador")
        }
    }, [])

    function loginUser() {
        if (userName === "Admin" && password === "Admin") {
            localStorage.setItem("isAuthenticated", "true")
            history.push("/perfilutilizador")
        }
    }

    return (
        <>
            <h1> Pagina de login </h1>
            <form>
                <label>Usuário</label>
                <input type="text" onChange={(event) => setUserName(event.target.value)}/>

                <label>Senha</label>
                <input type="text" onChange={(event) => setPassword(event.target.value)}/>

                <button type="submit" onClick={() => loginUser()}> Entrar</button>
            </form>
        </>
    )
}