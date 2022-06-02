import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getFilms} from "../../store/actions/films";
import FilmsItem from "../FilmsItem/FilmsItem";
import style from './Films.module.css'
import ListItem from "../ListItem/ListItem";

const Films = ({filmPath, itemStyle}) => {
  const genreList = useSelector(state => state.genre.genreList)
  const films = useSelector(state => state.films.films)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFilms(filmPath))
  },[filmPath])

  if(itemStyle){
    return (
      <div className={style.filmsContainer}>
        <ListItem films={films} genreList={genreList}/>
      </div>
    )

  }
  return (
    <div className={style.filmsContainer}>
      <FilmsItem films={films} genreList={genreList}/>
    </div>
  )
}

export default Films