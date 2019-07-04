import React from 'react';
import { Text } from 'react-native';
import Home from './src/screens/container/Home';
import Header from './src/sections/components/Header';

const App = () => (
    <Home>
      <Header />
      <Text>Header</Text>
      <Text>Buscador</Text>
      <Text>Categorias</Text>
      <Text>Sugerencias</Text>
    </Home>
  );

export default App;
