import React, {useCallback, useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";

import {getGenreList} from "../store/actions/genre";
import {getVideos} from "../store/actions/video";

import Navbar from "../components/Navbar/Navbar";
import Video from "../components/Video/Video";
import Routes from "../components/Routes/Routes";
import Slider from "../components/Slider/Slider";
import {useLocation, useMatch} from "react-router-dom";
import {getFilms, resetFilms} from "../store/actions/films";

function App() {

  const [itemStyle, setItemStyle] = useState(false)
  const [visibleVideo, setVisibleVideo] = useState(false)

  const videos = useSelector(state => state.videos.videos)
  const genreList = useSelector(({genre}) => genre.genreList)
  const films = useSelector(({films}) => films.films)
  const loading = useSelector(state => state.films.loading)

  const dispatch = useDispatch()

  const {pathname} = useLocation()
  const {params: {genreId} = {}} = useMatch('/genre/:genreId') || {}

  useEffect(() => {
    dispatch(getGenreList())
    dispatch(resetFilms())
    dispatch(getFilms(pathname, genreId))
  }, [pathname])

  useEffect(() => {
    if (!loading) {
      document.addEventListener('scroll', scrollHandler)
      return () => {
        document.removeEventListener('scroll', scrollHandler)
      }
    }
  }, [loading])

  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 40) {
      dispatch(getFilms(pathname, genreId))
    }
  }

  const toogleVideoHandler = useCallback((event) => {
    const newVisibleDialog = !visibleVideo;
    if (newVisibleDialog) {
      dispatch(getVideos(event));
    }
    setVisibleVideo(newVisibleDialog);
  }, [setVisibleVideo, visibleVideo, getVideos]);

  return (
    <div>
      <Slider
        films={films}
        onShow={toogleVideoHandler}
      />
      <Navbar
        itemStyle={itemStyle}
        setItemStyle={setItemStyle}
        genreList={genreList}
        currentPath={pathname}
      />
      <Routes
        itemStyle={itemStyle}
        onShow={toogleVideoHandler}
        films={films} loading={loading}
      />
      {videos.length && visibleVideo ?
        <Video
          visibleVideo={visibleVideo}
          data={videos}
          closeVideo={toogleVideoHandler}
        /> : null
      }
    </div>
  )
}

export default App
