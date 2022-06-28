import React, {useState} from "react";
import style from './GenreSelect.module.css'
import {BsChevronDown} from 'react-icons/bs'

const GenreSelect = ({genreList, onClickFilmsByGenreId}) => {

  const [selectedGenre, setSelectedGenre] = useState('Genre')

  const genres = genreList.map(genre =>
    <li key={genre.id}>
      <a onClick={() => {
        setSelectedGenre(genre.name)
        onClickFilmsByGenreId(genre.id)
      }}>{genre.name}</a>
    </li>)

  return (
    <div className={style.wrapper}>
      <nav className={style.menu}>
        <div className={style.menuList}>
          <a>{selectedGenre}</a>
          <BsChevronDown className={style.arrow}/>
        </div>
        <ul className={style.subMenuList}>
          {genres}
        </ul>
      </nav>
    </div>
  )
}

export default GenreSelect;