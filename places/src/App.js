import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// When exported by default does not use brackets
import Title from './components/title';



class App extends Component {

  // get the components props
  constructor(props){
  //send the same props to parent's construtor, in this case is "Component" from where App extends  
  super(props);

  //state is a special object to save data and can udate it while the component is executing 
  this.state ={
    numero: 0
  };
 
}



  render() {
    return (
      <section>
        <div className="Header-background" >
          <div style={{"width":"80%", "margin":"0 auto"}} >
            <div className="Header-main">
                <Title></Title>
                {/*the functio is being updating from the construstor*/}
                <button > Create free account</button>
                <img className='Header-illustration' src={process.env.PUBLIC_URL + "/images/travel.png"}/>
            </div>
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
