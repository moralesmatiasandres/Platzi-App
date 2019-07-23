import { createStore } from 'redux';
import VideoReducer from './reducers/VideoReducer';

const Store = createStore(VideoReducer, {
    suggestionList: [],
    categoryList: []
})

export default Store;