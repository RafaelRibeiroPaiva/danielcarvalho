import React from "react";
import Offices from "../spec/Offices";
import AboutUs from "../spec/AboutUs";
import ClientForm from "../spec/ClientForm";

export default class FormCard extends React.Component {
  render() {
    return (
      <div id="form-card">
        <div className="equipa-row">
          <div className={"equipa-box bgg " + (global.isOSX() ? "equipa-box-osx" : "")}>
            <Offices />
          </div>
          <AboutUs />
          <ClientForm />
        </div>
      </div>
    );
  }
}
