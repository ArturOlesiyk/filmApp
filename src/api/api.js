import * as axios from "axios"
import API_KEY from "../constants/api";

const initial = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params:{
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
  getGenreList(){
    return initial.get('/genre/movie/list')
      .then(response => {
        return response.data.genres
      })
  },
  getFilmsByGenreId(genre){
    return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre}`)
      .then(response => {
        return response.data.results
      })
  }
}