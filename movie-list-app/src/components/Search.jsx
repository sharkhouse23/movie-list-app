import React from 'react';

var Search = (props) => (
  <div>
		<input type="text" placeholder="Search.." onChange={props.handleSearch}></input>
		<button type="submit" value="Refresh" onClick={props.handleUndo}>Search Reset</button>
  </div>
);




export default Search;