import React from "react"
import style from './Preloader.module.css'

const Preloader = () => (
  <div className={style.loaderContainer}>
    <div className={style.circleContainer}>
      <div className={style.circle1}></div>
      <div className={style.circle2}></div>
      <div className={style.circle3}></div>
    </div>
    <p className={style.loading}>LOADING</p>
  </div>
)

export default Preloader