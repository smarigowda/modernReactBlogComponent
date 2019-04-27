import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

const { Fragment } = React;

const card = ({ posts }) => {
    return posts.map(d => {
        const { id, title, body } = d;
        return (
            <div key={id}>
                <h2>id = {id}</h2>
                <p>title = {title}</p>
                <p>body = {body}</p>
            </div>
        )
    });
}

const PostList = ({ getPosts, posts }) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);
    return (
        <Fragment>
            { card({ posts }) }
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