import React from "react";
import s from "./SocialLink.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

let SocialLink = (props) => {
    return (
        <a className={s.link}>
            <FontAwesomeIcon icon={props.faIcon}/>
        </a>
    )
}

export default SocialLink;