import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleWare from "redux-thunk"
import films from "./redusers/films";
import genre from "./redusers/genre";
import videos from "./redusers/video";

const redusers = combineReducers({
  films: films,
  genre: genre,
  videos: videos
})

export let store = createStore(redusers, applyMiddleware(thunkMiddleWare))