import React from "react"
import {MdOutlineStarPurple500} from "react-icons/md";
import style from "./ListRating.module.css"

const ListRating = ({vote_average}) => {

  const roundedVote = Math.round(vote_average)

  const renderStars = () => (Array.from({length: 10}, (v, k) => (
      <MdOutlineStarPurple500 key={k} className={k < roundedVote ? style.completed : style.uncompleted}/>
    )
  ))

  return (
    <div className={style.listContainer}>
      <div className={style.stars}>
        {renderStars()}
      </div>

      <div className={style.rating}>
        {vote_average}
      </div>
    </div>
  )
}

export default ListRating