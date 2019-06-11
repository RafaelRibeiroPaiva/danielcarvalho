import React from "react";
import Loading from "react-loading-animation";
import ControlledInput from "../../comps/form/ControlledInput/ControlledInput";
import Mailer from "../../config/Mailer";

export default class ClientFormPhone extends React.Component {
  constructor(props) {
    super(props);

    this.state = { checked: false, sending: false };

    this.sendform = this.sendform.bind(this);

    this.rfs = {
      name: React.createRef(),
      email: React.createRef(),
      phone: React.createRef()
    };
  }

  sendform() {
    var name = this.rfs.name.current.getValue();
    var email = this.rfs.email.current.getValue();
    var phone = this.rfs.phone.current.getValue();
    if (name && email && phone) {
      this.setState({ sending: true });
      Mailer.sendmail(
        "rafael@paiva.it",
        "Form Credito",
        "Nome:" +
          name +
          "\nEmail:" +
          email +
          "\nTelefone:" +
          phone,
        ""
      ).then(() => {
        this.setState({ sending: false });
        alert("Contacto Enviado!");
      });
    }   
  }

  render() {
    return (
      <div className="client-form-phone flex-col">
          <h5 className="offices-title-phone">Contacte-me</h5>
          <ControlledInput
            ref={this.rfs.name}
            field="client-div-phone"
            legend="client-legend-phone"
            className="client-input-phone"
            error="error-text-phone"
            type="text"
            text="Nome"
          />
          <ControlledInput
            ref={this.rfs.email}
            field="client-div-phone"
            legend="client-legend-phone"
            className="client-input-phone"
            error="error-text-phone"
            type="text"
            text="Email"
          />
          <ControlledInput
            ref={this.rfs.phone}
            field="client-div-phone"
            legend="client-legend-phone"
            className="client-input-phone"
            error="error-text-phone"
            type="text"
            text="Telefone"
          />
          <p className="priv-stat-phone">
            Autoriza que comuniquemos consigo via email e telefone?
          </p>
          <div
            className="check-box-phone"
            onClick={() => this.setState(prev => ({ checked: !prev.checked }))}
          >
            <div className="contact-checkbox-phone">
              <i
                className={
                  "fa fa-check   " + (this.state.checked ? "checked-color contact-check-phone" : "contact-check-phone")
                }
              />
            </div>
            <p className="check-text-phone">Sim, autorizo</p>
          </div>
          {this.state.sending ? (
            <Loading />
          ) : (
            <div
              onClick={() => this.state.checked && this.sendform()}
              className={this.state.checked ? "send-button-phone" : "disabled-button send-button-phone"}
            >
              Enviar
            </div>
          )}
        </div>
    );
  }
}
