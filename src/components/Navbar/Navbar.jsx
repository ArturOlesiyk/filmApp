import React from "react"
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to={'/popular'}>Popular</NavLink>
      <NavLink to={'/top_rated'}>Top Rated</NavLink>
      <NavLink to={'/upcoming'}>Coming soon</NavLink>
    </div>)
}

export default Navbar