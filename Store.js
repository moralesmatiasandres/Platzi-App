import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import VideosReducer from './reducers/VideoReducer';
import storage from 'redux-persist/lib/storage';

// const store = createStore(reducer, {
//   suggestionList: [],
//   categoryList: [],
// })

const persistConfig = {
  key: 'root',
  storage,
}


const persistedReducer = persistReducer(persistConfig, VideosReducer)


const store = createStore(persistedReducer)
const persistor = persistStore(store)

export { store, persistor };