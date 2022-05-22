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
                    <Modal isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)}>
                        <form>
                            <h2>Novo Curso</h2>
                            <div>
                                <div>
                                    <label>Nome do Curso: </label>
                                    <input type='text'></input>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <label>Estado do Curso:</label>
                                    <select>
                                        <option value="">---Escolhe um Estado---</option>
                                        <option value="activo">Activo</option>
                                        <option value="desactivo">Desactivo</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label>Adicionar Coordenador</label>
                                <select>
                                    <option value="">---Escolhe um Coordenador---</option>
                                    <option value="Sidnei Cruz">Docente-Sidnei Cruz</option>
                                    <option value="JandirMedina">Jandir Medina</option>
                                    <option value="Jose Neves">Jose Neves</option>
                                    <option value="Joao Do Monte">Joao Do Monte</option>
                                </select>
                            </div>




                        </form>




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