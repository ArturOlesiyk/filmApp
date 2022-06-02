import React from 'react';
import BASE_IMAGE_URL from "../../constants/baseImageUrl";
import style from './FilmsItem.module.css'
import FilmGenre from "../FilmGenre/FilmGenre";
import {BsFillPlayCircleFill} from "react-icons/bs";

const FilmsItem = ({films, genreList}) => {
  return (
    <div className={style.itemWrap}>
      {films.map(item =>
        <div className={style.item} key={item.id}>
          <img src={BASE_IMAGE_URL + item.poster_path}/>
          <div className={style.buttons}>
            <div className={style.playBotton}>
              <BsFillPlayCircleFill className={style.playIcon}/>
              <div className={style.playText}>PLAY</div>
            </div>
            <div className={style.viewInfo}>
              <p>View Info</p>
            </div>
          </div>
          <div className={style.description}>
            <div className={style.textArea}>
              <div className={style.title}>
                {item.title}
              </div>
              <div className={style.genres}>
                <FilmGenre genre_ids={item.genre_ids} genreList={genreList}/>
              </div>
            </div>
            <div className={style.vote}>
              {item.vote_average}
            </div>
          </div>
        </div>
      )}
    </div>

    /*<div className={style.itemWrap}>
      <img src={BASE_IMAGE_URL + image}/>
      <div className={style.title}>
        {title}
      </div>
      <div>
        {rating}
      </div>
    </div>*/
  )
}

export default FilmsItem;