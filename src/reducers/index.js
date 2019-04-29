import { combineReducers } from 'redux';

import { postsReducer } from './postsReducer';
import { fetchUserReducer } from './fetchUserReducer';
export default combineReducers({
    posts: postsReducer,
    users: fetchUserReducer
});