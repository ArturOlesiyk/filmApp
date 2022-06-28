import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getFilms} from "../../store/actions/films";
import GridItem from "../GridItem/GridItem";
import style from './Films.module.css'
import ListItem from "../ListItem/ListItem";

const Films = ({filmPath, itemStyle, onShow}) => {

  const genreList = useSelector(state => state.genre.genreList)
  const films = useSelector(state => state.films.films)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getFilms(filmPath))
  }, [filmPath])

  if (itemStyle) {
    return (
      <div className={style.filmsContainer}>
        <ListItem films={films} genreList={genreList} onShow={onShow}/>
      </div>
    )
  }
  return (
    <div className={style.filmsContainer}>
      <GridItem films={films} genreList={genreList} onShow={onShow}/>
    </div>
  )
}

export default Films