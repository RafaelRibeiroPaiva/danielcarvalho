import React, { Component } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import HomeCard from './comps/cards/HomeCard';
import Equipa from './comps/cards/Equipa';
import Footer from './comps/spec/Footer';
import FormCard from './comps/cards/FormCard';
import MobileVersion from './phone/MobileVersion';
import './App.css';
import './comps/spec/spec.css';

class App extends Component {
  render() {
    return (
      <div>
      <BrowserView>
      <div id="app" className={global.isOSX() ? "osx" : ""}>
        <HomeCard />
        <Equipa />
        <FormCard />
        <Footer />
      </div>
      </BrowserView>
      <MobileView>
        <MobileVersion />
      </MobileView>
      </div>
    );
  }
}

export default App;
