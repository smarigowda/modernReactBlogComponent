import { combineReducers } from 'redux';
export const reducer = () => {
    combineReducers({
        test: (state=[], action) => {
            return state;
        } 
    });
}