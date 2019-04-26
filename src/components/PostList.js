import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions';

const PostList = props => {
    useEffect(() => {
        console.log('useEffect function called...');
        // call action creator here
        props.fetchPosts();
    }, []);
    return (
        <>
            <h1>Post List Component</h1>
        </>
    )
}

// since mapDispatchToProps is an object
// action creators are bound to dispatch automatically
export default connect(null, { fetchPosts })(PostList);