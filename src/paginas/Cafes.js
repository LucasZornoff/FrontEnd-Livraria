import React, { useEffect, useState } from 'react'
import api from '../servicos/api'
import { useLocation } from 'react-router-dom'
import { useHistory} from 'react-router-dom'

function Cafes() {
    const locate = useLocation();
    const history = useHistory();
    const [cafeterias, setCafeterias] = useState([])
    const [livrariaId, setLivrariaId] = useState()

    useEffect(() => {
        const { state } = locate;
        setLivrariaId(state)
        api.get(`livrarias/${state}`).then(resposta => {
            console.log('Respostas', resposta)
            setCafeterias(resposta.data.cafeteria)
        })
    }, [])

    return (
        <div className="row3">
            {
                cafeterias && cafeterias.map(cafeteria => {
                    return (
                        <div className="card2" key={cafeteria.id}>
                            <h2> {cafeteria.cafe} </h2>
                            <p> Descrição: {cafeteria.descricao} </p>
                        </div>
                    )
                })
            }
            <button onClick={() => history.push('/livrarias')} className="botaocafeteria">
                Voltar
            </button>
            
            <button onClick={() => history.push('/livros', livrariaId)} className="botaocafeteria">
                Livros
            </button>

            
        </div>
    )
}

export default Cafes