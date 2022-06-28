import React, {useEffect, useState} from "react"
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getGenreList} from "../../store/actions/genre";
import {getFilmsByGenreId} from "../../store/actions/films";
import GenreSelect from "../GenreSelect/GenreSelect";
import style from './Navbar.module.css'
import {BsFillGrid3X3GapFill} from "react-icons/bs";
import {FaThList} from "react-icons/fa";

const Navbar = ({itemStyle, setItemStyle}) => {

  const dispatch = useDispatch()
  const genreList = useSelector(state => state.genre.genreList)

  const onClickFilmsByGenreId = (genre) => {
    dispatch(getFilmsByGenreId(genre))
  }

  return (
    <div className={style.container}>
      <NavLink to={'/popular'}>Popular</NavLink>
      <NavLink to={'/top_rated'}>Top Rated</NavLink>
      <NavLink to={'/upcoming'}>Coming soon</NavLink>
      <GenreSelect genreList={genreList}
                   onClickFilmsByGenreId={onClickFilmsByGenreId}/>
      <div className={style.switchingStyle}>
        <BsFillGrid3X3GapFill onClick={() => setItemStyle(false)}
                              className={itemStyle ? style.active : style.inactive}/>
        <FaThList onClick={() => setItemStyle(true)}
                  className={itemStyle ? style.inactive : style.active}/>
      </div>
    </div>)
}

export default Navbar