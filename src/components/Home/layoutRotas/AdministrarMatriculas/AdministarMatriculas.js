import "./administrarMatriculas.css"
import React, {useEffect, useState} from "react";



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
            <h2>Administrar Matriculas</h2>

            <form>
                <label>Curso</label>
                <select>
                    {
                        cursos.map((curso) => (
                            <option>{curso.nome_curso}</option>
                        ))
                    }
                </select>

                <br/>
                <label>Nome do estudante:</label>
                <input type="text"/>
                <br/>
                <label>Código do estudante:</label>
                <input type="number"/>

                <br/>
                <button type="submit" className="submitProcura">Procurar</button>
            </form>
        </div>
    )

}