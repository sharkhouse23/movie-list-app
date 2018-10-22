import React from 'react';
import App from './App.jsx';
import movieData from './exampleMovieData.jsx';

class MovieInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			input: ''
		}
	}

	handleChange(event) {
		var text = event.target.value;
		console.log(text);
		this.setState({
			input: text
		})
	}
	
	render() {
		return (
			<div>
				<input type='text' value={this.state.input} onChange={this.handleChange.bind(this)} />
				<button type='submit' onClick={props.addMovies}>Add a Movie</button>
			</div>
		)
	}
}




export default MovieInput;