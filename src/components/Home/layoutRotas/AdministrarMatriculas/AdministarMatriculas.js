import React, {useEffect, useState} from "react";
import {H2,FORM,ButtonProcurar} from "./Stylecomponet"

export default function AdministarMatriculas() {

    //----------------------- Opter os cursos do backend sobre os cursos------------------------------------------------
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_BASE_URL}/cursos`)
            .then((response) => {
                return response.json()
            }).then((data) => setCursos(data))
    }, [])

    //------------------------------------------------------------------------------------------------------------------

    return (

        <div id="administrarMatriculas">
            <H2>Administrar Matriculas</H2>
            <FORM>

                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Nome do estudante</label>
                    <input type="text" className="form-control" id="formGroupExampleInput"
                           placeholder="Example input placeholder"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Código do estudante</label>
                    <input type="number" className="form-control" id="formGroupExampleInput2"
                           placeholder="Another input placeholder"/>
                </div>

                <div className="col-md">
                    <div className="form-floating">
                        <select className="form-select" id="floatingSelectGrid">
                            {
                                cursos.map((curso) => (
                                    <option>{curso.nome_curso}</option>
                                ))
                            }
                        </select>
                        <label htmlFor="floatingSelectGrid">Nome do curso</label>
                    </div>
                </div>

                <br/>
                <ButtonProcurar type="button" className="btn btn-primary submitProcura">Procurar</ButtonProcurar>
            </FORM>


        </div>
    )

}