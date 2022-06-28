import {filmsAPI} from "../../api/api";
import {VIDEOS} from "../../constants/actionTypes";

export const setVideos = (videos) => ({type: VIDEOS, videos})

export const getVideos = (movieId) => {
  return (dispatch) => {
    filmsAPI.getVideos(movieId)
      .then(videos => {
        dispatch(setVideos(videos))
      })
  }
}