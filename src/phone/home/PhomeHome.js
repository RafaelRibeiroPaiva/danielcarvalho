import React from "react";
import imgs from "../../config/imgs";



export default class PhoneHome extends React.Component {
    render() {
        return (
            <div className="flex-col fullscreen-phone relative">
                <img alt="" className="bg-phone-home" src={imgs.imob}/>
                <img alt="Daniel Carvalho" src={imgs.daniel} className="daniel-phone"/>
                <h3 className="dscoimbra-phone">DSCOIMBRA</h3>
                <h5 className="sols360-phone">SOLUÇÕES 360º</h5>
                <div className="daniel-text-box">
                <h5 className="daniel-name-phone">Daniel Carvalho</h5>
                <h4 className="daniel-sub-phone">Consultor Imobiliário</h4>
                <a
                    style={{textDecoration: 'none'}}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://decisoesesolucoes.com/consultor/danielcarvalho"
                >
                    <div className="daniel-but-phone">Descubra as minhas ofertas</div>
                </a>
                </div>
            </div>
    );
    }
}