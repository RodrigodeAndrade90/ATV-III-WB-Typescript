/* eslint-disable jsx-a11y/anchor-is-valid */
import "./home.css"
import 'materialize-css/dist/css/materialize.min.css'

// IMAGE
import Salao from "../../assets/img/salao.jpg"

export default function Home(props) {
    const estilo = `collection-item active ${props.tema}`
    return (
        <>
        <div className="row">
            <div className="col s12 m12 l6">
                <div className="imgsalao">
                    <img className="logo1" src={Salao} width={600} />
                </div>
            </div>

            <div className="col s12 m12 l6">
                <div className="texto_salao">
                    <h1>Seja Bem Vindo ao Salão WB</h1>
                    <h2>Aqui você pode ter uma administração conjunta de clientes, produtos e serviços, num só site</h2>

                </div>
            </div>

        </div>
        
        </>
    )
}