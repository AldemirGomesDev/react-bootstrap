import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './ui/style.css';
import NavBar from './ui/NavBar';
import Footer from './ui/Footer';
import Home from './container/Home';

class App extends Component {
  render() {
    const logo = 'Dev-Aldemir'
    return (
      <div className="container-fluid p-0">
        <NavBar logo={logo} />
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

export default App;
