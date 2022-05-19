
function FormularioAdicionarCursos(){
    return(
        <div className="formulario-criar-curso">
            <form>

                <h2 className="subtitulo">Novo Curso</h2>
                <div>
                    <div className ='new-expense__controls'>
                        <div className='new-expense__control'>
                            <label>ID Curso</label>
                            <input type='text'></input>
                        </div>
                    </div>


                    <div className ='new-expense__controls'>
                        <div className='new-expense__control'>
                            <label>Estado do Curso</label>
                            Ativado<input type='radio' value="Activado" name="Ativado"></input>
                            Desativado<input type='radio' value="Desativado"></input>
                        </div>
                    </div>

                    <div className='new-expense__control'>
                        <label>Adicionar Coordenador</label>
                        <select>
                            <option value="">---Escolhe um Coordenador---</option>
                            <option value="Sidnei Cruz">Docente-Sidnei Cruz</option>
                            <option value="JandirMedina">Jandir Medina</option>
                            <option value="Jose Neves">Jose Neves</option>
                            <option value="Joao Do Monte">Joao Do Monte</option>
                        </select>
                    </div>

                    <div className='new-expense__control'>
                        <label>Numero de Semestres</label>
                        <input type='number' min='1' max='10' step='1'></input>
                    </div>
                </div>
            </form>


            <div className="button-div">
                <div className='new-expense__control'>
                    <button className="button-adicionar">Adicionar</button>
                    <button className="button-cancelar">Cancelar</button>
                </div>
            </div>





        </div>
    );




}export default FormularioAdicionarCursos;