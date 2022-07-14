import React, {useState} from 'react';
import styles from './App.module.scss';

import {BrowserRouter} from "react-router-dom";
import Posts from "../posts/Posts";
import CreateForm from "../createForm/CreateForm";
import Modal from "../modal/Modal";

import MyButton from "../button/MyButton";
import MyInput from "../input/MyInput";
import EditForm from "../editForm/EditForm";


function App() {
    const [posts, setPosts] = useState( [
        {id: "1", title : "Первый пост", text : "Текст первого поста"},
        {id: "2", title : "Второй пост", text : "Текст второго поста"},
        {id: "3", title : "Третий пост", text : "Текст третьего поста"},
        {id: "4", title : "Четыёртый пост", text : "Текст четвёртого поста"},
        {id: "5", title : "Пятый пост", text : "Текст пятого поста"},
        {id: "6", title : "Шестой пост", text : "Текст шестого поста"},
        {id: "7", title : "Седьмой пост", text : "  Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
                " Alias aliquid doloremque expedita, facilis hic impedit in iure nisi non nulla " +
                " quaerat quas rem reprehenderit sed tenetur ullam veritatis. Voluptate."},
        {id: "8", title : "Это идёт уже восьмой пост", text : "Lorem ipsum dolor sit amet, consectetur adipisicing " +
                "elit. Alias, cumque dignissimos, dolore eveniet, fuga incidunt obcaecati perspiciatis placeat quos " +
                "rem sapiente similique voluptas! A aperiam aut dignissimos dolore ea esse exercitationem explicabo " +
                "illo inventore ipsam magnam maxime nesciunt nisi nobis non numquam perferendis, praesentium quod" +
                " unde voluptates? Explicabo fugit quidem quod? Architecto dignissimos distinctio eos expedita " +
                "maxime numquam quis ratione repudiandae rerum voluptate! Amet aspernatur debitis delectus " +
                "distinctio dolorem ea eius, esse expedita explicabo in labore quam qui sint totam vero. At " +
                "dolore doloribus eos esse, itaque iusto, laborum minus molestias pariatur quibusdam sint" +
                "voluptates. Incidunt neque, tempora. Deserunt, vel."},
        {id: "x", title : "Сбился со счёта", text : "Текст неизвестного поста"},
        {id: "10", title : "Вспомнил это десятый пост", text : "Текст десятого поста"},
        {id: "11", title : "eleven пост", text : "Текст поста одиноких единиц"},
        {id: "12", title : "Просто пост", text : "Текст простого поста"},
        {id: "13", title : "Плохой пост", text : "Всегда не люил этот номер"},

    ])
    const [modal, setModal] = useState(false);

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
    }

    const editPost = (title, text, id) => {
        const postsList = posts.map(p => {
            // if this task has the same ID as the edited task
            if (id === p.id) {
                //
                return {...p, title: title, text : text}
            }
            return p;
        });
        setPosts(postsList);
        setModal(false)
    }

    const deletePost = (deletePostId) => {

        setPosts(posts.filter(p => p.id !== deletePostId))
    }

    return (
        <BrowserRouter>
            <div style = {{textAlign : 'center'}}>
                <h1>Список постов</h1>
            </div>

            <Modal visible={modal} setVisible={setModal}>
                <CreateForm createPost ={createPost}/>
            </Modal>
        <div className={styles.app}>



                <Posts editPost={editPost} deletePost={deletePost} posts = {posts}/>
            <div className={styles.buttons}>
            <MyButton style={{marginTop: 30, width: 300, height: 50}} onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
