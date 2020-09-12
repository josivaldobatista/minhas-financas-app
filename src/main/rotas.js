import React from 'react'

import Login from '../views/login'
import Home from '../views/home'
import Cadastrousuario from '../views/cadastroUsuario'

import { Route, Switch, HashRouter } from 'react-router-dom'

function Rotas() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/cadastro-usuarios" component={Cadastrousuario} />
            </Switch>
        </HashRouter>
    )
}

export default Rotas