import React from 'react';
import {Image, StatusBar, StyleSheet, View} from 'react-native';
import Logo from '../assets/images/logo.png';
import Nav from '../assets/images/nav.png';

const Header = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <View style={{justifyContent: 'center'}}>
        <Image source={Logo} style={styles.Logo} />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-end',
          justifyContent: 'center',
          padding: 30,
        }}>
        <Image source={Nav} style={styles.Nav} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  Logo: {
    width: 160,
    height: 160,
  },
  Nav: {
    width: 30,
    height: 25,
  },
});
export default Header;
