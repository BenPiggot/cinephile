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
    window.fetch('http://www.omdbapi.com/?s=jaws')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ movies: data.Search })
      })
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <pre><code>Yo {JSON.stringify(this.state.movies)}</code></pre>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));