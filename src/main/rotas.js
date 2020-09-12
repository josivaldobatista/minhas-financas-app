import React from 'react'

import Login from '../views/login'
import Cadastrousuario from '../views/cadastroUsuario'

import { Route, Switch, HashRouter, Router } from 'react-router-dom'

function Rotas() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/cadastro-usuarios" component={Cadastrousuario} />
            </Switch>
        </HashRouter>
    )
}

export default Rotas