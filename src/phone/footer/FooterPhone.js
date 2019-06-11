import React from "react";

export default class FooterPhone extends React.Component {
  render() {
    return (
      <div className="footer-phone">
        <p className="tm-phone">© Decisões & Soluções Coimbra 2019</p>
        <p className="footer-sep-phone">||</p>
        <a
          className="pdp-phone"
          target="_blank"
          rel="noopener noreferrer"
          href="https://decisoesesolucoes.com/privacy"
        >
          Política de Privacidade
        </a>
      </div>
    );
  }
}
