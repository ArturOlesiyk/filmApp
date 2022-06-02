import React from "react"
import style from "./ListRating.module.css"
import {MdOutlineStarPurple500} from "react-icons/md";

const ListRating = ({vote_avarage}) => {

  const roundedVote = Math.round(vote_avarage)

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
        {vote_avarage}
      </div>
    </div>
  )
}

export default ListRating