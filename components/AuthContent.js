import React, {useState} from 'react';
import {View} from 'react-native';
import AuthForm from './Form';

export default function AuthContent({isLogin, onAuthenticate}) {
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });
  function handleSubmit(values) {
    let {email, confirmEmail, password, confirmPassword} = values;

    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    email = email.trim();
    password = password.trim();
    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      setCredentialsInvalid({
        email: emailIsValid,
        password: passwordIsValid,
        confirmEmail: emailsAreEqual,
        confirmPassword: passwordsAreEqual,
      });

      return;
    }

    onAuthenticate(values);
  }

  return (
    <View>
      <AuthForm
        isLogin={isLogin}
        credentialsInvalid={credentialsInvalid}
        onSubmit={handleSubmit}
      />
    </View>
  );
}
