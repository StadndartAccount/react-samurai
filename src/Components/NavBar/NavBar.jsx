import React from "react";
import s from "./NavBar.module.css"
import NavBarLink from "./NavBarLink/NavBarLink";

let NavBar = (props) => {
    return (
        <div className={s.top_nav_bar}>
                <div className={s.wrapper}>
                    <div className={s.links_wrapper}>
                        <NavBarLink name={'Home'} url={'/home'}/>
                        <NavBarLink name={'Single Post'} url={'/single-post'}/>
                        <NavBarLink name={'About'} url={'/about'}/>
                    </div>
                    <div className={s.logo_wrapper}>
                        <span className={s.site_name}>Blog</span>
                    </div>
                    <div className={s.links_wrapper}>
                        <NavBarLink name={'Page 1'} url={'/home1'}/>
                        <NavBarLink name={'Page 2'} url={'/single-post1'}/>
                        <NavBarLink name={'Page 3'} url={'/about1'}/>
                    </div>
                </div>
                <div className={s.marker}/>
        </div>
    )
}

export default NavBar;