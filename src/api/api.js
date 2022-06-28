import * as axios from "axios"
import API_KEY from "../constants/api";

const initial = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: API_KEY,
    language: "en-US"
  }
})

export const filmsAPI = {
  getFilms(filmType, page) {
    return initial.get(filmType)
      .then(response => {
        return response.data.results
      })
  },
  getGenreList() {
    return initial.get('/genre/movie/list')
      .then(response => {
        return response.data.genres
      })
  },
  getFilmsByGenreId(genre) {
    return initial.get(`/discover/movie`, {
      params: {
        with_genres: genre
      }
    })
      .then(response => {
        return response.data.results
      })
  },
  getVideos(movieId) {
    return initial.get(`/movie/${movieId}`, {
      params: {
        append_to_response: 'videos'
      }
    })
      .then(response => {
        return response.data.videos.results
      })
  }
}