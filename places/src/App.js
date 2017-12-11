import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// When exported by default does not use brackets
import Title from './components/title';



class App extends Component {
  hello(){
    return "hola bobo";
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title title="Places"> </Title>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
