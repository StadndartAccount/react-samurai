import React from "react";
import s from "./Pagintaion.module.css"
import {NavLink} from "react-router-dom";
import Page from "./Page/Page";

let Pagination = (props) => {
    return (
        <div className={s.pagination}>
            <Page pageNumber={1}/>
            <Page pageNumber={2}/>
            <Page pageNumber={3}/>
            <Page pageNumber={4}/>
        </div>
    )
}

export default Pagination;