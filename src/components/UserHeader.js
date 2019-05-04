import React from 'react';
import { connect } from 'react-redux';

const UserHeader = ({ userId, user }) => {
    return (
        <h1>{user ? user.name : null}</h1>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.find(user => user.id === ownProps.userId)
    }
}

export default connect(mapStateToProps)(UserHeader);
