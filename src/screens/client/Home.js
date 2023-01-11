import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import homeLogo from '../../assets/images/home-logo.png';
import BackgroundComponent from '../../components/BackgroundComponent';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.backgorundContainer}>
        <BackgroundComponent />
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate('Question');
        }}>
        <Image source={homeLogo} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  backgorundContainer: {
    position: 'absolute',
    height: deviceHeight,
    width: deviceWidth,
  },
});
export default Home;
