import React from "react";
import s from "./SliderElement.module.css"

let SliderElement = (props) => {
    return (
        <div className={s.slider_element}>
            <img className={s.image} src={props.pic}/>
            <div className={s.shadow_layer}/>
            <div className={s.text_block}>
                <div>
                    <h2 className={s.title}>{props.title}</h2>
                    <h4 className={s.date_author}>{props.date} - {props.author}</h4>
                </div>
            </div>
        </div>
    )
}

export default SliderElement;