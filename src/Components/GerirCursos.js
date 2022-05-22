import "./GerirCursos.css"
import React,{useState} from "react";
import Modal from "react-modal";



function GerirCursos() {
    const [modalIsOpen , setModalIsOpen] = useState(false);


    return (


            <div>
                {/*Modal Para o formulario criar Novo Curso*/}
                <div className='modal-classe'>
                    <button onClick={()=> setModalIsOpen(true)}>Adiconar Novo Curso</button>
                    <Modal isOpen={modalIsOpen}>
                        <h2>Criar Curso</h2>
                        <p>Em Construcao.....</p>
                        <button onClick={()=> setModalIsOpen(false)}>Cancelar</button>
                    </Modal>
                </div>
                {/*---------------------------------------*/}

                <div id="tabela">
                    <table>
                        <tr className="tableTop">
                            <td>Nome do curso</td>
                            <td>Estado</td>
                        </tr>
                        <tr className="tableElement">
                            <td>Licenciatura em Engenharia Informática e Telecomunicações</td>
                            <td>Ativo</td>
                        </tr>
                        <tr className="tableElement">
                            <td>Licenciatura em Engenharia Informática e Telecomunicações</td>
                            <td>Ativo</td>
                        </tr>
                        <tr className="tableElement">
                            <td>Licenciatura em Engenharia Informática e Telecomunicações</td>
                            <td>Ativo</td>
                        </tr>
                        <tr className="tableElement">
                            <td>Licenciatura em Engenharia Informática e Telecomunicações</td>
                            <td>Ativo</td>
                        </tr>
                    </table>
                </div>

            </div>


    )
}

export default GerirCursos