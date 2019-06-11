import React from "react";
import imgs from "../../config/imgs";

export default class OfficesPhone extends React.Component {
  render() {
    return (
      <div className="offices-phone flex-col">
        <div className="flex-col">
          <h5 className="offices-title-phone">Visite o nosso Espaço</h5>
          <img alt="Office1" src={imgs.office1} className="foto-main-phone" />
          <div className="fotos-row-phone">
            <img alt="Office2" src={imgs.office2} className="foto-sec-phone" />
            <img alt="Office3" src={imgs.office3} className="foto-sec-phone" />
          </div>
          <p className="offices-text-phone">Segunda à Sexta</p>
          <p className="offices-text-phone">das 9:30 às 18:30</p>
          <a
            className="maps-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/place/Decis%C3%B5es+e+Solu%C3%A7%C3%B5es+Coimbra/@40.2004491,-8.4329167,17z/data=!3m1!4b1!4m5!3m4!1s0xd22f906426b1e05:0x88f070e595efbc56!8m2!3d40.200445!4d-8.430728"
          >
            <div className="maps-button-phone">
              Localização
              <i className="fa fa-map-marker location-ico-phone" />
            </div>
          </a>
        </div>
      </div>
    );
  }
}
