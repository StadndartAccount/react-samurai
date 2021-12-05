import s from './App.module.css';
import React from 'react';
import {Route, Routes} from "react-router-dom";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import TopSlider from "./Components/TopSlider/TopSlider";
import PostsList from "./Components/PostsList/PostsList";
import AboutMeBlock from "./Components/AboutMeBlock/AboutMeBlock";
import Pagination from "./Components/Pagination/Pagination";

const App = (props) => {
    return (
        <div className={s.wrapper}>
            <Header/>
            <NavBar/>
            <TopSlider sliderElements={props.state.sliderElements}/>
            <div className={s.main_block}>
                <PostsList posts={props.state.posts}/>
                <div className={s.side_bar}>
                    <AboutMeBlock/>
                </div>
            </div>
            <Pagination/>
        </div>
    );
}

export default App;
