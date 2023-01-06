import React from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';

const BackgroundComponent = () => {
  const bgImage = require('../assets/images/background.png');
  const okImage = require('../assets/images/ok.png');
  return (
    <View style={styles.container}>
      <ImageBackground source={bgImage} style={styles.bg_image}>
        <Image source={okImage} style={styles.ok} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flex: 1,
  },
  bg_image: {
    flex: 1,
    justifyContent: 'center',
  },
  ok: {
    width: '100%',
    height: '15%',
    resizeMode: 'stretch',
    position: 'absolute',
    bottom: 0,
  },
});
export default BackgroundComponent;
