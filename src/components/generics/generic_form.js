import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Item, Input, Header, Body, Content, Title, Button, Text } from 'native-base';
import { Field, reduxForm } from 'redux-form';

class GenericForm extends Component {
    constructor(props) {
        super(props);
        this.renderInput = this.renderInput.bind(this);
    }
    renderInput({ input, label, type, meta: { touched, error, warning } }) {
        var hasError = false;
        if (error !== undefined) {
            hasError = true;
        }
        return (
            <Item error={hasError}>
                <Input {...input} />
                {hasError ? <Text>{error}</Text> : <Text />}
            </Item>
        )
    }
    onSubmit(values) {
        alert('Some: ' + JSON.stringify(values));
    }

    render() {
        const { handleSubmit, reset } = this.props;
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Redux Form</Title>
                    </Body>
                </Header>
                <Content padder>
                    <Field name="email" component={this.renderInput} />
                    <Field name="name" component={this.renderInput} />
                    <Button block primary onPress={handleSubmit(this.onSubmit.bind(this))}>
                        <Text>Submit</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

const validate = values => {
    const error = {};

    return error;
};

export default reduxForm({
    form: 'test',
    validate
})(GenericForm)