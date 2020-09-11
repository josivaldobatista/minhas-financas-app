import React from 'react'

import Card from '../components/card'
import FormGroup from '../components/form-group'
 
class Login extends React.Component {
    render() {
        return(
        <div className="container">
            <div className="row">
                 <div className="col-md-6" style={{position: 'relative', left:'300px'}}>
                    <div className="bs-docs-section">
                        <Card title="Login">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label="Email: *" htmlFor="email">
                                                <input type="email" className="form-control" id="email" 
                                                    aria-describedby="emailHelp" placeholder="Informe o Email" />
                                            </FormGroup>
                                            <FormGroup label="Senha: *" htmlFor="senha">
                                                <input type="password" className="form-control" id="senha" 
                                                    placeholder="Informe a Senha" />
                                            </FormGroup>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                 </div>
            </div>
        </div>
        )
    }
}

export default Login 