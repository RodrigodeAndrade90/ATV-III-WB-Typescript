/* eslint-disable jsx-a11y/anchor-is-valid */
import "./listaProduto.css"
import M from 'materialize-css'
import { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css'

export default function ListaProduto(props) {
    const estilo = `collection-item active ${props.tema}`
    useEffect(() => {
        M.AutoInit()
    }, [])
    return (
        <div className="collections">
            <h1 className="">Lista de Produtos</h1>
            <ul className="collapsible popout">

                <li>
                    <div className="collapsible-header ">Produto 1</div>
                    <div className="collapsible-body">
                        <div className="col s12 z-depth-6 card-panel">
                            <p><label>Nome do Produto:</label> Gel</p>
                            <p><label>Descrição:</label> Gel para cabelo</p>
                            <p><label>Quantidade:</label> 2 </p>
                        </div>

                        <div className="row">
                            <div className="col s6 center">
                                <a class="btn waves-effect  pink accent-4" href="/atualizarProduto">Atualizar</a>
                            </div>

                            <div className="col s6 center">
                                <a class="btn waves-effect  pink accent-4" href="#">Excluir</a>

                            </div>
                        </div>
                    </div>
                </li>

                <li>
                    <div className="collapsible-header ">Produto 2</div>
                    <div className="collapsible-body">
                        <div className="col s12 z-depth-6 card-panel">
                            <p><label>Nome do Produto:</label></p>
                            <p><label>Descrição:</label></p>
                            <p><label>Tipo:</label></p>
                        </div>

                        <div className="row">
                            <div className="col s6 center">
                                <a class="btn waves-effect  pink accent-4" href="/atualizarProduto">Atualizar</a>
                            </div>

                            <div className="col s6 center">
                                <a class="btn waves-effect  pink accent-4" href="#">Excluir</a>

                            </div>
                        </div>
                    </div>
                </li>

                <li>
                    <div className="collapsible-header ">Produto 3</div>
                    <div className="collapsible-body">
                        <div className="col s12 z-depth-6 card-panel">
                            <p><label>Nome do Produto:</label></p>
                            <p><label>Descrição:</label></p>
                            <p><label>Tipo:</label></p>
                        </div>

                        <div className="row">
                            <div className="col s6 center">
                                <a class="btn waves-effect  pink accent-4" href="/atualizarProduto">Atualizar</a>
                            </div>

                            <div className="col s6 center">
                                <a class="btn waves-effect  pink accent-4" href="#">Excluir</a>

                            </div>
                        </div>
                    </div>
                </li>

                <li>
                    <div className="collapsible-header ">Produto 4</div>
                    <div className="collapsible-body">
                        <div className="col s12 z-depth-6 card-panel">
                            <p><label>Nome do Produto:</label></p>
                            <p><label>Descrição:</label></p>
                            <p><label>Tipo:</label></p>
                        </div>

                        <div className="row">
                            <div className="col s6 center">
                                <a class="btn waves-effect  pink accent-4" href="/atualizarProduto">Atualizar</a>
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