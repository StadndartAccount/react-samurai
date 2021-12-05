import React from "react";
import s from "./TopSlider.module.css"
import SliderElement from "./SliderElement/SliderElement";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import SliderArrow from "./SliderArrows/SliderArrow";

let TopSlider = (props) => {

    let sliderElements = props.sliderElements.map(data =>
        <SliderElement
            pic={data.pic}
            title={data.title}
            author={data.author}
            date={data.date}/>)

    return (
        <div className={s.top_slider}>
            <div className={s.elements_wrapper}>
                {sliderElements}
            </div>
            <div className={s.arrows_wrapper}>
                <SliderArrow faIcon={faChevronLeft} iconSize={'2x'}/>
                <SliderArrow faIcon={faChevronRight} iconSize={'2x'}/>
            </div>
        </div>
    )
}

export default TopSlider;