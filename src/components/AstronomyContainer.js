import React, {Component} from 'react';

import axios from 'axios';
import AstronomyCard from '../components/AstronomyCard';

class AstronomyContainer extends Component {

	constructor() {
		super();
		//initialize state
		this.state = {
			astronomy:[]
		}
	}
	//on mount execute the following 
	componentDidMount() {
		//URL & parameter
		const  api_key = '2InBuBAykONSLTfFJ2O9JA3ZrxpCa33DTBA4X7Uo';
		const path = 'https://api.nasa.gov/planetary/apod?api_key='

		//send GET request
		axios.get(path+api_key)
		.then(response => {
			//set response as our inital state
			this.setState({
				astronomy: response.data
			})

			console.log(this.state.astronomy)
		})
		.catch(error => {
			console.log(error, 'failed to fetch data')
		});
	}

	render() {
		//pass the current state as a prop to child component
		const { astronomy } = this.state;
		return (
			<AstronomyCard apiFetch = { astronomy } />
			)
	}
}

export default AstronomyContainer;

