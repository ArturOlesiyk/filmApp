import React, {useState} from 'react';
import BASE_IMAGE_URL from "../../constants/baseImageUrl";
import {IoMdClose} from "react-icons/io";
import noPosterImg from '../../assets/img/no-poster-available.jpg';
import GridItemDescription from "../GridItemDescription/GridItemDescription";
import PlayTrailerButton from "../PlayTrailerButton/PlayTrailerButton";
import style from './GridItem.module.css';

const GridItem = ({films, onShow, itemStyle}) => {
  const [viewInfo, setViewInfo] = useState(false)

  return (
    <div className={style.itemWrap}>
      {films.map(item =>
        <div className={style.item} key={item.id}>
          <img src={item.poster_path ? BASE_IMAGE_URL + item.poster_path : noPosterImg}/>

          <div className={style.buttons}>
            {!viewInfo ?
              <>
                <PlayTrailerButton onShow={onShow} filmId={item.id} itemStyle={itemStyle}/>

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
          <GridItemDescription title={item.title}
                               genreIds={item.genre_ids}
                               vote={item.vote_average}/>
        </div>
      )}
    </div>
  )
}

export default GridItem;