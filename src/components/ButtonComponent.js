import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const ButtonComponent = ({text}) => {
  return (
    <View>
      <TouchableHighlight
        style={styles.button}
        underlayColor="white"
        onPress={() => console.log('hi')}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#62c8f6',
    borderWidth: 2,
    borderColor: '#eee',
    borderRadius: 40,
    paddingHorizontal: 19,
    paddingVertical: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 25,
    textAlign: 'center',
    fontFamily: 'Montserrat',
  },
});
export default ButtonComponent;
