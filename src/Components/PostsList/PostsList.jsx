import React from "react";
import s from "./PostsList.module.css"
import Post from "./Post/Post";

let PostsList = (props) => {

    let posts = props.posts.map(postData => <Post data = {postData}/>)

    return (
        <div className={s.posts_list}>
            {posts}
        </div>
    )
}

export default PostsList;