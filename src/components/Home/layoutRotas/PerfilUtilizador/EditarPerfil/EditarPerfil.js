export default function () {
    return (
        <div id="perfilDeUtilizador">
            <div>
                <h1 id='txe'>Editar Perfil Perfil</h1>

                <div className="container d-flex justify-content-center">
                    <div className="card mt-5 w-50">
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="nickName">Nome Completo</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nickName"
                                        placeholder="nome completo :" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Telefone</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Tel:"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Email</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="email::"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Moradal</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="local:"/>
                                </div>
                                <div>
                                    <div className="form-group">
                                        <label htmlFor="password">Senha Antiga</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="......."/>

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Nova Senha</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="nova senha:"/>

                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Repetir Senha</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder=":"/>

                                    </div>
                                    <button type="submit" className="btn btn-primary">Recuperar Senha</button>
                                </div>
                                <div>
                                    <button type="submit" className="btn btn-primary">Cancelar</button>
                                    <button type="submit" className="btn btn-primary">Guardar</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}