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
                            <p><label>Nome do Serviço:</label> Escova Progressiva</p>
                            <p><label>Descrição:</label> Cabelo Feminino</p>
                            <p><label>Quantidade:</label> 1</p>
                        </div>

                        <div className="row">
                            <div className="col s6 center">
                                <a class="btn waves-effect  pink accent-4" href="/atualizarServico">Atualizar</a>
                            </div>

                            <div className="col s6 center">
                                <a class="btn waves-effect  pink accent-4" href="#">Excluir</a>

                            </div>
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

                        <div className="row">
                            <div className="col s6 center">
                                <a class="btn waves-effect  pink accent-4" href="/atualizarServico">Atualizar</a>
                            </div>

                            <div className="col s6 center">
                                <a class="btn waves-effect  pink accent-4" href="#">Excluir</a>

                            </div>
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

                        <div className="row">
                            <div className="col s6 center">
                                <a class="btn waves-effect  pink accent-4" href="/atualizarServico">Atualizar</a>
                            </div>

                            <div className="col s6 center">
                                <a class="btn waves-effect  pink accent-4" href="#">Excluir</a>

                            </div>
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

                        <div className="row">
                            <div className="col s6 center">
                                <a class="btn waves-effect  pink accent-4" href="/atualizarServico">Atualizar</a>
                            </div>

                            <div className="col s6 center">
                                <a class="btn waves-effect  pink accent-4" href="#">Excluir</a>

                            </div>
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    )
}