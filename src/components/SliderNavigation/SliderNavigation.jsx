import React from 'react';
import {BsFillCircleFill} from "react-icons/bs";
import style from './SliderNavigation.module.css';


const SliderNavigation = ({slideIndex, onClick}) => {

  const fiveIndicators = Array.from({length: 5} ,(v,k) => (
   <BsFillCircleFill
    key={k}
    onClick={() => onClick(k)}
    className={slideIndex == k? style.activeSlide : style.inactive}
   />
  ))

  return(
    <div className={style.sliderNavigation}>
      {fiveIndicators}
    </div>
  )

};

export default SliderNavigation;