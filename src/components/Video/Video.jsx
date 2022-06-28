import React from "react"
import style from './Video.module.css'
import Preloader from "../Proloader/Preloader";

const Video = ({data, closeVideo, visibleVideo}) => {

  const trailer = data.find(vid => vid.name === 'Official Trailer')
  const key = trailer ? trailer.key : data[0].key

  return (
    <div className={!visibleVideo ? style.modalOverlayOff : style.modalOverlayOn} onClick={closeVideo}>
      <div className={style.modalWindow}>
        {key ?
        <div className={style.videoContainer}>
          <iframe src={`https://www.youtube.com/embed/${key}`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen={true}
          />
        </div>
        :
        <Preloader/>}
      </div>
    </div>
  )
}

export default Video