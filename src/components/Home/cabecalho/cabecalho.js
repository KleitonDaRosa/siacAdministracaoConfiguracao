import React from "react"
import UtaIcon from "./imgIconUTA.png"
import "./cabecalho.css"
import history from "../../../services/history";

export default function Cabecalho() {
    return (
        <div>
            <header>
                <nav>
                    <img className={"pointclick"} src={UtaIcon} onClick={() => {
                        history.push("/perfilutilizador")
                    }} id="logoticoUTA" alt=""/>

                    <h1 className="titulo">SISTEMA DE GESTÃO ACADÊMICA</h1>

                    <div className="mobile-menu">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>

                    <ul>

                        <li className={"pointclick"}><a onClick={() => {
                            history.push("/minhaconta")
                        }}>Minha conta</a></li>

                        <li className={"pointclick"}><a onClick={() => {
                            localStorage.removeItem("isAuthenticated")
                            history.push("/")
                        }}>Sign out</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}