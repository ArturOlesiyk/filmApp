import {POPULAR_FILMS} from "../../constants/actionTypes"

let initialState = {
  popularFilms:[]
}
const films = (state = initialState, action) => {
  switch (action.type) {
    case POPULAR_FILMS: {
      return {
        ...state,
        popularFilms: action.films
      }
    }
    default:
      return state;
  }
}
export default films