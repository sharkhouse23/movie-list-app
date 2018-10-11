import React from 'react';

var MovieList = (props) => {
  return (
    <div className="movie-titles">
    	{
    		props.movies.map(function(movie) {
    			return <div className="movie-title">{movie}</div>
    		})
    	}
    </div>
  );
};










export default MovieList;
