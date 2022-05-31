import "./FormularioAdicionarCursos.css";
import Modal from 'react-modal';
import React from 'react';
import {useState} from "react";


function FormularioAdicionarCursos({title,description}){

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return(

        <div className='modal-classe'>
            <button onClick={()=> setModalIsOpen(true)}></button>
            <Modal>
                <h2>{title}</h2>
                <p>Em Construcao.....</p>
            </Modal>
        </div>)

}export default FormularioAdicionarCursos;