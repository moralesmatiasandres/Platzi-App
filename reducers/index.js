import { combineReducers } from 'redux';

import NavigationReducer from './NavigationReducer';
import VideoReducer from './VideoReducer';

const reducer = combineReducers({
    NavigationReducer,
    VideoReducer
});

export default reducer;
