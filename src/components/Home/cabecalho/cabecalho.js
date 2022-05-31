import React from "react"
import UtaIcon from "./imgIconUTA.png"
import "./cabecalho.css"

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
                        <li><a href="./minhaconta">Minha conta</a></li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <li><a href="./signout">Sign out</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}