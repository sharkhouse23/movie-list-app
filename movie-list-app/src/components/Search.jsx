import React from 'react';

var Search = (props) => (
	return (
    <div>
				<input type="text" placeholder="Search.." onChange={props.handleSearch}></input>
				<button type="submit" value="Submit"></button>
    </div>
  );
);




export default Search;