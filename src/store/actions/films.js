import {filmsAPI} from "../../api/api";
import {POPULAR_FILMS} from "../../constants/actionTypes";

export const setPopularMovies = (films) => ({type: POPULAR_FILMS, films});

export const getPopularMovies = () => {
  return (dispatch) => {
    filmsAPI.getPopular()
      .then(results => {
        dispatch(setPopularMovies(results))
      })
  }
}