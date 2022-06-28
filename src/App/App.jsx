import React, {useCallback, useEffect, useState} from "react"
import Films from "../components/Films/Films";
import Navbar from "../components/Navbar/Navbar";
import {Route, Routes} from "react-router";
import {POPULAR_FILMS, TOP_RATED_FILMS, UPCOMING_FILMS} from "../constants/filmPath";
import Header from "../components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {getGenreList} from "../store/actions/genre";
import Video from "../components/Video/Video";
import {getVideos} from "../store/actions/video";

function App() {

  const [itemStyle, setItemStyle] = useState(false)
  const [visibleVideo, setVisibleVideo] = useState(false)

  const videos = useSelector(state => state.videos.videos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGenreList())
  }, [])

  const toogleVideoHandler = useCallback((event) => {
    const newVisibleDialog = !visibleVideo;

    if (newVisibleDialog) {
      dispatch(getVideos(event));
    }
    setVisibleVideo(newVisibleDialog);
  }, [setVisibleVideo, visibleVideo, getVideos]);

  return (
    <div>
      <Header/>
      <Navbar itemStyle={itemStyle} setItemStyle={setItemStyle}/>
      <Routes>
        <Route path='/'
               element={<Films filmPath={POPULAR_FILMS} itemStyle={itemStyle} onShow={toogleVideoHandler}/>}/>
        <Route path='/popular'
               element={<Films filmPath={POPULAR_FILMS} itemStyle={itemStyle} onShow={toogleVideoHandler}/>}/>
        <Route path='/top_rated'
               element={<Films filmPath={TOP_RATED_FILMS} itemStyle={itemStyle} onShow={toogleVideoHandler}/>}/>
        <Route path='/upcoming'
               element={<Films filmPath={UPCOMING_FILMS} itemStyle={itemStyle} onShow={toogleVideoHandler}/>}/>
      </Routes>
      {videos.length && visibleVideo ?
        <Video visibleVideo={visibleVideo} data={videos} closeVideo={toogleVideoHandler}/> : null
      }
    </div>
  )
}

export default App
