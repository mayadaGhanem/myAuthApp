import React from 'react';

import {StyleSheet, View, Text} from 'react-native';
import Colors from '../Colors';
import Button from './UI/Button';
import {useNavigation} from '@react-navigation/native';

export default function Error({message, handleBack}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <Button onPress={handleBack}>Back</Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 12,
  },
});
