import React from "react"
import style from './Header.module.css'
import {RiMovie2Fill} from "react-icons/ri";

const Header = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.logoContainer}>
        <RiMovie2Fill className={style.icon}/>
        <span className={style.logo}>GOOD FILMS</span>
      </div>
    </div>
  )
}

export default Header