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
    return async dispatch => {
        const response = await jsonPlaceholder.get(`/users/${userId}`);
        console.log(`-- user response -- ${userId}`);
        console.log(response);
        const { data } = response;
        dispatch({
            type: 'FETCH_USER',
            payload: {
                data
            }
        })
    }
}