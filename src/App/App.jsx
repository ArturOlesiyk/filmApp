import React from "react"
import Films from "../components/Films/Films";
import Navbar from "../components/Navbar/Navbar";
import {Route, Routes} from "react-router";
import {POPULAR_FILMS, TOP_RATED_FILMS, UPCOMING_FILMS} from "../constants/filmPath";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Films filmPath={POPULAR_FILMS}/>}/>
        <Route path='/popular' element={<Films filmPath={POPULAR_FILMS}/>}/>
        <Route path='/top_rated' element={<Films filmPath={TOP_RATED_FILMS}/>}/>
        <Route path='/upcoming' element={<Films filmPath={UPCOMING_FILMS}/>}/>
      </Routes>
    </div>
  )
}

export default App
