import React, {Component} from 'react';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'

// import '../styles/App.css';

// var movies = [
//   {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'}
// ];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      movies: [
        'Mean Girls',
        'Hackers',
        'The Grey',
        'Sunshine',
        'Ex Machina'
      ],
      result: []
    };
  };

  componentDidMount() {
    this.setState({result: this.state.movies});
  }

  runSearch(input) {
    var movieArr = this.state.movies;
    var matchArr = [];

    var func = function(input) {
      for (var i = 0; i < movieArr.length; i++) {
        if (movieArr[i].includes(input)) {
          matchArr.push(movieArr[i]);
        }
      }
      this.setState({result: matchArr})
    }
    func();
  }

  render() {
    return (
      <div>
        <Search runSearch={this.runSearch.bind(this)} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}





export default App;