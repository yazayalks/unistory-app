import React, {useState} from 'react';

import MyButton from "../../button/MyButton";
import styles from './PostItem.module.scss';

import CreateForm from "../../createForm/CreateForm";
import Modal from "../../modal/Modal";
import EditForm from "../../editForm/EditForm";

const PostItem = (props) => {

    const [modal, setModal] = useState(false);

    return (
        <div className={styles.post}>

                <div className={styles.title}>
                    <strong>{props.index}.{props.title}</strong>
                </div>
                <div className={styles.text}>
                    {props.text}
                </div>

            <div className={styles.buttons}>
                <MyButton onClick={() => setModal(true)}>Редактировать</MyButton>
            </div>

            <Modal visible={modal} setVisible={setModal}>
                <EditForm setModal={setModal} id = {props.id} title = {props.title} text = {props.text} deletePost={props.deletePost} editPost ={props.editPost}/>
            </Modal>
        </div>
    );
};

export default PostItem;