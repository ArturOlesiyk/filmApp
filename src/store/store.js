import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleWare from "redux-thunk"
import films from "./redusers/films";

const redusers = combineReducers({
  films: films
})

export let store = createStore(redusers, applyMiddleware(thunkMiddleWare))