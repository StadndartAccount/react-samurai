import React from "react";
import s from "./SearchBtn.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

let SearchBtn = (props) => {
    return (
        <div className={s.search_btn}>
            <FontAwesomeIcon icon={faSearch}/>
        </div>
    )
}

export default SearchBtn;