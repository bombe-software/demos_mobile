//Importar librerias
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';

//Importar reducers
import reducers from './reducers';

//Importar componentes
import Prueba from "./components/prueba";
import Prueba2 from "./components/prueba2";

import GenericForm from "./components/generics/generic_form";


class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router navigationBarStyle={styles.navBar} titleStyle={styles.navTitle} sceneStyle={styles.routerScene}>
          <Stack key="root">
            <Scene key="prueba" component={GenericForm} title="Prueba" />
            <Scene key="prueba2" component={Prueba2} title="Prueba2" />
            <Scene key="form" component={Prueba} title="GenericForm" />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  navTitle: {
    color: 'white'
  },
  routerScene: {
    paddingTop: 0
  },
})

export default App;
