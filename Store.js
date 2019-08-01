import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import indexReducer from './reducers/index';
import storage from 'redux-persist/lib/storage';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'

// const store = createStore(reducer, {
//   suggestionList: [],
//   categoryList: [],
// })

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['NavigationReducer']
}


const persistedReducer = persistReducer(persistConfig, indexReducer)

const navigationMiddleware = createReactNavigationReduxMiddleware(
  state => state.navigation, 
)
 
const store = createStore(
  persistedReducer,
  applyMiddleware(navigationMiddleware)
)
const persistor = persistStore(store)

export { store, persistor };