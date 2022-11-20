import {CONCAT_FILMS, RESET_FILMS, SET_LOADING_STATUS} from "../../constants/actionTypes"

let initialState = {
  films: [],
  currentPage: 1,
  loading: false
}
const films = (state = initialState, action) => {
  switch (action.type) {
    case CONCAT_FILMS: {
      return {
        ...state,
        films: [...state.films,...action.films],
        currentPage: state.currentPage + 1
      }
    }
    case RESET_FILMS: {
      return {
        ...state,
        films: [],
        currentPage: 1
      }
    }
    case SET_LOADING_STATUS: {
      return {
        ...state,
        loading: action.loading
      }
    }
    default:
      return state;
  }
}
export default films