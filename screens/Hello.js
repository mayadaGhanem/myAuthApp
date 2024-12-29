import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Button from '../components/UI/Button';
import Error from '../components/Error';
export default function Hello() {
  const [error, setError] = useState();
  async function onClickLogout() {
    try {
      handleLogout();
    } catch (e) {
      setError(e.message);
    }
  }
  if (error) {
    return <Error message={error} />;
  }
  return (
    <View>
      <Text>Hello</Text>
      <Button onPress={onClickLogout}>Logout</Button>
    </View>
  );
}
