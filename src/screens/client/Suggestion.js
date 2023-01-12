import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
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

const Details = [
  'season',
  'current',
  'waterTemp',
  'timeOfDay',
  'waterClarity',
  'wind',
  'depth',
  'weatherCondition',
  'structure',
  'behavior',
];

const Suggestion = ({navigation, route}) => {
  // console.log('isReceive ', route.params.Request);
  const [baitData, setBaitData] = useState([]);
  const Request = route.params.Request;

  const filterWithRequest = temp => {
    const baits = [];
    // console.log('temp ', temp[0]);
    temp.map(item => {
      let isIncluded = true;
      // console.log('item ', item.data.name);
      Details.map(detail => {
        if (!item.data[detail].includes(Request[detail])) {
          isIncluded = false;
          // console.log('hi');
        }
      });
      if (isIncluded) {
        baits.push(item.data);
      }
    });
    setBaitData(baits);
    // console.log('baitData ', baitData);
  };

  useEffect(() => {
    firestore()
      .collection('baits')
      .get()
      .then(res => {
        let temp = [];
        res.forEach(doc => {
          const bait = {};
          bait.data = doc.data();
          bait.id = doc.id;
          // console.log('bait ', bait);
          temp.push(bait);
        });
        // setBaitData(temp);
        filterWithRequest(temp);
      });
  });

  const RenderBaitCard = () => {
    return baitData.map((bait, index) => {
      return <BaitCard key={index} detail={bait} />;
    });
  };

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
          <RenderBaitCard />
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
