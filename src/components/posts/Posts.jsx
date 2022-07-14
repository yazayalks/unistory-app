

import React, {useState} from 'react';
import styles from './Posts.module.scss';
import PostItem from "./postItem/PostItem";

const Posts = (props) => {


    let postsElements = props.posts.map((p, index) =>  <PostItem editPost = {props.editPost} deletePost = {props.deletePost} id = {p.id} index = {index + 1} text = {p.text} title ={p.title}  key = {p.id}/>)

    if (!props.posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Посты не найдены!
            </h1>
        )
    }

    return (

            <div className={styles.posts}>
                {postsElements}
            </div>
        );
};

export default Posts;