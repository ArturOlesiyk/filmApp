import React, {useState} from "react";
import {BsChevronDown} from 'react-icons/bs'
import {useNavigate} from "react-router-dom";
import style from './GenreSelect.module.css'

const GenreSelect = ({genreList, selectedGenre, setSelectedGenre}) => {

  const navigate = useNavigate()

  const genres = genreList.map(genre =>
    <div key={genre.id}>
      <div className={style.dropdownItem}
        onClick={() => {
        setSelectedGenre(genre.name)
        navigate(`/genre/${genre.id}`)}}>
        {genre.name}
      </div>
    </div>)

  return (
    <div className={selectedGenre == 'Genre' ? style.dropdown : style.activeDropdown}>
        <div className={style.dropdownSelector}>
          <div>{selectedGenre}</div>

          <BsChevronDown className={style.arrow}/>
        </div>
        <div className={style.dropdownContent}>
          {genres}
        </div>
    </div>
  )
}

export default GenreSelect;