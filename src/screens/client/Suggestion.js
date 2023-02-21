/* eslint-disable react-hooks/exhaustive-deps */
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

const Suggestion = ({navigation, route}) => {
  const [baitData, setBaitData] = useState([]);
  const [waring, setWarning] = useState(false);
  const Request = route.params.Request;

  const filterWithRequest = temp => {
    const baits = [];
    temp.map(item => {
      let isIncluded = true;
      Details.map(detail => {
        console.log(
          '33333333333333',
          item.data[detail].includes(Request[detail]),
        );
        if (!item.data[detail].includes(Request[detail])) {
          isIncluded = false;
        }
      });
      if (isIncluded) {
        baits.push(item.data);
        setWarning(false);
      }
    });
    setBaitData(baits);
    console.log('77777777777777', baitData);
  };

  useEffect(() => {
    console.log('111111111111111', Request);
    setWarning(true);
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
        console.log('666666666666666', temp);
      });
  }, []);

  const RenderBaitCard = () =>
    baitData.map((bait, index) => <BaitCard key={index} detail={bait} />);

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
        {waring && (
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              paddingHorizontal: 50,
              textAlign: 'center',
            }}>
            Please wait a few seconds...
          </Text>
        )}
        <View style={{flex: 1, paddingHorizontal: 45}}>
          <RenderBaitCard />
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text
            style={{
              textAlign: 'right',
              paddingRight: 30,
              paddingTop: 50,
              fontSize: 15,
            }}>
            Go to home screen...
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
