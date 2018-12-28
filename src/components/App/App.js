import React, { Component } from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Routes from '../Routes';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
       <Routes />
        <Footer />
      </div>
    );
  }
}

export default App;
