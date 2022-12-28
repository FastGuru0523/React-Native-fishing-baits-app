import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>BassPro Admin</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to AddItem Page"
          onPress={() => {
            navigation.navigate('AddItem');
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to ListItem Page"
          onPress={() => navigation.navigate('ListItem', {})}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',

    backgroundColor: '#2a8ab7',
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
  },
  buttonContainer: {
    padding: 10,
  },
});
export default Home;
