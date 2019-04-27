import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';

const PostList = ({ fetchPosts }) => {
    useEffect(() => {
        fetchPosts();
    }, []);
    return (
        <>
            <h1>Post List Component</h1>
        </>
    )
}

const mapDispatchToProps = dispatch => { 
    return {
        fetchPosts: () => dispatch(fetchPosts())
    }
}

// since mapDispatchToProps is an object
// action creators are bound to dispatch automatically
export default connect(null, mapDispatchToProps)(PostList);