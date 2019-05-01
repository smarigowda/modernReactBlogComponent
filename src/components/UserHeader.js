import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

const UserHeader = ({ getUser, userId, users }) => {
    useEffect(() => {
        getUser({ userId });
    }, []);
    const user = users.find(user => user.id === userId);
    return (
        <h1>{user ? user.name : null}</h1>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getUser: ({ userId }) => dispatch(fetchUser({ userId }))
    }
}

const mapStateToProps = state => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader);
