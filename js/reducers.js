import { SET_SEARCH_TERM, MOVIE_SEARCH_RESULTS } from './actions'

const DEFAULT_STATE = {
  searchTerm: '',
  movies: []
}

const setSearchTerm = (state, action) => {
  const newState = {}
  Object.assign(newState, state, { searchTerm: action.searchTerm })
  return newState
}

const setMovieList = (state, action) => {
  const newState = {}
  Object.assign(newState, state, { movies: action.movies })
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    case MOVIE_SEARCH_RESULTS:
      return setMovieList(state, action)
    default:
      return state
  }
}

export default rootReducer;
