import React from 'react';
import BASE_IMAGE_URL from "../../constants/baseImageUrl";
import style from './ListItem.module.css'
import FilmGenre from "../FilmGenre/FilmGenre";
import {BsFillPlayCircleFill} from "react-icons/bs";
import ListRating from "../ListRating/ListRating";

const ListItem = ({films, genreList, onShow}) => {
  return (
    <div className={style.itemWrap}>
      {films.map(item =>
        <div className={style.item} key={item.id}>
          <img src={BASE_IMAGE_URL + item.backdrop_path}/>
          <div className={style.description}>
            <div className={style.title}>
              {item.title}
            </div>
            <div className={style.genres}>
              <FilmGenre genre_ids={item.genre_ids} genreList={genreList}/>
            </div>
            <div className={style.vote}>
              <ListRating vote_avarage={item.vote_average}/>
            </div>
            <div className={style.overview}>
              <p>{item.overview}</p>
            </div>
            <button className={style.buttonWatchNow} onClick={() => onShow(item.id)}>
              Watch Now
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ListItem;