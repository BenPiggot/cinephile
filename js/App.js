import React, { Component } from 'react';
import { render } from 'react-dom';

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
      <div className="ink-grid">
        <h1>Cinephile</h1>
        { this.state.movies.map(movie => {
          return (
            <div>
              <h3>{movie.Title} <small>({movie.Year})</small></h3>
            </div>
          )
        })}
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));