import "./GerirCursos.css"
import React,{useState} from "react";
import Modal from "react-modal";


function GerirCursos() {
    const [modalIsOpen , setModalIsOpen] = useState(false);
    return (
        <div>

            {/*Modal Para o formulario criar Novo Curso*/}
            <div className='modal-classe'>
                <div className='button-adicionar-novoCurso'>
                    <button onClick={()=> setModalIsOpen(true)}>Adiconar Novo Curso</button>
                </div>


                <Modal isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)}>

                    <div className='container-forms'>
                        <div className='formulario'>

                            <form>
                                <h2>Novo Curso</h2>
                                <div>
                                    <div>
                                        <label>Curso:      </label>
                                        <input type='text'></input>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <label>Estado   </label>
                                        <select>
                                            <option value="">---Selecionar Estado---</option>
                                            <option value="activo">Activo</option>
                                            <option value="desactivo">Desactivo</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label>Coorde</label>
                                    <select>
                                        <option value="">---Selecionar um Coordenador---</option>
                                        <option value="Sidnei Cruz">Docente-Sidnei Cruz</option>
                                        <option value="JandirMedina">Jandir Medina</option>
                                        <option value="Jose Neves">Jose Neves</option>
                                        <option value="Joao Do Monte">Joao Do Monte</option>
                                    </select>
                                </div>
                            </form>


                        </div>
                    </div>




                    <div className='container-buttons'>
                        <div className='button-guardar-cancelar'>
                            <button className='button-guardar' onClick={()=>setModalIsOpen(false)}>Guardar</button>
                            <button className='button-cancelar' onClick={()=> setModalIsOpen(false)}>Cancelar</button>
                        </div>
                    </div>


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

export default GerirCursos;