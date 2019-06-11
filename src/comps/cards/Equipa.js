import React from "react";
import imgs from "../../config/imgs";
import BannerRow from "../spec/BannerRow";

export default class Equipa extends React.Component {
  render() {
    return (
      <div id="equipa">
        <img alt="" src={imgs.imob} className={"background " + (global.isOSX() ? "osx" : "")}/>          
        <div id="daniel-around">
        <div id="equipa-row">
          <h3 id="imov-title">Daniel Carvalho</h3>
          <h4 id="imov-subtitle">Consultor Imobiliário</h4>
          <a
            style={{textDecoration: 'none'}}
            target="_blank"
            rel="noopener noreferrer"
            href="https://decisoesesolucoes.com/consultor/danielcarvalho"
          >
          <div id="imov-button">Descubra as minhas ofertas</div>
          </a>          
        </div>
        <img alt="Daniel Carvalho" src={imgs.daniel} id="daniel"/>
        </div>
        <BannerRow />
      </div>
    );
  }
}