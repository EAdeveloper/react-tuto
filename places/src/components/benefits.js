import React from 'react';
import {Card, CardText, CardMedia, CardTitle} from 'material-ui/Card';
import {indigo400, redA400, lightBlueA400, amberA400} from 'material-ui/styles/colors';





export default class Benefit extends React.Component{

	render(){
		return(
			<ul>
                <Card className="Header-benefits">
                  <CardText>
                    <div className='row'>
                      <div className='Header-benefits-img' style={{'backgroundColor':redA400}}>
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
                      <div className='Header-benefits-img' style={{'backgroundColor':lightBlueA400}}>
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
                      <div className='Header-benefits-img' style={{'backgroundColor':amberA400}}>
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
		);
	}
}