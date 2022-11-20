import React from "react";
import style from './FilmsGenres.module.css';
import {useSelector} from "react-redux";

const FilmsGenres = ({genre_ids = []}) => {
  const genreList = useSelector(({genre}) => genre.genreList)

  const mainGenres = genre_ids.slice(0, 2);
  const genres = genreList.filter(genre => mainGenres.every(genre2 => genre2 !== genre.id));
  const genresFinalFiltered = genreList.filter(genre => genres.every(genre2 => genre2.id !== genre.id));

  return (
    <div className={style.genresWrap}>
        {genresFinalFiltered.map(genre =>
          <div key={genre.id} className={style.genres}>
            {genre.name}
          </div>
        )}
    </div>
  );
}

export default FilmsGenres;