import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';



import {indigo400} from 'material-ui/styles/colors';
// When exported by default does not use brackets
import Title from '../components/title';
import data from '../request/places';
import Benefits from '../components/benefits';
import  PlaceCard from '../components/places/placeCard'





export default class Home extends React.Component{

	places(){
	  return data.places.map((place, index)=>{
	    return(
	     <PlaceCard place={place} index={index}> </PlaceCard>
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
	               <Benefits> </Benefits>
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