import React from 'react'

export default class Title extends React.Component{
	render(){
		return(
			<div>
				<h1>Places</h1>
				<p>Descubre lugares de manera simple</p>
			</div>
		);
	}

} 

// ex of element exported without default
// When imported into App.js, Should use brackets
export function hola(){
	return "Hola";
}