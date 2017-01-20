import React, { Component } from 'react';

class Movie extends Component {
  render() {
    const { Title, Year, Poster } = this.props
    return (
      <div className='movie'> 
        <h3>{Title} <small>({Year})</small></h3>
        <img src={Poster} />
      </div>
    )
  }
}

export default Movie;