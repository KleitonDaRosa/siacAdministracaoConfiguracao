function ListaCurso(props){

    const nomeCurso = props.curso.nomeCurso;
    const nomeCoordenador = props.curso.nomeCoordenador;
    const idCurso = props.curso.id;
    const estadoCurso = props.curso.estado;



    return(
        <div>
            <div className="informacao-cursos">

                <table>
                    <tr >
                        <th>Curso</th>
                        <th>Estado</th>
                    </tr>

                    <tr>
                        <td>{nomeCurso}</td>
                        <td>{estadoCurso} </td>
                        <td><button>Editar</button></td>
                    </tr>

                    <tr>
                        <td>{nomeCurso}</td>
                        <td>{estadoCurso} </td>
                        <td><button>Editar</button></td>
                    </tr>


                </table>




            </div>
        </div>



    )



}

export default ListaCurso;