import { SET_SEARCH_TERM, MOVIE_SEARCH_RESULTS, MOVIE_DETAILS } from './actions'

const DEFAULT_STATE = {
  searchTerm: '',
  movies: [],
  movieDetailsStore: {}
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

const updateMovieDetailsStore = (state, action) => {
  const newMovieDetailsStore = {}
  Object.assign(newMovieDetailsStore, state.movieDetailsStore, { [action.imdbID]: action.details})
  const newState = {}
  Object.assign(newState, state, {movieDetailsStore: newMovieDetailsStore})
  debugger
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return setSearchTerm(state, action)
    case MOVIE_SEARCH_RESULTS:
      return setMovieList(state, action)
    case MOVIE_DETAILS:
      return updateMovieDetailsStore(state, action)
    default:
      return state
  }
}

export default rootReducer;
