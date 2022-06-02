import React from "react";
import style from './FilmGenre.module.css'

const FilmGenre = ({genre_ids, genreList}) =>{

  const mainGenres = genre_ids.slice(0,3)

  const genres = genreList.filter(genre => mainGenres.every(genre2 => genre2 !== genre.id))
  const genres2 = genreList.filter(genre => genres.every(genre2 => genre2.id !== genre.id))

  return(
    <div className={style.genres}>
      <ol>
        {genres2.map(genre =>
          <li key={genre.id}>
            {genre.name}
          </li>
        )}
      </ol>
    </div>
  )
}

export default FilmGenre