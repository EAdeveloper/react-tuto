import React from 'react';
import {Card, CardText, CardMedia, CardTitle, CardActions} from 'material-ui/Card';
// import {indigo400, redA400, lightBlueA400, amberA400} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import CSSTransition from 'react-transition-group/CSSTransition';




export default class PlaceCard extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			show: true
		}

			// setInterval(()=>this.setState({show: !this.state}), 5000)
	}


	render(){
		return(
			<CSSTransition 
			
				classNames= "fade-scale"
				// in={this.state.show}
				in={this.props.in}
			>
			<div className="col-xs-12 col-sm-4" key={this.props.index}>
		        <Card>
		          <CardMedia>
		            <img alt="not found" src={process.env.PUBLIC_URL + this.props.place.imageUrl} style={{"height": '200px', "width": '400px'}}/>
		          </CardMedia>
		          <CardTitle title={this.props.place.title}> </CardTitle>
		          <CardText>{this.props.place.description}</CardText>
		          <CardActions style={{"textAlign": "right"}}>
		          	<FlatButton secondary={true} 
		          				label="Show more" />
		          	<FlatButton secondary={true} 
		          				label="Hide" 
		          				onClick={()=>this.props.remover(this.props.place)} />
		          </CardActions>
		        </Card>
	      </div>
	      </CSSTransition>
		);
	}


}
