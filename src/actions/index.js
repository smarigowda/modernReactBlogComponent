import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
    return async dispatch => {
        const response = await jsonPlaceholder.get('/posts');
        const { data } = response;
        dispatch({
            type: 'FETCH_POSTS',
            payload: {
                data
            }
        });
    }
}

export const fetchUser = ({ userId }) => {
    return dispatch => {
        _fetchUser(userId, dispatch);
    }
}

const _fetchUser = _.memoize(async (userId, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${userId}`);
    const { data } = response;
        dispatch({
            type: 'FETCH_USER',
            payload: {
                data
            }
        })
});