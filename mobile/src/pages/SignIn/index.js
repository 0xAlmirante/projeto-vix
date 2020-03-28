import React, { useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { signInRequest } from '../../store/modules/auth/actions';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Form>
        <FormInput
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu e-mail"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChangeText={setEmail}
        />

        <FormInput
          icon="lock-outline"
          secureTextEntry
          placeholder="Digite sua senha"
          ref={passwordRef}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={password}
          onChangeText={setPassword}
        />

        <SubmitButton loading={loading} onPress={handleSubmit}>
          Acessar
        </SubmitButton>
      </Form>

      <SignLink
        onPress={() => {
          navigation.navigate('Cadastrar');
        }}
      >
        <SignLinkText>Cadastrar um usuário </SignLinkText>
      </SignLink>
    </Container>
  );
}

SignIn.navigationOptions = {
  title: 'Login',
  headerStyle: {
    backgroundColor: '#3b9eff',
  },
  headerTitleAlign: 'center',
  headerTintColor: '#fff',
  headerBackTitleVisible: false,
};