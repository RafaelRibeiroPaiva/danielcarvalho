import React from "react";
import PhoneHome from "./home/PhomeHome";
import HeaderOnePhone from "./header1/HeaderOnePhone";
import OfficesPhone from "./offices/OfficesPhone";
import MidBanner from "./midbanner/MidBanner";
import ClientFormPhone from "./clientform/ClientFormPhone";
import FooterPhone from "./footer/FooterPhone";
import "./Phone.css"

export default class MobileVersion extends React.Component {
    render() {
        return (
        <div>
            <PhoneHome />
            <HeaderOnePhone />
            <OfficesPhone />
            <MidBanner />
            <ClientFormPhone />
            <FooterPhone />
        </div>
        );
    }
}