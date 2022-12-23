import React from 'react';
import {Button, Text, View} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Jane's AddItem"
        onPress={() => {
          console.log('444444444444444');
          navigation.navigate('AddItem');
        }}
      />
      <Button
        title="Go to Jane's ListItem"
        onPress={() => navigation.navigate('ListItem', {})}
      />
    </View>
  );
};

export default Home;
