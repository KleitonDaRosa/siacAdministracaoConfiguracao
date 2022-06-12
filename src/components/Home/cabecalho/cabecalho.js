import React from "react"
import UtaIcon from "./imgIconUTA.png"
import "./cabecalho.css"
import history from "../../../services/history";

export default function Cabecalho() {
    return (
        <div>
            <header>
                <nav>
                    <img src={UtaIcon} id="logoticoUTA" alt=""/>
                    <h1 className="titulo">SISTEMA DE GESTÃO ACADÊMICA</h1>

                    <div className="mobile-menu">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>

                    <ul>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <li><a>Minha conta</a></li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <li><a onClick={() => {
                            localStorage.removeItem("isAuthenticated")
                            history.push("/")
                        }}>Sign out</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}