import React from "react";
import s from "./Post.module.css"
import SocialLink from "../../SocialLink/SocialLink";
import {faFacebookF, faTwitter, faPinterestP, faVimeoV, faInstagram, faVk} from "@fortawesome/free-brands-svg-icons";

let Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.image_wrapper}>
                <img className={s.main_image} src={props.data.mainImage}/>
            </div>
            {/*<button className={s.like_btn}>{props.data.likesCount}</button>*/}
            <a className={s.title}>{props.data.title}</a>
            <div className={s.post_information}>
                <img className={s.avatar} src={props.data.authorAvatar}/>
                <span className={s.author}>{props.data.authorName}</span>
                <div className={s.marker}/>
                <span className={s.date}>{props.data.date}</span>
                <div className={s.marker}/>
                <span className={s.tag}>{props.data.tag}</span>
                <div className={s.marker}/>
            </div>
            <p className={s.description}>{props.data.description}</p>
            <div className={s.post_bottom}>
                <div className={s.social_links}>
                    <SocialLink faIcon={faTwitter}/>
                    <SocialLink faIcon={faFacebookF}/>
                    <SocialLink faIcon={faPinterestP}/>
                    <SocialLink faIcon={faVimeoV}/>
                    <SocialLink faIcon={faInstagram}/>
                    <SocialLink faIcon={faVk}/>
                </div>
                <div className={s.dotted_line}/>
            </div>
        </div>
    )
}

export default Post;