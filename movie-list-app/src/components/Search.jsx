import React from 'react';

var Search = (props) => {
  return (
    <div>
    	{
    		<form>
				<input type='text' placeholder="Search.." value={input} onChange={runSearch(input)}/>
				<button type="submit" value="Submit"></button>
				</form>
    	}
    </div>
  );
};




export default Search;