import React from 'react';
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BackgroundComponent from '../../components/BackgroundComponent';
import BaitCard from '../../components/BaitCard';
import Header from '../../components/Header';
const BaitImage1 = require('../../assets/images/baits/bait1.png');
const BaitImage2 = require('../../assets/images/baits/bait2.png');
const BaitImage3 = require('../../assets/images/baits/bait3.png');
const BaitImage4 = require('../../assets/images/baits/bait4.png');

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const Suggestion = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.backgorundContainer}>
        <BackgroundComponent />
      </View>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <Header />
        <View style={{flex: 0.5}}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 30,
              fontWeight: '400',
              lineHeight: 36,
            }}>
            Suggested Baits
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: '#62C8F6',
              fontSize: 23,
              fontWeight: '500',
              lineHeight: 28,
            }}>
            For your fishing conditions
          </Text>
        </View>
        <View style={{flex: 1, paddingHorizontal: 45}}>
          <BaitCard baitImage={BaitImage1} />
          <BaitCard baitImage={BaitImage2} />
          <BaitCard baitImage={BaitImage3} />
          <BaitCard baitImage={BaitImage4} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgorundContainer: {
    position: 'absolute',
    height: deviceHeight,
    width: deviceWidth,
  },
});
export default Suggestion;
