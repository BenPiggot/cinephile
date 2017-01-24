import 'whatwg-fetch';
import { SET_SEARCH_TERM, MOVIE_SEARCH_RESULTS, MOVIE_DETAILS } from './actions';
import { browserHistory } from 'react-router';

export function setSearchTerm (searchTerm) {
  return { type: SET_SEARCH_TERM, searchTerm }
}

export function addMovieList (movies) {
  return { type: MOVIE_SEARCH_RESULTS, movies: movies }
}

export function getMovieList (searchTerm) {
  return function (dispatch, getState) {
    fetch(`http://www.omdbapi.com/?s=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(addMovieList(data.Search))
        browserHistory.push('/search')
      })
  }
}

export function addMovieDetails (details, imdbID) {
  return { type: MOVIE_DETAILS, details: details, imdbID: imdbID }
}

export function getMovieDetails (id) {
  return function (dispatch, getState) {
    fetch(`http://www.omdbapi.com/?i=${id}&plot=full&tomatoes=true`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, id)
        dispatch(addMovieDetails(data, id))

      })
  }
}