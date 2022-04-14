import {FILMS} from "../../constants/actionTypes"

let initialState = {
  films:[]
}
const films = (state = initialState, action) => {
  switch (action.type) {
    case FILMS: {
      return {
        ...state,
        films: action.films
      }
    }
    default:
      return state;
  }
}
export default films