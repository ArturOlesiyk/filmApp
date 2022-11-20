import React from 'react';
import FilmsGenres from "../FilmGenre/FilmsGenres";
import ListRating from "../ListRating/ListRating";
import BASE_IMAGE_URL from "../../constants/baseImageUrl";
import noPosterImg from '../../assets/img/no-poster-available.jpg'
import PlayTrailerButton from "../PlayTrailerButton/PlayTrailerButton";
import style from './ListItem.module.css'

const ListItem = ({films, onShow}) => {

  return (
    <div className={style.itemWrap}>
      {films.map(item =>
        <div className={style.item} key={item.id}>
          <img src={item.backdrop_path ? BASE_IMAGE_URL+item.backdrop_path : noPosterImg}/>

          <div className={style.description}>
            <div className={style.title}>
              {item.title}
            </div>

            <div className={style.genres}>
              <FilmsGenres genre_ids={item.genre_ids}/>
            </div>

            <div className={style.vote}>
              <ListRating vote_average={item.vote_average}/>
            </div>

            <div className={style.overview}>
              <p>{item.overview}</p>
            </div>

            <PlayTrailerButton filmId={item.id} onShow={onShow} itemStyle={true}/>
          </div>
        </div>
      )}
    </div>
  )
}

export default ListItem;