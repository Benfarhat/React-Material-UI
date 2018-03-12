import React, { Component, Fragment } from 'react';
import { Header, Footer } from './components/Layouts'
import Main from './components/Main'
import { domains, prestations } from './store'

import './App.css';

class App extends Component {
  state = {
    prestations
  }

  getPrestationsByDomains(domain = "All"){
    if(domain === "All"){
      return this.state.prestations
    } else {
      return this.state.prestations.filter(prestation => (prestation.domain === domain) )  }
    }

  render() {
    console.log(this.getPrestationsByDomains("prestation-4"))
    return (
      <Fragment>
        <Header />
        <Main />
        <Footer domains={domains}/>
      </Fragment>
    );
  }
}

export default App;
