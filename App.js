import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import {LogBox} from 'react-native';
import AddItem from './src/screens/admin/AddItem';
import AdminHome from './src/screens/admin/Home';
import ListItem from './src/screens/admin/ListItem';
import Home from './src/screens/client/Home';
import Question from './src/screens/client/Question';
import Suggestion from './src/screens/client/Suggestion';

LogBox.ignoreLogs([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
]);

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} options={{this: 'Home'}} />
        <Stack.Screen
          name="Question"
          component={Question}
          options={{this: 'Question'}}
        />
        <Stack.Screen
          name="Suggestion"
          component={Suggestion}
          options={{this: 'Suggestion'}}
        />
        <Stack.Screen
          name="AdminHome"
          component={AdminHome}
          options={{this: 'AdminHome'}}
        />
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
