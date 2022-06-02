import React, {useEffect, useState} from "react"
import Films from "../components/Films/Films";
import Navbar from "../components/Navbar/Navbar";
import {Route, Routes} from "react-router";
import {POPULAR_FILMS, TOP_RATED_FILMS, UPCOMING_FILMS} from "../constants/filmPath";
import Header from "../components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {getGenreList} from "../store/actions/genre";

function App() {

  const [itemStyle,setItemStyle] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGenreList())
  },[])

  return (
    <div>
      <Header/>
      <Navbar itemStyle={itemStyle} setItemStyle={setItemStyle}/>
      <Routes>
        <Route path='/' element={<Films filmPath={POPULAR_FILMS} itemStyle={itemStyle}/>}/>
        <Route path='/popular' element={<Films filmPath={POPULAR_FILMS} itemStyle={itemStyle}/>}/>
        <Route path='/top_rated' element={<Films filmPath={TOP_RATED_FILMS} itemStyle={itemStyle}/>}/>
        <Route path='/upcoming' element={<Films filmPath={UPCOMING_FILMS} itemStyle={itemStyle}/>}/>
      </Routes>
    </div>
  )
}

export default App
