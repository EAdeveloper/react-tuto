import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardText} from 'material-ui/Card';

import {indigo400, redA400, lightBlueA400, amberA400} from 'material-ui/styles/colors';

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
          </div>
         </div>

         <div style={{'background-color': indigo400, 'padding': "50px"}}>
              <ul>
                <Card className="Header-benefits">
                  <CardText>
                    <img src={process.env.PUBLIC_URL + 'images/rate.png' } />
                    <h3>Ratings with emotions</h3> 
                    <p>Rate your places with experiences, not with numbers</p>
                  </CardText> 
                </Card>
                 <Card className="Header-benefits">
                  <CardText>
                    <img src={process.env.PUBLIC_URL + 'images/notinternet.png' } />
                    <h3>Not Internet? Not problems :) </h3> 
                    <p>Places works without Internet</p>
                  </CardText> 
                </Card>
                 <Card className="Header-benefits">
                  <CardText>
                    <img src={process.env.PUBLIC_URL + 'images/favorite.png' } />
                    <h3>Your favorite places </h3> 
                    <p>Define your list of favorite places </p>
                  </CardText> 
                </Card>
              </ul>
            </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
