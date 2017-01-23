import 'whatwg-fetch';
import { SET_SEARCH_TERM, MOVIE_SEARCH_RESULTS } from './actions'

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
      })
  }
}