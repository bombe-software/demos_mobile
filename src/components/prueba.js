import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from './generics/Button';

import { Actions } from 'react-native-router-flux';



class Prueba extends Component {

  prueba2Link() {
    Actions.prueba2();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the Demo!
        </Text>
        <Button onPress={this.prueba2Link.bind(this)}>
          Ir a prueba2
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default Prueba;