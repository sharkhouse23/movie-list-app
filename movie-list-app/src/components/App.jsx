import React, {Component} from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import movieData from './exampleMovieData.jsx'

// import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // console.log(movieData);
    this.state = { 
      movies: movieData
    };
  };

  handleSearch(event) {
    // console.log(event.target.value);
    var input = event.target.value;
    // console.log(input);
   
    var query = this.state.movies.filter((movie) =>   movie.title.toLowerCase().includes(input));
   // console.log(query);
    this.setState({movies: query});

    // if (!this.state.movies.title.include(input)) {
    //   this.setState()
    // }
  }

  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch.bind(this)} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}





export default App;