function Curso(props){

    const nome = props.nome;
    const coordenador = props.coordenador;
    const estado = props.estado;

    return(

        <div className='tabela-cursos'>
            <div className='expense-nome-curso'>{/*Nome do Curso*/}<h4>{nome}</h4></div>
            <div className='expense-estado'>{estado}</div>
            <button>Editar</button>
        </div>


    );

}
export default Curso;