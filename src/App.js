//Importar librerias
import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';

//Importar reducers
import reducers from './reducers';

//Importar componentes
import Prueba from "./components/prueba";
import Prueba2 from "./components/prueba2";


class App extends Component {

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router sceneStyle={ null }>
          <Stack key="root">
            <Scene key="prueba" component={Prueba} title="Prueba" />
            <Scene key="prueba2" component={Prueba2} title="Prueba2" />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

export default App;
