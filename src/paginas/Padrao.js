import React, { useEffect, useState } from 'react'
import api from '../servicos/api'
import {useHistory}from 'react-router-dom'

function Padrao() {
    const history = useHistory()
    const [livrarias, setLivrarias] = useState([])
    useEffect(() => {
        api.get('livrarias/retornatodas').then(resposta => {
            console.log('Respostas', resposta)
            setLivrarias(resposta.data)
        })
    }, [])

    return (
        <div className="row">
            {
                livrarias.map(livraria => {
                    return (
                        <div onClick={() => history.push('/livros', livraria.id)} className="card" key={livraria.id}>
                            <h2> {livraria.nome} </h2>
                            <p> {livraria.franquia} </p>
                            <span> {livraria.local} </span>
                        </div>
                    )
                })
            
            }
        </div>
    )
}

export default Padrao