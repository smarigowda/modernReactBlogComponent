import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';

const { Fragment } = React;
const PostList = ({ getPosts }) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);
    return (
        <Fragment>
            <h1>Post List Component</h1>
        </Fragment>
    )
}

const mapDispatchToProps = dispatch => { 
    return {
        getPosts: () => dispatch(fetchPosts())
    }
}

// since mapDispatchToProps is an object
// action creators are bound to dispatch automatically
export default connect(null, mapDispatchToProps)(PostList);