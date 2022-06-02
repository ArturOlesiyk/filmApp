import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleWare from "redux-thunk"
import films from "./redusers/films";
import genre from "./redusers/genre";

const redusers = combineReducers({
  films: films,
  genre: genre
})

export let store = createStore(redusers, applyMiddleware(thunkMiddleWare))