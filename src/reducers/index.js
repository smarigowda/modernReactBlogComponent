import { combineReducers } from 'redux';
export default combineReducers({
    posts: (state = [], action) => {
        if(action.type === 'FETCH_POSTS') {
            state = [...action.payload.data];
            return state;
        }
        return state;
    }
});