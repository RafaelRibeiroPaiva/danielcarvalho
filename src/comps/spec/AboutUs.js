import React from "react";
import imgs from "../../config/imgs";

export default class AboutUs extends React.Component {
    render() {
        return (
            <div id="aboutus" className={global.isOSX() ? "equipa-box-osx" : ""}>
                <h5 id="quem-somos">Quem Somos</h5>
                <img alt="A nossa equipa" id="team-pic" src={imgs.teampic} />
                <p className="quem-text">{somos}</p>
                <p className="quem-text title">Email</p>
                <p className="quem-text">danielcarvalho@dscoimbra.pt</p>
                <p className="quem-text title">Telefone</p>
                <p className="quem-text">969 693 954</p>
            </div>
        );
    }
}

var somos = "A DECISÕES E SOLUÇÕES é uma empresa nacional que presta um serviço de aconselhamento personalizado e independente, a particulares e empresas, com Soluções 360º ao nível da compra, venda e arrendamento de imóveis, bem como ao nível do crédito bancário, seguros, obras de remodelação e construção de casas.";