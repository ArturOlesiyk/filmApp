import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {BsFillGrid3X3GapFill} from "react-icons/bs";
import {FaThList} from "react-icons/fa";
import GenreSelect from "../GenreSelect/GenreSelect";
import moviePath from '../../constants/moviePath'
import style from './Navbar.module.css';

const Navbar = ({itemStyle, setItemStyle, genreList, currentPath}) => {

  const [selectedGenre, setSelectedGenre] = useState('Genre')

  const selectItemStyle = () =>{
    setItemStyle(!itemStyle)
  }

  return (
    <div className={style.container}>
      {moviePath.map((movie) => (
        <NavLink
          key={movie.id}
          to={`${movie.path}`}
          className={movie.path == currentPath ? style.activeNavLink : style.navLink}
          onClick={() => setSelectedGenre('Genre')}
        >
          {movie.label}
        </NavLink>
      ))}

      <GenreSelect
        genreList={genreList}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />

      <div className={style.switchingStyle}>
        <BsFillGrid3X3GapFill onClick={selectItemStyle}
                              className={itemStyle ? style.active : style.inactive}/>

        <FaThList onClick={selectItemStyle}
                  className={itemStyle ? style.inactive : style.active}/>
      </div>
    </div>)
}

export default Navbar