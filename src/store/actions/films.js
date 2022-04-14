import {filmsAPI} from "../../api/api";
import {FILMS} from "../../constants/actionTypes";

export const setFilms = (films) => ({type: FILMS, films})

export const getFilms = (filmType) => {
  return (dispatch) => {
    filmsAPI.getFilms(filmType)
      .then(results => {
        dispatch(setFilms(results))
      })
  }
}