import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import { Post } from './Post';


const { Fragment } = React;

const renderPosts = ({ posts }) => {
    // console.log(posts);
    return posts.map(post => {
        return (
            <Post key={post.id} {...post} />
        )
    });
}

const PostList = ({ getPostsAndUsers, posts }) => {
    useEffect(() => {
        getPostsAndUsers();
    }, [getPostsAndUsers]);
    return (
        <Fragment>
            {renderPosts({ posts })}
        </Fragment>
    )
}

const mapStateToProps = state => {
    const { posts } = state;
    return {
        posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPostsAndUsers: () => dispatch(fetchPostsAndUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);