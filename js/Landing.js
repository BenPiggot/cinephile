import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchTerm, getMovieList } from './actionCreators';
import Header from './Header';

class Landing extends Component {
  constructor() {
    super();
  }

  handleSearchTermChange(e) {
    this.props.dispatchSetSearchTerm(e.target.value)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.dispatchGetMovieList(this.props.searchTerm)
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <h1>Cinephile</h1>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type='text' 
              placeholder='Choose a search term'
              onChange={this.handleSearchTermChange.bind(this)}
              value={this.props.searchTerm} />
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm,
    movies: state.movies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetSearchTerm (value) {
      dispatch(setSearchTerm(value))
    },

    dispatchGetMovieList (value) {
      dispatch(getMovieList(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);