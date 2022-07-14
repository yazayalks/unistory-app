import React, {useState} from 'react';
import styles from './CreateForm.module.scss';
import MyInput from "../input/MyInput";
import MyButton from "../button/MyButton";


const CreateForm = (props) => {
    const [post, setPosts] = useState({title: '', text: ''})


    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: "10"
        }

        props.createPost(newPost)
        setPosts({title: '', text: ''})
    }

    return (
        <div className={styles.formPost}>
            <form>
                <div className={styles.formPost__item}>
                    <strong>Заголовок поста</strong>
                    <MyInput
                        value={post.title}
                        onChange={e => setPosts({...post, title: e.target.value})}
                        type="text"
                        className={styles.input__title}
                        placeholder="Название поста"
                    />
                </div>
                <div className={styles.formPost__item}>
                    <strong>Текст поста</strong>
                    <MyInput value={post.text}
                           onChange={e => setPosts({...post, text: e.target.value})}
                           type="text"
                           className={styles.input__text}
                           placeholder="Текст поста"/>
                </div>

            <div className={styles.buttons}>
                <MyButton onClick={addNewPost}>Добавить</MyButton>
            </div>
            </form>
        </div>
    );
};

export default CreateForm;