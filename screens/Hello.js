import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../components/UI/Button';
import Error from '../components/Error';
import {AuthContext} from '../store/auth-context';
import {getMessage, handleLogout} from '../services/firebase';
export default function Hello() {
  const [error, setError] = useState();
  const [message, setMessage] = useState(null);
  const authCtx = useContext(AuthContext);
  async function getMessageHandler() {
    try {
      const res = await getMessage(authCtx.token);
      console.log(res.data, 'rseeseseesese');
      setMessage(res.data);
    } catch (e) {
      setError(e.message);
    }
  }
  useEffect(() => {
    getMessageHandler();
r  }, []);

  async function onClickLogout() {
    try {
      handleLogout();
      authCtx.onLogout();
    } catch (e) {
      setError(e.message);
    }
  }
  if (error) {
    return <Error message={error} />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <Button onPress={onClickLogout}>Logout</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
