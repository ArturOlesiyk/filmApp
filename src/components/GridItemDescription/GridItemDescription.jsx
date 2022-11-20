import React from 'react';
import style from './GridItemDescription.module.css';
import FilmsGenres from "../FilmGenre/FilmsGenres";

const GridItemDescription = ({title, genreIds, vote}) => {

  return (
    <div className={style.description}>
      <div className={style.textArea}>
        <div className={style.title}>
          {title}
        </div>

        <div className={style.genres}>
          <FilmsGenres genre_ids={genreIds}/>
        </div>
      </div>

      <div className={style.vote}>
        {vote}
      </div>
    </div>
  );
}

export default GridItemDescription;