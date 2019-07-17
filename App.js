import React from 'react';
import { Text } from 'react-native';
import Home from './src/screens/container/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/container/SuggestionList';
import CategoryList from './src/videos/container/CategoryList';
import API from './utils/Api';

class App extends React.Component {
   state = {
     suggestionList: [],
     categoryList: [],
   }  
   async componentDidMount() {
    const movies = await API.getSuggestion(10);
    const categories = await API.getMovies();
    console.log(movies)
    console.log(categories)
    this.setState({
      suggestionList: movies,
      categoryList: categories,
    })
  }

  render() {
    return (
      <Home>
        <Header />
        <Text>Buscador</Text>
        <Text>Categorias</Text>
        <CategoryList 
          list={this.state.categoryList}
        />
        <SuggestionList 
          list={this.state.suggestionList}
        />
      </Home>
    )
  }
};

export default App;
