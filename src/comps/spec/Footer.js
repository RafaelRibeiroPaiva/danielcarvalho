import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <p id="tm">© Decisões & Soluções Coimbra 2019</p>
        <p id="footer-sep">||</p>
        <a
          id="pdp"
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
