import React from 'react';

var MovieInput = (props) => (
	<div>
		<input type="text" placeholder="Add movie..." onChange={props.addMovies}></input>

	</div>
);




export default MovieInput;