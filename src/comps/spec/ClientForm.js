import React from "react";
import Loading from "react-loading-animation";
import ControlledInput from "../form/ControlledInput/ControlledInput";
import Mailer from "../../config/Mailer";
import "../form/ControlledInput/ControlledInput.css";

export default class ClientForm extends React.Component {
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
        "danielcarvalho@decisoesesolucoes.com",
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
      <div id="client-form">
        <div id="form-bg" className={global.isOSX() ? "equipa-box-osx" : ""}>
          <h5 id="contactus-title">Contacte-me</h5>
          <ControlledInput
            ref={this.rfs.name}
            field="client-div"
            legend="client-legend"
            className="client-input"
            error="error-text"
            type="text"
            text="Nome"
          />
          <ControlledInput
            ref={this.rfs.email}
            field="client-div"
            legend="client-legend"
            className="client-input"
            error="error-text"
            type="text"
            text="Email"
          />
          <ControlledInput
            ref={this.rfs.phone}
            field="client-div"
            legend="client-legend"
            className="client-input"
            error="error-text"
            type="text"
            text="Telefone"
          />
          <p id="priv-statement" className="check-text">
            Autoriza que comuniquemos consigo via email e telefone?
          </p>
          <div
            id="check-box"
            onClick={() => this.setState(prev => ({ checked: !prev.checked }))}
          >
            <div id="contact-checkbox">
              <i
                className={
                  "fa fa-check " + (this.state.checked ? "checked-color" : "")
                }
                id="contact-check"
              />
            </div>
            <p className="check-text">Sim, autorizo</p>
          </div>
          {this.state.sending ? (
            <Loading />
          ) : (
            <div
              id="send-button"
              onClick={() => this.state.checked && this.sendform()}
              className={this.state.checked ? "" : "disabled-button"}
            >
              Enviar
            </div>
          )}
        </div>
      </div>
    );
  }
}
