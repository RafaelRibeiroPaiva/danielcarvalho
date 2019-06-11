import React from "react";

export default class BannerRow extends React.Component {
  render() {
    return (
      <div id="banner-row">
        <h3 id="banner-text">
          Venha conhecer as nossas soluções{" "}
          <span className="green-text">360º</span>
        </h3>
      </div>
    );
  }
}
