import {GENRE_LIST} from "../../constants/actionTypes"

let initialState = {
  genreList: []
}
const films = (state = initialState, action) => {
  switch (action.type) {
    case GENRE_LIST: {
      return {
        ...state,
        genreList: action.genreList
      }
    }
    default:
      return state;
  }
}
export default films