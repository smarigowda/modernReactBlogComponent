import React from 'react';
import styles from './Post.module.scss';
import UserHeader from './UserHeader';

export const Post = ({ title, body, userId }) => {
    return (
        <div className={styles.container}>
            <i className="fas fa-user"></i>
            <div className={styles.content}>
                <h2>{title}</h2>
                <p>{body}</p>
                <UserHeader userId={userId}/>
            </div>
        </div>
    )
}