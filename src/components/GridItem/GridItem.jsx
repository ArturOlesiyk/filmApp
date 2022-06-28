import React, {useState} from 'react';
import BASE_IMAGE_URL from "../../constants/baseImageUrl";
import style from './GridItem.module.css'
import FilmGenre from "../FilmGenre/FilmGenre";
import {BsFillPlayCircleFill} from "react-icons/bs";
import {IoMdClose} from "react-icons/io";

const GridItem = ({films, genreList, onShow}) => {

  const [viewInfo, setViewInfo] = useState(false)

  return (
    <div className={style.itemWrap}>
      {films.map(item =>
        <div className={style.item} key={item.id}>
          <img src={BASE_IMAGE_URL + item.poster_path}/>
          <div className={style.buttons}>
            {!viewInfo ?
              <>
                <div className={style.playBotton}>
                  <BsFillPlayCircleFill className={style.playIcon} onClick={() => onShow(item.id)}/>
                  <div className={style.playText}>PLAY</div>
                </div>
                <div className={style.viewInfo} onClick={() => setViewInfo(!viewInfo)}>
                  <p>View Info</p>
                </div>
              </>
              :
              <div className={style.overview}>
                <IoMdClose className={style.closeOverview}
                           onClick={() => setViewInfo(!viewInfo)}/>
                <p>{item.overview}</p>
              </div>
            }
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
  )
}

export default GridItem;