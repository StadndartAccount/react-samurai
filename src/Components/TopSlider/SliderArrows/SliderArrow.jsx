import React from "react";
import s from "./SliderArrow.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

let SliderArrow = (props) => {
    return (
        <div className={s.slider_arrow}>
            <FontAwesomeIcon icon={props.faIcon} size={props.iconSize}/>
        </div>
    )
}

export default SliderArrow;