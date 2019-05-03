// import _ from 'lodash';
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
        // _fetchUser(userId, dispatch);
        const response = await jsonPlaceholder.get(`/users/${userId}`);
        const { data } = response;

        dispatch({
            type: 'FETCH_USER',
            payload: {
                data
            }
        })
    }
}

// const _fetchUser = _.memoize(async (userId, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${userId}`);
//     const { data } = response;
//         dispatch({
//             type: 'FETCH_USER',
//             payload: {
//                 data
//             }
//         })
// });

export const fetchPostsAndUsers = () => {
    return async dispatch => {
        console.log('-- about to fetch posts...');
        await dispatch(fetchPosts());
        console.log('-- fetched posts...');

        // const { data } = await jsonPlaceholder.get(`/posts`);
        // dispatch({
        //     type: 'FETCH_POSTS',
        //     payload: {
        //         data
        //     }
        // });
        // const users = _.uniq(data.map(post => post.userId));
        // for (let i = 0; i < users.length; i++) {
        //     let userDetail = await jsonPlaceholder.get(`/users/${users[i]}`);
        //     console.log(userDetail);
        //     dispatch({
        //         type: 'FETCH_USER',
        //         payload: {
        //             data
        //         }
        //     })
        // }
    }
}

// (async () => {
//     await fetchPostsAndUsers()
// })();
