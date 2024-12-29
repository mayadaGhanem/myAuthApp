import {Pressable, StyleSheet, Text, View} from 'react-native';

import Colors from '../../Colors';

function FlattedButton({children, onPress}) {
  return (
    <Pressable
      style={({pressed}) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}>
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default FlattedButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
