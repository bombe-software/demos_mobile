import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Item, Input, Header, Body, Content, Title, Button } from 'native-base';

class Prueba extends Component {

  prueba2Link() {
    Actions.form();
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Prueba1</Title>
          </Body>
        </Header>
        <Content padder>
          <Button block primary onPress={this.prueba2Link.bind(this)}>
            <Text>Submit</Text>
          </Button>
        </Content>
      </Container>
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