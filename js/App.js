import React, { Component } from 'react';
import { render } from 'react-dom';
import Movie from './Movie';

class App extends Component {
  constructor() {
    super();

    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?s=jaws')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ movies: data.Search })
      })
  }

  render() {
    return (
      <div className="container">
        <h1>Cinephile</h1>
        <div className="ink-flex">
          { this.state.movies.map(movie => <Movie {...movie} />) }
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));