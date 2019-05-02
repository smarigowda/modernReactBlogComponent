import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
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

const PostList = ({ getPosts, posts }) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);
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
        getPosts: () => dispatch(fetchPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);