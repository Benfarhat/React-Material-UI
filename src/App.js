import React, { Component, Fragment } from 'react';
import { Header, Footer } from './components/Layouts'
import Main from './components/Main'
import { domains, prestations } from './store'

import './App.css';

class App extends Component {
  state = {
    prestations,
    currentDomain: 'All'
  }

  setCurrentDomain = domain => {
    
    console.log("set domain to:", domain)
    this.changeState(domain)
  }
  changeState(domain){
    this.setState({
      currentDomain: domain 
    })
  }
  getPrestationsByDomains(){
    let domain = this.state.currentDomain
    if(domain === "All"){
      return this.state.prestations
    } else {
      return this.state.prestations.filter(prestation => (prestation.domain === domain) )  }
    }




  render() {
    return (
      <Fragment>
        <Header />
        <Main prestations={this.getPrestationsByDomains()}/>
        <Footer domains={domains} setCurrentDomain={this.setCurrentDomain}/>
      </Fragment>
    );
  }
}

export default App;
