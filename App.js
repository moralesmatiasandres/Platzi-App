import React from 'react';
import { Text } from 'react-native';
import Home from './src/screens/container/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/container/SuggestionList';
import API from './utils/Api';

class App extends React.Component {
   state = {
     suggestionList: [],
   }  
   async componentDidMount() {
    const movies = await API.getSuggestion(10);
    console.log(movies)
    this.setState({
      suggestionList: movies,
    })
  }

  render() {
    return (
      <Home>
        <Header />
        <Text>Buscador</Text>
        <Text>Categorias</Text>
        <SuggestionList 
          list={this.state.suggestionList}
        />
      </Home>
    )
  }
};

export default App;
