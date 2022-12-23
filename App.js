import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import {LogBox} from 'react-native';
import AddItem from './src/screens/AddItem';
import Home from './src/screens/Home';
import ListItem from './src/screens/ListItem';

LogBox.ignoreLogs([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
]);

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{this: 'Home'}} />
        <Stack.Screen
          name="AddItem"
          component={AddItem}
          options={{this: 'AddItmem'}}
        />
        <Stack.Screen
          name="ListItem"
          component={ListItem}
          options={{this: 'ListItem'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default class App extends Component {
  render() {
    return <AppNavigator />;
  }
}
