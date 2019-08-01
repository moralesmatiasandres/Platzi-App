import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor} from './Store';
import Loading from './src/sections/components/Loading'
import AppLayout from './src/AppLayout';
import AppNavigatorWithState from './src/AppNavigatorWithState'
import AppNavigator from './src/AppNavigator'


class App extends React.Component { 
  render() {
    return (
      <Provider
        store={store}
      >
        <PersistGate
          loading={<Loading />}
          persistor={persistor}
        >
          <AppNavigatorWithState/>
        </PersistGate>
      </Provider>
    )
  }
};

export default App;
