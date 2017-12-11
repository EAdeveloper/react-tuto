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
      <section>
        <div>
          <div>
            <Title></Title>
            <button> Create free account</button>
            <img src={process.env.PUBLIC_URL + "/images/travel.png"} height="300" />
            <div>
              <ul>
                <li>
                  <h3>Ratings with emotions</h3> 
                  <p>Rate your places with experiences, not with numbers</p>
                </li>
                  <li>
                  <h3>Not Internet? Not problems :) </h3> 
                  <p>Places works without Internet</p>
                </li>
                 <li>
                  <h3>Your favorite places </h3> 
                  <p>Define your list of favorite places </p>
                </li>
              </ul>
            </div>
          </div>
         </div> 
      </section>
    );
  }
}

export default App;
