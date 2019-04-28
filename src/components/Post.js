import React from 'react';
import styles from './Post.module.scss';
export const Post = ({ title, body }) => {
    return (
        <div className={styles.container}>
            <i className="fas fa-user"></i>
            <div className={styles.content}>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        </div>
    )
}