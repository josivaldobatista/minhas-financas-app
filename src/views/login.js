import React from 'react'

import { withRouter } from 'react-router-dom'
import axios from 'axios'

import Card from '../components/card'
import FormGroup from '../components/form-group'

class Login extends React.Component {

    state = {
        email: '',
        senha: ''
    }

    entrar = () => {
        axios.post('http://localhost:8080/api/usuarios/autenticar', {
            email: this.state.email,
            senha: this.state.senha
        }).then(response => {
            console.log(response)
        }).catch(erro => {
            console.log(erro.response)
        })
    }

    prepareCadastro = () => {
        this.props.history.push('/cadastro-usuarios')
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6" style={{ position: 'relative', left: '300px' }}>
                    <div className="bs-docs-section">
                        <Card title="Login">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                                                <input type="email" className="form-control" id="email"
                                                    value={this.state.email} onChange={e => this.setState({ email: e.target.value })}
                                                    aria-describedby="emailHelp" placeholder="Informe o Email" />
                                            </FormGroup>
                                            <FormGroup label="Senha: *" htmlFor="senha">
                                                <input type="password" className="form-control" id="senha"
                                                    value={this.state.senha} onChange={e => this.setState({ senha: e.target.value })}
                                                    placeholder="Informe a Senha" />
                                            </FormGroup>
                                            <button onClick={this.entrar} className="btn btn-success">Entrar</button>
                                            <button onClick={this.prepareCadastro} className="btn btn-warning ml-2">Cadastrar</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login) 