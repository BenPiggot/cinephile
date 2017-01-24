import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMovieDetails } from './actionCreators';
import Header from './Header';

class MovieDetails extends Component {
  findMovie () {
    this.props.movies.filter(m => m.imdbID === this.props.params.id)[0]
  }

  render () {
    let movie;
    if (this.props.movieDetailsStore[this.props.params.id]) {
      movie = this.props.movieDetailsStore[this.props.params.id]
    } else {
      this.props.dispatchGetMovieDetails(this.props.params.id)
      
    }
    if (movie) {
      return (
        <div>
          <Header />
          <div className='container'>
            <h1>{movie.Title} <small>({movie.Year})</small></h1>
            <div className='ink-flex movie-details'>
              <div className='movie-poster'>
                <img src={movie.Poster} />
              </div>
              <p className='movie-plot'>
                {movie.Plot}
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>Loading ...</div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    movieDetailsStore: state.movieDetailsStore
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchGetMovieDetails (id) {
      dispatch(getMovieDetails(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
