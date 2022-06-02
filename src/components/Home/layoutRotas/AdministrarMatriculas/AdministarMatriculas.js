import "./administrarMatriculas.css"

export default function AdministarMatriculas(){
    return(
        <div id="administrarMatriculas">
            <form>
                <h2>Administrar Matriculas</h2>

                <div>
                    <div>
                        <label>Curso</label>
                        <select>
                            <option value="">------</option>
                            <option value="LEIT">LEIT</option>
                            <option value="LEIT">LEIT2</option>
                            <option value="LEIT">LEIT2</option>
                            <option value="LEIT">LEIT3</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label>Estado da matricula</label>
                    <select>
                        <option value="">------</option>
                        <option value="Matriculado">Matriculado</option>
                        <option value="nao matriculado">Nao matriculado</option>
                    </select>
                </div>
            </form>
        </div>
    )

}