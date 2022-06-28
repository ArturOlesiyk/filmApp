import {VIDEOS} from "../../constants/actionTypes"

let initialState = {
  videos: []
}
const videos = (state = initialState, action) => {
  switch (action.type) {
    case VIDEOS: {
      return {
        ...state,
        videos: action.videos
      }
    }
    default:
      return state;
  }
}
export default videos