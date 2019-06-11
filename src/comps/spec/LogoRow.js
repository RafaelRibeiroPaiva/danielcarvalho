import React from "react";
import imgs from "../../config/imgs";

export default class LogoRow extends React.Component {
    render() {
        return (
            <div id="logo-row">
                <h3 id="logo-coimbra">DSCOIMBRA</h3>
                <img alt="DECISÕES E SOLUÇÕES" id="logo-sols" src={imgs.logosolucoes} />
                <h3 id="logo-sol-360">SOLUÇÕES <span className="green-text">360º</span></h3>
            </div>
        );
    }
}