import React from 'react';

var MovieList = (props) => (
    <div className="movie-titles">
    	{
    		props.movies.map(function(movie) {
    			return <div className="movie-title">{movie.title}</div>
    		})
    	}
    </div>
);










export default MovieList;
