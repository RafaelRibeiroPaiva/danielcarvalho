import React from "react";

export default class MidBanner extends React.Component {
    render() {
        return (
            <a
                    style={{textDecoration: 'none'}}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://decisoesesolucoes.com/consultor/danielcarvalho"
                >
                <div className="mid-banner-phone">
                    Descubra as minhas ofertas
                </div>
            </a>
        );
    }
}