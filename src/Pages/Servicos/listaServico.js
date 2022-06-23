/* eslint-disable jsx-a11y/anchor-is-valid */
import "./listaServico.css"
import M from 'materialize-css'
import { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css'

export default function ListaServico(props) {
    const estilo = `collection-item active ${props.tema}`
    useEffect(() => {
        M.AutoInit()
    }, [])
    return (
        <div className="collections">
            <h1 className="">Lista de Serviços</h1>
            <ul className="collapsible popout">

                <li>
                    <div className="collapsible-header ">Serviço 1</div>
                    <div className="collapsible-body">
                        <div className="col s12 z-depth-6 card-panel">
                            <p><label>Nome do Serviço:</label></p>
                            <p><label>Descrição:</label></p>
                            <p><label>Tipo:</label></p>
                        </div>
                    </div>
                </li>

                <li>
                    <div className="collapsible-header ">Serviço 2</div>
                    <div className="collapsible-body">
                        <div className="col s12 z-depth-6 card-panel">
                            <p><label>Nome do Serviço:</label></p>
                            <p><label>Descrição:</label></p>
                            <p><label>Tipo:</label></p>
                        </div>
                    </div>
                </li>

                <li>
                    <div className="collapsible-header ">Serviço 3</div>
                    <div className="collapsible-body">
                        <div className="col s12 z-depth-6 card-panel">
                            <p><label>Nome do Serviço:</label></p>
                            <p><label>Descrição:</label></p>
                            <p><label>Tipo:</label></p>
                        </div>
                    </div>
                </li>

                <li>
                    <div className="collapsible-header ">Serviço 4</div>
                    <div className="collapsible-body">
                        <div className="col s12 z-depth-6 card-panel">
                            <p><label>Nome do Serviço:</label></p>
                            <p><label>Descrição:</label></p>
                            <p><label>Tipo:</label></p>
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    )
}