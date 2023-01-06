import React, {useState} from 'react';
import {Dimensions, StatusBar, StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import DropDownPicker from 'react-native-dropdown-picker';
import BackgroundComponent from '../../components/BackgroundComponent';
import ButtonComponent from '../../components/ButtonComponent';
import Header from '../../components/Header';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const Question = ({navigation}) => {
  const [typeOpen, setTypeOpen] = useState(false);
  const [typeValue, setTypeValue] = useState(null);
  const [typeItems, setTypeItems] = useState([
    {label: 'Wake Baits', value: 'Wake Baits'},
    {label: 'Jerbait', value: 'Jerbait'},
    {label: 'Squarebill', value: 'Squarebill'},
    {label: 'Medium diving', value: 'Medium diving'},
    {label: 'Deep diving', value: 'Deep diving'},
  ]);

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.backgorundContainer}>
        <BackgroundComponent />
      </View>
      <View style={{flex: 1}}>
        <Header style={{flex: 1}} />
        <View style={{flex: 0.6}}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 20,
              fontWeight: '400',
            }}>
            Provide the best answer to the
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: '#62C8F6',
              fontSize: 38,
              fontWeight: '500',
            }}>
            Question below
          </Text>
        </View>
        <View style={styles.cardContainer}>
          <Swiper
            cards={[
              'What Season?',
              'Does the water have current',
              'What is the Water Temperature?',
              'What time of day are you fishing?',
              'Select Water Clarity',
              'Wind Speed',
              'What depth are you fishing?',
              'What is the weather condition?',
              'What type of structure',
              'Describe Behavior of fish',
            ]}
            renderCard={card => {
              return (
                <View style={styles.card}>
                  <Text style={styles.cardText}>{card}</Text>
                  <DropDownPicker
                    multiple={true}
                    min={0}
                    max={5}
                    defaultValue={typeValue}
                    open={typeOpen}
                    value={typeValue}
                    items={typeItems}
                    setOpen={() => {
                      setTypeOpen(!typeOpen);
                      console.log('typeOpen ', typeOpen);
                    }}
                    setValue={setTypeValue}
                    setItems={setTypeItems}
                  />
                  <ButtonComponent text={'Next Question'} />
                </View>
              );
            }}
            cardVerticalMargin={0}
            cardHorizontalMargin={50}
            backgroundColor={'transparent'}
            infinite={true}
            cardIndex={0}
            stackSize={3}
          />
        </View>
      </View>
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
  cardContainer: {
    flex: 3,
  },
  card: {
    flex: 0.5,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    backgroundColor: 'white',
    padding: 20,
  },
  cardText: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '400',
    marginBottom: 10,
  },
});
export default Question;
