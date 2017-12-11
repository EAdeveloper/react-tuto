import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardText, CardMedia, CardTitle} from 'material-ui/Card';


import {indigo400, redA400, lightBlueA400, amberA400} from 'material-ui/styles/colors';
// When exported by default does not use brackets
import Title from '../components/title';
import data from '../request/places';






export default class Home extends React.Component{

	places(){
	  return data.places.map((place, index)=>{
	    return(
	      <div className="col-xs-12 col-sm-4" key={index}>
	        <Card>
	          <CardMedia>
	            <img src={process.env.PUBLIC_URL + place.imageUrl} style={{"height": '200px', "width": '400px'}}/>
	          </CardMedia>
	          <CardTitle title={place.title}> </CardTitle>
	          <CardText>{place.description}</CardText>
	        </Card>
	      </div>
	    );
	  })
	 }

	render(){
		return(
			<section>
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
	            </div>
	          </div>
	         </div>

		        <div style={{'backgroundColor': indigo400, 'padding': "50px", 'color': 'white'}}>
		          <div><h3 style={{'fontSize': '24px'}}> Popular places </h3> </div>
		          <div className="row">
		             {this.places()}
		           </div>  
		        </div>
	   	 </section>    
		);
	}


}