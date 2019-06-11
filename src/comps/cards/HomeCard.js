import React from "react";
import imgs from "../../config/imgs";
import LogoRow from "../spec/LogoRow.js";
import HomeText from "../spec/HomeText.js";

export default class HomeCard extends React.Component {
    render() {
        return (
            <div id="home-card">
                <img
                    alt=""
                    src={imgs.homecardbg}
                    className={"background " + (global.isOSX() ? "osx" : "")}
                />
                <HomeText />
                <LogoRow />
            </div>
        );
    }
}
