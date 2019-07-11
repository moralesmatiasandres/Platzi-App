import React from 'react';
import { Text } from 'react-native';
import Home from './src/screens/container/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/container/SuggestionList';

const App = () => (
    <Home>
      <Header />
      <Text>Buscador</Text>
      <Text>Categorias</Text>
      <SuggestionList />
    </Home>
  );

export default App;
