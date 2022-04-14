import React from 'react';
import BASE_IMAGE_URL from "../../constants/baseImageUrl";
import style from './FilmsItem.module.css'

const FilmsItem = ({image}) => {
  return (
    <div className={style.itemWrap}>
      <img src={BASE_IMAGE_URL + image}/>
    </div>
  )
}

export default FilmsItem;