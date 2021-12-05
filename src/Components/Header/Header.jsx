import React from "react";
import s from "./Header.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF, faTwitter, faPinterestP, faVimeoV, faInstagram, faVk} from "@fortawesome/free-brands-svg-icons";
import SocialLink from "../SocialLink/SocialLink";
import SearchBtn from "./SearchBtn/SearchBtn";

let Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.social_links}>
                <SocialLink faIcon={faTwitter}/>
                <SocialLink faIcon={faFacebookF}/>
                <SocialLink faIcon={faPinterestP}/>
                <SocialLink faIcon={faVimeoV}/>
                <SocialLink faIcon={faInstagram}/>
                <SocialLink faIcon={faVk}/>
            </div>
            <div className={s.logo_wrapper}>
                <img className={s.logo_image} src={'/logo.png'}/>
            </div>
            <div className={s.search_wrapper}>
                <SearchBtn/>
            </div>
        </header>
    )
}

export default Header;