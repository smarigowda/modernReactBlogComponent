export const fetchUserReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_USER': 
            return [...state, action.payload.data]
        default:
            return state;
    }
}