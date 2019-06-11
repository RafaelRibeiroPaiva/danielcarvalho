import React from "react";

export default class HomeText extends React.Component {
  render() {
    return (
      <div id="home-text">
        <div id="text-box">
          <h1 className="home-title">Garantimos Soluções à sua Medida</h1>
          <p className="low-text">{lorem}</p>
        </div>
      </div>
    );
  }
}

const lorem =
  "Asseguramos todo o acompanhamento personalizado na escolha e seleção do imóvel que procura, seja ao nível da compra ou até do arrendamento. Garantimos o melhor aconselhamento, através de uma equipa de profissionais qualificados. Se vai comprar casa, não fique sem nos contactar. Temos as melhores soluções do mercado e para além dos nossos imóveis, temos centenas de imóveis da banca em condições únicas, temos imóveis com financiamento a 100% e spreads a partir de 1%, temos imóveis com descontos até 60% e como trabalhamos em parceria com várias imobiliárias em todo o país temos acesso a milhares de imóveis nas melhores condições do mercado. Conte connosco na hora de comprar, vender ou arrendar o seu imóvel.";