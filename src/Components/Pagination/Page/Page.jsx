import React from "react";
import s from "./Page.module.css"
import {NavLink} from "react-router-dom";

let Page = (props) => {
    return (
        <NavLink className={({isActive}) => isActive ? `${s.page} ${s.active}` : `${s.page}`} to={`/${props.pageNumber}`}>{props.pageNumber}</NavLink>
    )
}

export default Page;