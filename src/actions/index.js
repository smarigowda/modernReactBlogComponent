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