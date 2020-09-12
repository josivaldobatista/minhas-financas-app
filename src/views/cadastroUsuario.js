import React from 'react'

import Card from '../components/card'
import FormGroup from '../components/form-group'

class CadastroUsuario extends React.Component {

    state = {
        nome: '',
        email: '',
        senha: '',
        confirmaSenha: ''
    }

    cadastrar = () => {
        console.log(this.state)
    }

    render() {
        return (
            <Card title="Cadastro de Usuário">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <FormGroup label="Nome: *" htmlFor="inputNome">
                                <input type="text" className="form-control" id="inputNome"
                                    onChange={e => this.setState({ nome: e.target.value })} />
                            </FormGroup>
                            <FormGroup label="E-mail: *" htmlFor="inputEmail">
                                <input type="email" id="inputEmail" name="email" className="form-control"
                                    onChange={e => this.setState({ email: e.target.value })} />
                            </FormGroup>
                            <FormGroup label="Senha" htmlFor="inputSenha">
                                <input type="password" id="inputSenha" name="senha" className="form-control"
                                    onChange={e => this.setState({ senha: e.target.value })} />
                            </FormGroup>
                            <FormGroup label="Confirmação Senha" htmlFor="confirmaSenha">
                                <input type="password" id="confirmaSenha" name="confirmaSenha" className="form-control"
                                    onChange={e => this.setState({ confirmaSenha: e.target.value })} placeholder="Repita a senha " />
                            </FormGroup>
                            <button onClick={this.cadastrar} type="button" className="btn btn-primary">Salvar</button>
                            <button type="button" className="btn btn-danger ml-2">Cancelar</button>
                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default CadastroUsuario