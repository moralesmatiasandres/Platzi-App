function VideoReducer( state = {}, action) {
    switch(action.type) {
        case 'SET_SUGGESTION_LIST' : {
            return { ...state, ...action.payload }

        }
        case 'SET_CATEGORIES_LIST' : {
            return { ...state, ...action.payload }
        }
        default: 
            return state;
    }
    return state;
}

export default VideoReducer;