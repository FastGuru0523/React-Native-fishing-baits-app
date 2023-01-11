import React, {useState} from 'react';
import {Dimensions, StatusBar, StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import DropDownPicker from 'react-native-dropdown-picker';
import BackgroundComponent from '../../components/BackgroundComponent';
import ButtonComponent from '../../components/ButtonComponent';
import Header from '../../components/Header';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const CardQuestion = [
  'What Season?',
  'Does the water have current?',
  'What is the Water Temperature?',
  // 'What time of day are you fishing?',
  // 'Select Water Clarity?',
  // 'Wind Speed?',
  // 'What depth are you fishing?',
  // 'What is the weather condition?',
  // 'What type of structure?',
  // 'Describe Behavior of fish?',
];

const CardItems = [
  [
    {label: 'Spring', value: 'Spring'},
    {label: 'Summer', value: 'Summer'},
    {label: 'Fall', value: 'Fall'},
    {label: 'Winter', value: 'Winter'},
  ],
  [
    {label: 'Yes', value: 'Yes'},
    {label: 'No', value: 'No'},
  ],
  [
    {label: '38-50', value: '38-50'},
    {label: '45-60', value: '45-60'},
    {label: '60-68', value: '60-68'},
    {label: '69+', value: '69+'},
  ],
];

const DropDown = ({header}) => {
  const currentItems = CardItems[CardQuestion.indexOf(header)];
  const isCurrent = header === 'Does the water have current?' ? true : false;
  // console.log('currentItemQuiz ', currentItems);
  // console.log('isCurrent ', isCurrent);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(currentItems);

  return isCurrent ? (
    <DropDownPicker
      defaultValue={value}
      open={open}
      value={value}
      items={items}
      setOpen={() => {
        setOpen(!open);
        console.log('open ', !open);
      }}
      setValue={setValue}
      setItems={setItems}
    />
  ) : (
    <DropDownPicker
      multiple={true}
      min={0}
      max={5}
      defaultValue={value}
      open={open}
      value={value}
      items={items}
      setOpen={() => {
        setOpen(!open);
        console.log('open ', !open);
      }}
      setValue={setValue}
      setItems={setItems}
    />
  );
};

const Question = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <View style={styles.backgorundContainer}>
        <BackgroundComponent />
      </View>
      <View style={{width: '100%', height: '100%'}}>
        <Header />
        <View style={{width: '100%'}}>
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
        <View>
          <Swiper
            cards={CardQuestion}
            renderCard={card => {
              return (
                <View style={styles.card}>
                  <View>
                    <Text style={styles.cardText}>{card}</Text>
                    <DropDown key={card} header={card} />
                  </View>
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}>
                    <ButtonComponent text={'Next Question'} />
                  </View>
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
    width: '100%',
    height: '100%',
  },
  backgorundContainer: {
    position: 'absolute',
    height: deviceHeight,
    width: deviceWidth,
  },
  card: {
    height: 350,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    backgroundColor: 'white',
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  cardText: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '400',
    marginBottom: 10,
    textAlign: 'center',
  },
});
export default Question;
