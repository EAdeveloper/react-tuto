import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

// When exported by default does not use brackets
import Title from './components/title';
import './App.css';




class App extends Component {

  // get the components props
  // constructor(props){
  //send the same props to parent's construtor, in this case is "Component" from where App extends  
  // super(props);
  // }



  render(){
      return (
      <MuiThemeProvider>
        <div className="Header-background" >
          <div style={{"width":"80%", "margin":"0 auto"}} >
            <div className="Header-main">
                <Title></Title>
                {/*the functio is being updating from the construstor*/}
                <RaisedButton label= "Create free account" primary={true}/>
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
      </MuiThemeProvider>
    );
  }
}

export default App;
