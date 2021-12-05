import React from "react";
import s from "./NavBarLink.module.css"
import {NavLink} from "react-router-dom";

let NavBarLink = (props) => {
    return (
        <div className={s.link_wrapper}>
            <NavLink className={({ isActive }) => (isActive ? `${s.active} ${s.link}` : `${s.link}`)} to={props.url}>{props.name}</NavLink>
        </div>
    )
}

export default NavBarLink;