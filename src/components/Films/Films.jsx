import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";
import {getFilms, resetFilms} from "../../store/actions/films";
import GridItem from "../GridItem/GridItem";
import ListItem from "../ListItem/ListItem";
import style from './Films.module.css'
import Preloader from "../Proloader/Preloader";

const Films = ({itemStyle, onShow, loading, genreList, films}) => {

  if (itemStyle) {
    return (
      <div className={style.filmsContainer}>
        <ListItem films={films} genreList={genreList} onShow={onShow} itemStyle={itemStyle}/>
        {loading && <Preloader/>}
      </div>
    )
  }
  return (
    <div className={style.filmsContainer}>
      <GridItem films={films} genreList={genreList} onShow={onShow} itemStyle={itemStyle}/>
      {loading && <Preloader/>}
    </div>
  )
}

export default Films;