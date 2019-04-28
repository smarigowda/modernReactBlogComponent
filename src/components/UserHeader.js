import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

const UserHeader = ({ getUser, userId }) => {
    const getUserMemoised = useCallback(() => getUser({ userId }), [] );
    useEffect(() => {
        getUserMemoised();
    }, []);
    return (
        <h1>User: x</h1>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        getUser: ({ userId }) => dispatch(fetchUser({ userId }))
    }
}

export default connect(null, mapDispatchToProps)(UserHeader);
