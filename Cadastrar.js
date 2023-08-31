import React, {useState} from "react";

function Cadastrar(props){
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [ConfirmarSenha, setConfirmarSenha] = useState('')
    
    const onChangeNome = (event) => {
        setNome(event.target.value)
    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const toSave = (event) => {
        event.preventDefault()

    }

    const onChangeSenha = (event) => {
        setSenha(event.target.value)

    }

    const onChangeConfirmarSenha = (event) => {
        setConfirmarSenha(event.target.velue)

    }


    return(
        <div className="row p-2">
            <div className="col md-4 p-2"></div>
            <div className="col md-4 p-2">
                <div className="card bg-primary text-white">
                    <div className="card-header text-center">
                        <h4 className="card-text">Cadastrar</h4>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="nome" className="form-control-label">Nome:</label>
                                <input
                                    type="text"
                                    id="title"
                                    className="form-control"
                                    value={nome}
                                    onChange={onChangeNome}
                                />
                            </div>
                            <div className="form-group">
                                <abel htmlFor="email" className="form-control-label">E-mail:</abel>
                                <textarea
                                    name="description"
                                    id="description"
                                    cols="30"
                                    rows="5"
                                    className="form-control"
                                    value={email}
                                    onChange={onChangeEmail}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="senha" className="form-control-label">Senha:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={senha}
                                    onChange={onChangeSenha}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmar-senha" className="form-control-label">Confirmar Senha:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={senha}
                                    onChange={onChangeConfirmarSenha}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-outline-light-circle btn-lg" onClick={toSave}>Cadastrar</button>
                    </div>
                </div>
            </div>
           <div className="col md-4 p-2"></div>
         </div>

    )
}

export default Cadastrar;