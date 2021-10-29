import React, { useEffect, useState } from 'react'
import api from '../servicos/api'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useHistory} from 'react-router-dom'

function Estante() {
    const locate = useLocation();
    const history = useHistory();
    const [livros, setLivros] = useState([])
    const [livrariaId, setLivrariaId] = useState()

    useEffect(() => {
        const { state } = locate;
        setLivrariaId(state)
        api.get(`livrarias/${state}`).then(resposta => {
            console.log('Respostas', resposta)
            setLivros(resposta.data.livro)
        })
    }, [])

    return (
        <div className="row2">
            {
                livros && livros.map(livro => {
                    return (
                        <div className="card2" key={livro.id}>
                            <h2> {livro.nome} </h2>
                            <p> Genero: {livro.genero} </p>
                            <p> R$: {livro.preco} </p>
                            <p> Tipo: {livro.tipo} </p>
                            <span> Autor: {livro.autor} </span>
                        </div>
                    )
                })
            }
            <button onClick={() => history.push('/livrarias')}  className="botaocafeteria">
                Voltar
            </button>

            <button onClick={() => history.push('/cafeteria', livrariaId)} className="botaocafeteria">
                Cafeteria
            </button>

        </div>
    )
}

export default Estante