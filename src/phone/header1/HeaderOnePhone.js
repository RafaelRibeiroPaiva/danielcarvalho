import React from "react";
import imgs from "../../config/imgs";

export default class HeaderOnePhone extends React.Component {
    render() {
        return (
            <div className="h1-phone">
                <img alt="DECISÕES E SOLUÇÕES" className="logo-ds-phone" src={imgs.logosolucoes} />
                <h3 className="gar-phone">Garantimos Soluções à sua Medida</h3>
            </div>
        );
    }
}