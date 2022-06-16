export default function () {
    return (
        <div>
            <h1 id='txe'>Minha Conta</h1>


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
                            <label htmlFor="password">Morada</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="morada:"/>
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
                            <label htmlFor="password">Emaill</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="email:"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Editar Perfil</button>


                    </form>
                </div>
            </div>
        </div>
            </div>

    )
}