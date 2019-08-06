import { combineReducers } from 'redux';

import NavigationReducer from './NavigationReducer';
import VideoReducer from './VideoReducer';
import UserReducer from './UserReducer';


const reducer = combineReducers({
    NavigationReducer,
    VideoReducer,
    UserReducer,
});

export default reducer;
