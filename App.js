import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Reducers from './src/reducers/index';

import Preload from './src/components/preload';

let store = createStore(Reducers, applyMiddleware(thunk)); 

const Navegador = createStackNavigator({
  Preload: {
    screen: Preload
  }
});

const Appcontainer = createAppContainer(Navegador);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Appcontainer />
      </Provider>
    );
  }
};

export default App;
