import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getFilms} from "../../store/actions/films";
import FilmsItem from "../FilmsItem/FilmsItem";
import style from './Films.module.css'

const Films = ({filmPath}) => {
  const films = useSelector(state => state.films.films)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFilms(filmPath))
  },[])
  useEffect(()=>{
    dispatch(getFilms(filmPath))
  })

  return (
    <div className={style.filmsContainer}>
      {films.map(film => <FilmsItem key={film.id} image={film.poster_path}/>
      )}
    </div>
  )
}

export default Films