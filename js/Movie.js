import React, { Component } from 'react';
import { Link } from 'react-router';

class Movie extends Component {
  render() {
    const { Title, Year, Poster, imdbID } = this.props
    return (
      <div className='movie'> 
        <Link to={`/search/${imdbID}`}>
          <h3>{Title} <small>({Year})</small></h3>
          <img src={Poster} />
        </Link>
      </div>
    )
  }
}

export default Movie;