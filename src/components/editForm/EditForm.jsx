import React, {useRef, useState} from 'react';
import styles from './EditForm.module.scss';
import MyInput from "../input/MyInput";
import MyButton from "../button/MyButton";


const EditForm = (props) => {
    const [post, setPosts] = useState({title: props.title, text: props.text})
    const textRef = useRef()
    const titleRef = useRef()

    let onEditPost = (e) => {
        e.preventDefault()
        props.editPost(titleRef.current.value, textRef.current.value, props.id)
        props.setModal(false)
    }

    let onDeletePost = (e) => {
        e.preventDefault()
        props.deletePost(props.id)
        props.setModal(false)
    }



    return (
        <div className={styles.formPost}>
            <form>
                <div className={styles.formPost__item}>
                    <strong>Заголовок поста</strong>
                    <MyInput
                        value={post.title}
                        onChange={e => setPosts({...post, title: e.target.value})}
                        ref = {titleRef}
                        type="text"
                        className={styles.input__title}
                        placeholder="Название поста"
                    />
                </div>
                <div className={styles.formPost__item}>
                    <strong>Текст поста</strong>
                    <MyInput
                        value={post.text}
                             onChange={e => setPosts({...post, text: e.target.value})}
                             type="text"
                             ref = {textRef}
                             className={styles.input__text}
                             placeholder="Текст поста"/>
                </div>

                <div className={styles.buttons}>
                    <MyButton onClick={onDeletePost}>Удалить</MyButton>
                    <MyButton onClick={onEditPost}>Сохранить</MyButton>

                </div>
            </form>
        </div>
    );
};

export default EditForm;