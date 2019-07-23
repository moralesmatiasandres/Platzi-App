import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';

import Home from './src/screens/container/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/container/SuggestionList';
import CategoryList from './src/videos/container/CategoryList';
import API from './utils/Api';
import Player from './src/player/container/Player';
import Store from './Store';

class App extends React.Component {
   state = {
    //  suggestionList: [],
    //  categoryList: [],
   }  
   async componentDidMount() {
     const categoryList = await API.getMovies();
     Store.dispatch({
       type: 'SET_CATEGORIES_LIST',
       payload: {
         categoryList
       }
     })

    const suggestionList = await API.getSuggestion(10);
    Store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    })
  }

  render() {
    return (
      <Provider
        store={Store}
      >
        <Home>
          <Header />
          <Player />
          <Text>Buscador</Text>
          <CategoryList />
          <SuggestionList />
        </Home>
      </Provider>
    )
  }
};

export default App;
