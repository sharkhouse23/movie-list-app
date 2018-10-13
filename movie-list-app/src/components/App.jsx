import React, {Component} from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import movieData from './exampleMovieData.jsx';
import MovieInput from './MovieInput.jsx';

// import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // console.log(movieData);
    this.state = { 
      movies: movieData,
      input: []
    };
  };

  handleSearch(event) {
    // console.log(event.target.value);
    var input = event.target.value;
    // console.log(input);
   
    var query = this.state.movies.filter((movie) => movie.title.toLowerCase().includes(input));
   // console.log(query);
    this.setState({movies: query});
  }

  handleUndo() {
    this.setState({movies: movieData})
  }

  addMovies() {


  }

  render() {
    return (
      <div>
        <MovieInput addMovies={this.addMovies.bind(this)} />
        <Search handleSearch={this.handleSearch.bind(this)} handleUndo={this.handleUndo.bind(this)} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}





export default App;