import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import Home from './src/screens/container/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/container/SuggestionList';
import CategoryList from './src/videos/container/CategoryList';
import API from './utils/Api';
import Player from './src/player/container/Player';
import { store, persistor} from './Store';
import Loading from './src/sections/components/Loading'

class App extends React.Component {
   state = {
    //  suggestionList: [],
    //  categoryList: [],
   }  
   async componentDidMount() {
     const categoryList = await API.getMovies();
     store.dispatch({
       type: 'SET_CATEGORIES_LIST',
       payload: {
         categoryList
       }
     })

    const suggestionList = await API.getSuggestion(10);
    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    })
  }

  render() {
    return (
      <Provider
        store={store}
      >
        <PersistGate
          loading={<Loading />}
          persistor={persistor}
        >
          <Home>
            <Header />
            <Player />
            <Text>Buscador</Text>
            <CategoryList />
            <SuggestionList />
          </Home>
        </PersistGate>
      </Provider>
    )
  }
};

export default App;
