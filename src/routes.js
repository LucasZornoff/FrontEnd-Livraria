import React from 'react'
import Entrada from './paginas/Entrada'
import Padrao from './paginas/Padrao'
import Cafes from './paginas/Cafes'
import Estante from './paginas/Estante'
import { BrowserRouter, Route } from 'react-router-dom'

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Entrada} />
            <Route path="/livrarias" component={Padrao} />
            <Route path="/livros" component={Estante} />
            <Route path="/cafeteria" component={Cafes} />
        </BrowserRouter>
    )
}

export default Routes