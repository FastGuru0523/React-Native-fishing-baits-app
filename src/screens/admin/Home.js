import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const AdminHome = ({navigation}) => {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>BassPro Admin</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Add Item Page"
          onPress={() => {
            navigation.navigate('AddItem');
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to List Item Page"
          onPress={() => navigation.navigate('ListItem', {})}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Home Page"
          onPress={() => navigation.navigate('Home', {})}
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
    color: 'black',
  },
  buttonContainer: {
    padding: 10,
  },
});
export default AdminHome;
