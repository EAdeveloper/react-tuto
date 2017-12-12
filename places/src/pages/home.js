import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';



import {indigo400} from 'material-ui/styles/colors';
// When exported by default does not use brackets
import Title from '../components/title';
import data from '../request/places';
import Benefits from '../components/benefits';
import  PlaceCard from '../components/places/placeCard'
import TransitionGroup from 'react-transition-group/TransitionGroup';


export default class Home extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			places: []
		}

		setTimeout(()=>this.setState({places: data.places}), 3000)

	   	// Reassing the fucn to avoid loss its vlaues when it gets into placeCard component
		this.hidePLace = this.hidePLace.bind(this);
	}

	places(){
	  return this.state.places.map((place, index)=>{
	    // remover, place and indes are custom props to pass the func or data to the placeCard component module
	    return(
	     <PlaceCard remover={this.hidePLace} place={place} index={index}> </PlaceCard>
	    );
	  })
	 }

	 hidePLace(place){
	 	this.setState({
	 		// filter() make a iteration for elements 
	 		places: this.state.places.filter(el => el !== place)
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
	                <img alt="not found" className='Header-illustration' src={process.env.PUBLIC_URL + "/images/travel.png"}/>
	            </div>
	            <div>
	               <Benefits> </Benefits>
	            </div>
	          </div>
	         </div>

		        <div style={{'backgroundColor': indigo400, 'padding': "50px", 'color': 'white'}}>
		          <div><h3 style={{'fontSize': '24px'}}> Popular places </h3> </div>
		          <TransitionGroup className="row">
		             {this.places()}
		           </TransitionGroup>  
		        </div>
	   	 </section>    
		);
	}


}