import ListaCurso from "./ListaCurso";

function GerirCurso(){

    const cursos = {
        id:'LEIT',
        nomeCurso:'Informatica e Telecomunicacoes',
        nomeCoordenador:'Sidnei Cruz',
        estado:'Activo'};

    return(
        <div>
            <div>
                <div className="title">
                    <h2>GERIR CURSOS</h2>
                    <div className="button-add-curso">
                        <button>Adicionar curso</button>
                        <button>Adicionar Curso</button>
                    </div>
                </div>
            </div>

            <div>
                <ListaCurso curso={cursos}></ListaCurso>
            </div>

        </div>
    );
}

export default GerirCurso;