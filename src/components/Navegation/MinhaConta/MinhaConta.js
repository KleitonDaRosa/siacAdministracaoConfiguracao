import "./MinhaConta.css"

export default function () {
    return (
        <section className=" minhaconta my-2 p-5 ">
            <h6 className="border-bottom border-gray pb-2 mb-0 h4 ">Detalhes da conta</h6>
            <div className="media text-muted pt-3">
                <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                    <strong className="d-block text-gray-dark">Nome:</strong>
                    Admin
                </p>
            </div>
            <div className="media text-muted pt-3">
                <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                    <strong className="d-block text-gray-dark">Morada:</strong>
                    Ribeira de Julhao
                </p>
            </div>
            <div className="media text-muted pt-3">
                <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                    <strong className="d-block text-gray-dark">Telefone:</strong>
                    2325252
                </p>
            </div>
            <div className="media text-muted pt-3">
                <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                    <strong className="d-block text-gray-dark">Senha da conta:</strong>
                    * * * * * * * *
                </p>
            </div>
            <button id="editarperfil" className="btn btn-primary">Editar Perfil</button>
        </section>
    )
}