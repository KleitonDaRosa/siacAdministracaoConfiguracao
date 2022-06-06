import "./administrarMatriculas.css"

export default function AdministarMatriculas() {
    return (
        <>

            <div id="administrarMatriculas">
                <h2>Administrar Matriculas</h2>

                <form>
                    <label>Curso</label>
                    <select>
                        <option value="">------</option>
                        <option value="LEIT">LEIT</option>
                        <option value="LEIT">LEIT2</option>
                        <option value="LEIT">LEIT2</option>
                        <option value="LEIT">LEIT3</option>
                    </select>

                    <br/>
                    <label>Nome do estudante:</label>
                    <input type="text"/>

                    <label>Código do estudante:</label>
                    <input type="number"/>

                    <br/>
                    <button type="submit" className="submitProcura">Procurar</button>
                </form>
            </div>


        </>
    )

}