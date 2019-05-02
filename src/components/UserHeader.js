import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

const UserHeader = ({ getUser, userId, user }) => {
    useEffect(() => {
        getUser({ userId });
    }, []);
    return (
        <h1>{user ? user.name : null}</h1>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getUser: ({ userId }) => dispatch(fetchUser({ userId }))
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.find(user => user.id === ownProps.userId)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader);
