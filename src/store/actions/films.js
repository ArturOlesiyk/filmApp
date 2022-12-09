import {filmsAPI} from "../../api/api";
import {CONCAT_FILMS, RESET_FILMS, SET_LOADING_STATUS} from "../../constants/actionTypes";

const routesMap = {
  '/': '/popular',
  '/filmApp/': '/popular',
  '/popular': '/popular',
  '/top_rated': '/top_rated',
  '/upcoming': '/upcoming'
}

const setFilms = (films) => ({type: CONCAT_FILMS, films})
export const resetFilms = () => ({type: RESET_FILMS})

export const getFilms = (filmType, genreId) => {
  return (dispatch, getState) => {
    const {films: {currentPage}} = getState()
    const pureRoute = routesMap[filmType]
    console.log('getFilms')
  dispatch({type: SET_LOADING_STATUS, loading: true})

    if (genreId) {
      filmsAPI.getFilmsByGenreId(genreId, currentPage)
        .then(results => {
          dispatch(setFilms(results))
          dispatch({type: SET_LOADING_STATUS, loading: false})
        })
    } else {
      filmsAPI.getFilms(pureRoute, currentPage)
        .then(results => {
          dispatch(setFilms(results))
          dispatch({type: SET_LOADING_STATUS, loading: false})
        })
    }
  }
}
