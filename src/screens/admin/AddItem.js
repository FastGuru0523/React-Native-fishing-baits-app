import firestore from '@react-native-firebase/firestore';
import React, {useRef, useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {ScrollView} from 'react-native-virtualized-view';

const DropdownItems = [
  [
    {label: 'Wake Baits', value: 'Wake Baits'},
    {label: 'Jerbait', value: 'Jerbait'},
    {label: 'Squarebill', value: 'Squarebill'},
    {label: 'Medium diving', value: 'Medium diving'},
    {label: 'Deep diving', value: 'Deep diving'},
  ],
  [
    {label: 'Spring', value: 'Spring'},
    {label: 'Summer', value: 'Summer'},
    {label: 'Fall', value: 'Fall'},
    {label: 'Winter', value: 'Winter'},
  ],
  [
    {label: '38-50', value: '38-50'},
    {label: '45-60', value: '45-60'},
    {label: '60-68', value: '60-68'},
    {label: '69+', value: '69+'},
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
    {label: 'Translucent or “ghost”', value: 'Translucent or “ghost”'},
    {label: 'Translucent or opaque', value: 'Translucent or opaque'},
    {label: 'Opaque', value: 'Opaque'},
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
    {label: 'Rock', value: 'Rock'},
    {label: 'Grass', value: 'Grass'},
  ],
  [
    {label: 'Skittish', value: 'Skittish'},
    {label: 'Lock Jaw', value: 'Lock Jaw'},
    {label: 'Suspended', value: 'Suspended'},
    {label: 'On the Move', value: 'On the Move'},
    {label: 'Hidden in Cover', value: 'Hidden in Cover'},
  ],
  [
    {label: 'Clear', value: 'Clear'},
    {label: 'Stained', value: 'Stained'},
    {label: 'Dirty', value: 'Dirty'},
    {label: 'General', value: 'General'},
    {label: 'Laydown & Brush', value: 'Laydown & Brush'},
    {label: 'Rocks', value: 'Rocks'},
    {label: 'Grass', value: 'Grass'},
  ],
  [
    {label: 'Yes', value: 'Yes'},
    {label: 'No', value: 'No'},
  ],
  [
    {label: 'Wake Baits', value: 'Wake Baits'},
    {label: 'Jerkbait', value: 'Jerkbait'},
    {label: 'Squarebill', value: 'Squarebill'},
    {label: 'Medium diving', value: 'Medium diving'},
    {label: 'Deep diving', value: 'Deep diving'},
    {label: 'Tight wobble', value: 'Tight wobble'},
    {label: 'Rattling', value: 'Rattling'},
    {label: 'Lipless', value: 'Lipless'},
    {label: 'Shallow diving', value: 'Shallow diving'},
    {label: 'Wide wobble', value: 'Wide wobble'},
    {label: 'Silent', value: 'Silent'},
  ],
];

const Fields = [
  'type',
  'season',
  'waterTemp',
  'timeOfDay',
  'waterClarity',
  'opacity',
  'wind',
  'depth',
  'weatherCondition',
  'structure',
  'behavior',
  'instruction',
  'current',
  'pattern',
];

const AddItem = ({navigation}) => {
  const [open, setOpen] = useState(null);
  const [result, setResult] = useState({
    type: [],
    season: [],
    waterTemp: [],
    timeOfDay: [],
    waterClarity: [],
    opacity: [],
    wind: [],
    depth: [],
    weatherCondition: [],
    structure: [],
    behavior: [],
    instruction: [],
    current: null,
    pattern: [],
  });

  // const handleChoosePhoto = () => {
  //   const options = {
  //     noData: true,
  //   };
  //   ImagePicker.launchImageLibrary(options, response => {
  //     if (response.uri) {
  //       setPhoto(response.uri);
  //     }
  //   });
  // };

  const TextRef = useRef();

  const handleChange = text => {
    TextRef.current = text;
    console.log(text);
  };

  const handleOpen = index => {
    open !== index ? setOpen(index) : setOpen(null);
    console.log('open ', open);
  };

  const handlePick = (text, stateName) => {
    console.log('stateName ', stateName);
    const temp = result[stateName];
    if (stateName === 'current') {
      temp === text()
        ? setResult({...result, [stateName]: null})
        : setResult({...result, [stateName]: text()});
      console.log('isChanged ', result.current);
    } else if (!temp.includes(text()[0])) {
      setResult({...result, [stateName]: [...result[stateName], text()[0]]});
    } else {
      setResult({
        ...result,
        [stateName]: [...result[stateName].filter(t => t !== text()[0])],
      });
    }
  };

  const handleSubmit = () => {
    if (
      !TextRef.current ||
      !result.type.length ||
      !result.season.length ||
      !result.waterTemp.length ||
      !result.timeOfDay.length ||
      !result.waterClarity.length ||
      !result.pattern.length ||
      !result.opacity.length ||
      !result.wind.length ||
      !result.depth.length ||
      !result.weatherCondition.length ||
      !result.structure.length ||
      !result.instruction.length ||
      !result.behavior.length ||
      !result.current
    ) {
      Alert.alert(
        'Warning!',
        'Please fill up all fields',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
        {cancelable: false},
      );
    } else {
      firestore()
        .collection('baits')
        .doc()
        .set({
          name: TextRef.current,
          type: result.type,
          season: result.season,
          waterTemp: result.waterTemp,
          timeOfDay: result.timeOfDay,
          waterClarity: result.waterClarity,
          pattern: result.pattern,
          opacity: result.opacity,
          wind: result.wind,
          depth: result.depth,
          weatherCondition: result.weatherCondition,
          structure: result.structure,
          instruction: result.instruction,
          behavior: result.behavior,
          current: result.current,
        })
        .then(res => {
          console.log('Bait added!', result);
        });
    }
  };

  const Dropdowns = () => {
    return Fields.map((field, index) => {
      return field === 'current' ? (
        <View key={index}>
          <Text style={styles.labelText}>{field}</Text>
          <DropDownPicker
            open={open === index}
            value={result[field]}
            items={DropdownItems[index]}
            zIndex={1500 - index * 100}
            setOpen={() => handleOpen(index)}
            setValue={text => handlePick(text, field)}
          />
        </View>
      ) : (
        <View key={index}>
          <Text style={styles.labelText}>{field}</Text>
          <DropDownPicker
            multiple={true}
            min={0}
            max={5}
            open={open === index}
            value={result[field]}
            items={DropdownItems[index]}
            zIndex={1500 - index * 100}
            setOpen={() => handleOpen(index)}
            setValue={text => handlePick(text, field)}
          />
        </View>
      );
    });
  };

  return (
    <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Add New Bait</Text>
      <View>
        <Text style={styles.labelText}>Bait Name</Text>
        <TextInput
          style={styles.itemInput}
          onChangeText={text => handleChange(text)}
        />
      </View>
      <View>
        <Dropdowns />
      </View>
      <TouchableHighlight
        style={styles.button}
        underlayColor="white"
        onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Bait</Text>
      </TouchableHighlight>
      <View style={styles.space} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flexGrow: 1,
    padding: 30,
    backgroundColor: '#2a8ab7',
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
  },
  labelText: {
    fontSize: 15,
    color: 'white',
    padding: 5,
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white',
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center',
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 30,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  space: {
    marginVertical: 50,
  },
});

export default AddItem;