import React from "react";
import BASE_IMAGE_URL from "../../constants/baseImageUrl";
import noPosterImg from "../../assets/img/no-poster-available.jpg";
import FilmsGenres from "../FilmGenre/FilmsGenres";
import style from "./Slide.module.css";
import ListRating from "../ListRating/ListRating";
import PlayTrailerButton from "../PlayTrailerButton/PlayTrailerButton";

const Slide = ({id, backdrop_path, title, vote_average, overview, genre_ids, release_date = [], onShow}) => {
  const year = release_date.slice(0, 4)

  return (
    <div className={style.item}>
      <img className={style.poster} src={backdrop_path ? BASE_IMAGE_URL + backdrop_path : noPosterImg}/>

      <div className={style.description}>
        <div className={style.leftCase}>
          <div className={style.title}>
            {title}
          </div>

          <div className={style.genres}>
            <FilmsGenres genre_ids={genre_ids}/>
          </div>

          <ListRating vote_average={vote_average}/>

          <div className={style.date}>
            {year}
          </div>

          <PlayTrailerButton
            onShow={onShow}
            filmId={id}
            itemStyle={true}
          />
        </div>
          <div className={style.overview}>
            {overview}
          </div>
      </div>
    </div>
  )
};

export default Slide;