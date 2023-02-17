import React, {useRef, useState} from 'react';
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import DropDownPicker from 'react-native-dropdown-picker';
import BackgroundComponent from '../../components/BackgroundComponent';
import Header from '../../components/Header';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const CardQuestion = [
  'What Season?',
  'Does the water have current?',
  'What is the Water Temperature?',
  'What time of day are you fishing?',
  'Select Water Clarity?',
  'Wind Speed?',
  'What depth are you fishing?',
  'What is the weather condition?',
  'What type of structure?',
  'Describe Behavior of fish?',
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
    {label: '38-40', value: '38-40'},
    {label: '40-42', value: '40-42'},
    {label: '42-44', value: '42-44'},
    {label: '44-46', value: '44-46'},
    {label: '46-48', value: '46-48'},
    {label: '48-50', value: '48-50'},
    {label: '50-52', value: '50-52'},
    {label: '52-54', value: '52-54'},
    {label: '54-56', value: '54-56'},
    {label: '56-58', value: '56-58'},
    {label: '58-60', value: '58-60'},
    {label: '60-62', value: '60-62'},
    {label: '62-64', value: '62-64'},
    {label: '64-66', value: '64-66'},
    {label: '66-68', value: '66-68'},
    {label: '68-70', value: '68-70'},
    {label: '70-72', value: '70-72'},
    {label: '72-74', value: '72-74'},
    {label: '74+', value: '74+'},
  ],
  [
    {label: 'Sunrise', value: 'Sunrise'},
    {label: 'Day', value: 'Day'},
    {label: 'Sunset', value: 'Sunset'},
    {label: 'Night', value: 'Night'},
  ],
  [
    {label: 'Clear', value: 'Clear'},
    {label: 'Stained', value: 'Stained'},
    {label: 'Dirty', value: 'Dirty'},
  ],
  [
    {label: '0 MPH', value: '0 MPH'},
    {label: '5-10 MPH', value: '5-10 MPH'},
    {label: '10-15 MPH', value: '10-15 MPH'},
    {label: '15-20 MPH', value: '15-20 MPH'},
  ],
  [
    {label: '0-9 Feet', value: '0-9 Feet'},
    {label: '10-12 Feet', value: '10-12 Feet'},
    {label: '12-20 Feet', value: '12-20 Feet'},
    {label: '20-35 Feet', value: '20-35 Feet'},
    {label: '35+ Feet', value: '35+ Feet'},
  ],
  [
    {label: 'Bright Sunny', value: 'Bright Sunny'},
    {label: 'Partly Cloudy', value: 'Partly Cloudy'},
    {label: 'Cloudy', value: 'Cloudy'},
    {label: 'Raining', value: 'Raining'},
  ],
  [
    {label: 'Laydown & Brush', value: 'Laydown & Brush'},
    {label: 'Rocks', value: 'Rocks'},
    {label: 'Grass', value: 'Grass'},
    {label: 'Dams', value: 'Dams'},
    {label: 'Drop-offs', value: 'Drop-offs'},
    {label: 'Reffs', value: 'Reffs'},
    {label: 'Brush Piles', value: 'Brush Piles'},
    {label: 'Points', value: 'Points'},
  ],
  [
    {label: 'Skittish', value: 'Skittish'},
    {label: 'Lock Jaw', value: 'Lock Jaw'},
    {label: 'Suspended', value: 'Suspended'},
    {label: 'On the Move', value: 'On the Move'},
    {label: 'Hidden in Cover', value: 'Hidden in Cover'},
  ],
];

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

const RequestData = {
  season: '',
  current: '',
  waterTemp: '',
  timeOfDay: '',
  waterClarity: '',
  wind: '',
  depth: '',
  weatherCondition: '',
  structure: '',
  behavior: '',
};

let answerSelected = false;

const DropDown = ({header}) => {
  const Index = CardQuestion.indexOf(header);
  const currentItems = CardItems[Index];
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState(currentItems);

  const handleSetValue = text => {
    setValue(text);
    answerSelected = true;
    RequestData[Details[Index]] = text();
  };

  return (
    <DropDownPicker
      style={{
        borderRadius: 30,
        borderColor: '#ccc',
        backgroundColor: '#eee',
      }}
      dropDownContainerStyle={{
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
      }}
      defaultValue={value}
      open={open}
      value={value}
      items={items}
      setOpen={() => {
        setOpen(!open);
        console.log('open ', !open);
      }}
      setValue={handleSetValue}
      setItems={setItems}
      zIndex={500}
      searchable={true}
      maxHeight={400}
    />
  );
};

const Question = ({navigation}) => {
  const swiperRef = useRef();

  const handleClick = () => {
    if (answerSelected) {
      swiperRef.current.swipeLeft(false);
      answerSelected = false;
    }
  };
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
            // mustDecrementCardIndex={false}
            cards={CardQuestion}
            ref={swiperRef}
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
                    <View>
                      <TouchableHighlight
                        style={styles.button}
                        underlayColor="white"
                        onPress={handleClick}>
                        <Text style={styles.buttonText}>Next Question</Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                </View>
              );
            }}
            onSwipedLeft={cardIndex => {
              if (cardIndex === 9) {
                navigation.navigate('Suggestion', {Request: RequestData});
              }
            }}
            cardVerticalMargin={0}
            cardHorizontalMargin={50}
            backgroundColor={'transparent'}
            stackSize={3}
            disableRightSwipe={true}
            disableBottomSwipe={true}
            disableTopSwipe={true}
            disableLeftSwipe={true}
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
    height: deviceHeight * 0.6,
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
    color: 'black',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#62c8f6',
    borderWidth: 2,
    borderColor: '#eee',
    borderRadius: 40,
    paddingHorizontal: 19,
    paddingVertical: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 25,
    textAlign: 'center',
    fontFamily: 'Montserrat',
  },
});
export default Question;
