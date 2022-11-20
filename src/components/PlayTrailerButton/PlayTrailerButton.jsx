import React from "react";
import {BsFillPlayCircleFill} from "react-icons/bs";
import style from "./PlayTrailerButton.module.css";

const PlayTrailerButton = ({onShow, filmId, itemStyle}) => {

  if(itemStyle) {
    return (
      <div className={style.buttonWatchNow} onClick={() => onShow(filmId)}>
        Watch Now
      </div>)
  }
  return (
    <div className={style.playButton}>
      <BsFillPlayCircleFill className={style.playIcon} onClick={() => onShow(filmId)}/>
      <div className={style.playText}>PLAY</div>
    </div>
  )
}

export default PlayTrailerButton;