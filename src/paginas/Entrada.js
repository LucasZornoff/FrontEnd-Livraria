import React from 'react'
import { useHistory} from 'react-router-dom'


function Entrada() {
    const history = useHistory();
    return (
        <div onClick={() => history.push('/livrarias')} className="pagina-principal">
            <div className="conteudo">
                <div className="slogan">
                <h1> Rede Da Leitura </h1>
                <p className="subtitulo">Consulte nossos Livros</p>   
                </div>
            </div>
        </div>
    )
}

export default Entrada;