import React from "react";
import imgs from "../../config/imgs";

export default class Offices extends React.Component {
  render() {
    return (
      <div id="offices">
        <div className="fotos-grid">
          <h5 id="offices-title">Visite o nosso Espaço</h5>
          <img alt="" src={imgs.office1} className="foto-main" />
          <div className="fotos-row">
            <img alt="" src={imgs.office2} className="foto-sec" />
            <img alt="" src={imgs.office3} className="foto-sec" />
          </div>
          <p className="offices-text">Segunda à Sexta</p>
          <p className="offices-text">das 9:30 às 18:30</p>
          <a
            id="maps-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/place/Decis%C3%B5es+e+Solu%C3%A7%C3%B5es+Coimbra/@40.2004491,-8.4329167,17z/data=!3m1!4b1!4m5!3m4!1s0xd22f906426b1e05:0x88f070e595efbc56!8m2!3d40.200445!4d-8.430728"
          >
            <div id="maps-button">
              Localização
              <i className="fa fa-map-marker location-ico" />
            </div>
          </a>
        </div>
      </div>
    );
  }
}
