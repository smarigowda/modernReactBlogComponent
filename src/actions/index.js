import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = async () => {
    const response = await jsonPlaceholder.get('/posts');
    console.log(response);
    return {
        type: 'FETCH_POSTS',
        payload: response.data
    }
}