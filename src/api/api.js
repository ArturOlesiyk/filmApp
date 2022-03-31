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
  getPopular(page) {
    return initial.get(`movie/popular`)
      .then(response => {
        return response.data.results
      })
  },
}