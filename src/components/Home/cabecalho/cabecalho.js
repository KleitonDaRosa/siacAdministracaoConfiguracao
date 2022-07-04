import React from "react"
import UtaIcon from "./imgIconUTA.png"
import "./cabecalho.css"
import history from "../../../services/history";
import Sair from "./BootstrapModalSair"

export default function Cabecalho() {
    return (
        <div>
            <header>
                <nav>


                    <img className={"pointclick"} src={UtaIcon} onClick={() => {
                        history.push("/perfilutilizador")
                    }} id="logoticoUTA" alt=""/>

                    <h1 className="titulo">SISTEMA DE GESTÃO ACADÊMICA</h1>

                    <ul className="nav justify-content-end">
                        <li className={"pointclick nav-item"}><a onClick={() => {
                            history.push("/minhaconta")
                        }}>Minha conta</a></li>

                        <Sair/>

                    </ul>

                </nav>
            </header>
        </div>
    )
}