// import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

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
    return async (dispatch, getState) => {
        await dispatch(fetchPosts());
        const state = getState();
        const userIds = state.posts.map(d => d.userId);
        const uniqUserIds = _.uniq(userIds);
        console.log(uniqUserIds);
        uniqUserIds.forEach(userId => {
            dispatch(fetchUser({ userId }));
        })

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
