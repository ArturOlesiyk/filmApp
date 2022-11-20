import React, {useEffect, useState} from "react";
import Slide from "../Slide/Slide";
import Preloader from "../Proloader/Preloader";
import SliderNavigation from "../SliderNavigation/SliderNavigation";
import style from './Slider.module.css';

const SLIDES_NUMBER = 5;

const Slider = ({films, onShow}) => {

  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    const slideTimeOut = setTimeout(() =>
      setSlideIndex((prevSlide) =>
        (prevSlide + 1) % SLIDES_NUMBER), 7000);

    return () => {
      clearTimeout(slideTimeOut)
    };
  }, [slideIndex, setSlideIndex]);

  const sliderFilms = films.slice(0, SLIDES_NUMBER)

  if(!sliderFilms){
    console.log("load")
    return (<Preloader/>)
  }

  return (
    <div className={style.slider}>
      <Slide
        {...sliderFilms[slideIndex]}
        onShow={onShow}
      />
      <SliderNavigation
        slideIndex={slideIndex}
        onClick={setSlideIndex}
      />
    </div>
  )

};

export default Slider;