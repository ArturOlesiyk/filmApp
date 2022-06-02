import {filmsAPI} from "../../api/api";
import {GENRE_LIST} from "../../constants/actionTypes";

export const setGenreList = (genreList) => ({type: GENRE_LIST, genreList})

export const getGenreList = () => {
  return (dispatch) => {
    filmsAPI.getGenreList()
      .then(genreList => {
        dispatch(setGenreList(genreList))
      })
  }
}