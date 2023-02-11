/* eslint-disable react-native/no-inline-styles */
import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BackgroundComponent from '../../components/BackgroundComponent';
import BaitCard from '../../components/BaitCard';
import Header from '../../components/Header';

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

let descriptions = {
  structure: '',
  instruction: '',
};

const Suggestion = ({navigation, route}) => {
  const [baitData, setBaitData] = useState([]);
  const Request = route.params.Request;

  const filterWithRequest = temp => {
    const baits = [];
    temp.map(item => {
      let isIncluded = true;
      Details.map(detail => {
        if (!item.data[detail].includes(Request[detail])) {
          isIncluded = false;
        }
      });
      if (isIncluded) {
        baits.push(item.data);
      }
    });
    setBaitData(baits);
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
          temp.push(bait);
        });
        filterWithRequest(temp);
      });

    firestore()
      .collection('structure')
      .get()
      .then(res => {
        res.forEach(doc => {
          if (
            doc.data().season === Request.season &&
            doc.data().waterClearity === Request.waterClarity
          ) {
            descriptions.structure = doc.data().description;
          }
        });
      });
  }, []);

  const RenderBaitCard = () =>
    baitData.map((bait, index) => (
      <BaitCard key={index} detail={bait} description={descriptions} />
    ));

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
          {baitData ? (
            <RenderBaitCard />
          ) : (
            <Text>There's no matched baits...</Text>
          )}
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={{textAlign: 'right', paddingRight: 30}}>
            Go to home...
          </Text>
        </TouchableOpacity>
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
