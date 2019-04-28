export const postsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            const { data } = action.payload;
            return [...data];
        default:
            return state;
    }
}