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
            <div>
               <ul>
                <Card className="Header-benefits">
                  <CardText>
                    <div className='row'>
                      <div className='Header-benefits-img' style={{'background-color':redA400}}>
                          <img src={process.env.PUBLIC_URL + 'images/rate.png' } />
                      </div>
                      <div className='Header-benefits-content'> 
                        <h3>Ratings with emotions</h3> 
                        <p>Rate your places with experiences, not numbers</p>
                      </div>
                    </div>
                  </CardText> 
                </Card>

                 <Card className="Header-benefits">
                  <CardText>
                    <div className='row'>
                      <div className='Header-benefits-img' style={{'background-color':lightBlueA400}}>
                          <img src={process.env.PUBLIC_URL + 'images/notinternet.png' } />
                      </div>
                      <div className='Header-benefits-content'> 
                        <h3>Not Internet? Not problems :) </h3> 
                        <p>Places works without Internet or trought slow connections</p>
                      </div>
                    </div>
                  </CardText> 
                </Card>

                 <Card className="Header-benefits">
                  <CardText>
                    <div className='row'>
                      <div className='Header-benefits-img' style={{'background-color':amberA400}}>
                          <img src={process.env.PUBLIC_URL + 'images/favorite.png' } />
                      </div>
                      <div className='Header-benefits-content'> 
                        <h3>Your favorite places </h3> 
                        <p>Define your list of favorite places around the world  </p>
                      </div>
                    </div>
                  </CardText> 
                </Card>
              </ul>
            </div>
          </div>
         </div>

        <div style={{'background-color': indigo400, 'padding': "50px"}}>
             
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
