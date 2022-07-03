import "./GerirCursos.css"
import React, {useEffect, useState} from "react";
import Modal from "react-modal";



function GerirCursos() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    //----------------------- Opter os cursos do backend----------------------------------------------------------------
    const [cursos, setCursos] = useState([]);
    const [nomeCurso, setNomeCurso] = useState("")
    const [estadoCurso, setEstadoCurso] = useState("")

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/cursos`)
            .then((response) => {
                return response.json()
            }).then((data) => setCursos(data))
    }, [])

    //------------------------------------------------------------------------------------------------------------------

    //------------------------------------------------------------------------------------------------------------------
    function adicionarNovoCurso() {
        const reqOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({curso: nomeCurso, estado: estadoCurso})
        }
        fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/cursos`, reqOptions)
            .then(response => response.json())
            .then(data => setCursos([...cursos, data]))
    }

    //------------------------------------------------------------------------------------------------------------------


    //-----------------Eliminar curso ---------------------------------------------------------------------------------
    function removerCurso(idCurso){
        const reqOptions = {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
        }
        fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/cursos?id=${idCurso}`, reqOptions)
            .then(response => response.json())
            .then(data => {
                if(data){
                    setCursos(cursos.filter(curso => curso.id_curso !== idCurso)) // remover do array de cursos
                }
            })
    }
    //-----------------------------------------------------------------------------------------------------------------

    return (<div id="gerirCursos">
        <h2>Gerir Cursos</h2>
        {/*Modal Para o formulario criar Novo Curso*/}
        <div className='modal-classe'>
            <div className='button-adicionar-novoCurso'>
                <button type="button" className="btn btn-secondary submitProcura" onClick={() => setModalIsOpen(true)}>Adiconar Novo Curso</button>

            </div>

            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                <div className='container-forms'>
                    <div className='formulario'>
                        <form>
                            <h2>Novo Curso</h2>
                            <div>
                                <div>
                                    <label>Curso: </label>
                                    <input type='text' onChange={(event) => setNomeCurso(event.target.value)}></input>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <label>Estado </label>
                                    <select onChange={(event) => setEstadoCurso(event.target.value)}>
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
                        <button className='button-guardar' onClick={() => {
                            adicionarNovoCurso()
                            setModalIsOpen(false)
                        }}>Guardar
                        </button>
                        <button className='button-cancelar' onClick={() => setModalIsOpen(false)}>Cancelar</button>
                    </div>
                </div>


            </Modal>

        </div>


        {/*---------------------------------------*/}
        <div id="tabela">
            <table className="table table-hover">
                <thead>
                <tr>
                    <th> Nome do curso</th>
                    <th> Estado</th>
                </tr>
                </thead>
                <tbody className="table-group-divider">
                {
                    cursos.map((curso) => (
                        <tr className="tableElement" onClick={() => removerCurso(curso.id_curso)}>
                            <td>{curso.nome_curso}</td>
                            <td>{curso.estado_curso}</td>
                        </tr>
                    ))
                }
                </tbody>

            </table>
        </div>


    </div>)
}

export default GerirCursos;