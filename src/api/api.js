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
}