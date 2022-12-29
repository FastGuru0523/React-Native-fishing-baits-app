import firestore from '@react-native-firebase/firestore';
import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import ImagePicker from 'react-native-image-picker';
import {ScrollView} from 'react-native-virtualized-view';

const AddItem = ({navigation}) => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');

  const handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        setPhoto(response.uri);
      }
    });
  };

  const [typeOpen, setTypeOpen] = useState(false);
  const [typeValue, setTypeValue] = useState(null);
  const [typeItems, setTypeItems] = useState([
    {label: 'Wake Baits', value: 'Wake Baits'},
    {label: 'Jerbait', value: 'Jerbait'},
    {label: 'Squarebill', value: 'Squarebill'},
    {label: 'Medium diving', value: 'Medium diving'},
    {label: 'Deep diving', value: 'Deep diving'},
  ]);
  const [seasonOpen, setSeasonOpen] = useState(false);
  const [seasonValue, setSeasonValue] = useState(null);
  const [seasonItems, setSeasonItems] = useState([
    {label: 'Spring', value: 'Spring'},
    {label: 'Summer', value: 'Summer'},
    {label: 'Fall', value: 'Fall'},
    {label: 'Winter', value: 'Winter'},
  ]);
  const [waterTempOpen, setWaterTempOpen] = useState(false);
  const [waterTempValue, setWaterTempValue] = useState(null);
  const [waterTempItems, setWaterTempItems] = useState([
    {label: '38-50', value: '38-50'},
    {label: '45-60', value: '45-60'},
    {label: '60-68', value: '60-68'},
    {label: '69+', value: '69+'},
  ]);
  const [timeOfDayOpen, settimeOfDayOpen] = useState(false);
  const [timeOfDayValue, settimeOfDayValue] = useState(null);
  const [timeOfDayItems, settimeOfDayItems] = useState([
    {label: 'Sunrise', value: 'Sunrise'},
    {label: 'Day', value: 'Day'},
    {label: 'Sunset', value: 'Sunset'},
    {label: 'Night', value: 'Night'},
  ]);

  const [waterClarityOpen, setWaterClarityOpen] = useState(false);
  const [waterClarityValue, setWaterClarityValue] = useState(null);
  const [waterClarityItems, setWaterClarityItems] = useState([
    {label: 'Clear', value: 'Clear'},
    {label: 'Stained', value: 'Stained'},
    {label: 'Dirty', value: 'Dirty'},
  ]);

  const [opacityOpen, setOpacityOpen] = useState(false);
  const [opacityValue, setOpacityValue] = useState(null);
  const [opacityItems, setOpacityItems] = useState([
    {label: 'Translucent or “ghost”', value: 'Translucent or “ghost”'},
    {label: 'Translucent or opaque', value: 'Translucent or opaque'},
    {label: 'Opaque', value: 'Opaque'},
  ]);

  const [windOpen, setWindOpen] = useState(false);
  const [windValue, setWindValue] = useState(null);
  const [windItems, setWindItems] = useState([
    {label: '0 MPH', value: '0 MPH'},
    {label: '5-10 MPH', value: '5-10 MPH'},
    {label: '10-15 MPH', value: '10-15 MPH'},
    {label: '15-20 MPH', value: '15-20 MPH'},
  ]);

  const [depthOpen, setDepthOpen] = useState(false);
  const [depthValue, setDepthValue] = useState(null);
  const [depthItems, setDepthItems] = useState([
    {label: '0-9 Feet', value: '0-9 Feet'},
    {label: '10-12 Feet', value: '10-12 Feet'},
    {label: '12-20 Feet', value: '12-20 Feet'},
    {label: '20-35 Feet', value: '20-35 Feet'},
    {label: '35+ Feet', value: '35+ Feet'},
  ]);

  const [weatherConditionOpen, setWeatherConditionOpen] = useState(false);
  const [weatherConditionValue, setWeatherConditionValue] = useState(null);
  const [weatherConditionItems, setWeatherConditionItems] = useState([
    {label: 'Bright Sunny', value: 'Bright Sunny'},
    {label: 'Partly Cloudy', value: 'Partly Cloudy'},
    {label: 'Cloudy', value: 'Cloudy'},
    {label: 'Raining', value: 'Raining'},
  ]);

  const [structureOpen, setStructureOpen] = useState(false);
  const [structureValue, setStructureValue] = useState(null);
  const [structureItems, setStructureItems] = useState([
    {label: 'Laydown & Brush', value: 'Laydown & Brush'},
    {label: 'Rock', value: 'Rock'},
    {label: 'Grass', value: 'Grass'},
  ]);

  const [instructionOpen, setInstructionOpen] = useState(false);
  const [instructionValue, setInstructionValue] = useState(null);
  const [instructionItems, setInstructionItems] = useState([
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
  ]);

  const [behaviorOpen, setBehaviorOpen] = useState(false);
  const [behaviorValue, setBehaviorValue] = useState(null);
  const [behaviorItems, setBehaviorItems] = useState([
    {label: 'Skittish', value: 'Skittish'},
    {label: 'Lock Jaw', value: 'Lock Jaw'},
    {label: 'Suspended', value: 'Suspended'},
    {label: 'On the Move', value: 'On the Move'},
    {label: 'Hidden in Cover', value: 'Hidden in Cover'},
  ]);

  const [currentOpen, setCurrentOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(null);
  const [currentItems, setCurrentItems] = useState([
    {label: 'Yes', value: 'Yes'},
    {label: 'No', value: 'No'},
  ]);

  const [patternOpen, setPatternOpen] = useState(false);
  const [patternValue, setPatternValue] = useState(null);
  const [patternItems, setPatternItems] = useState([
    {label: 'Clear', value: 'Clear'},
    {label: 'Stained', value: 'Stained'},
    {label: 'Dirty', value: 'Dirty'},
    {label: 'General', value: 'General'},
    {label: 'Laydown & Brush', value: 'Laydown & Brush'},
    {label: 'Rocks', value: 'Rocks'},
    {label: 'Grass', value: 'Grass'},
  ]);

  const handleTypeOpen = () => {
    setSeasonOpen(false);
    setWaterTempOpen(false);
    settimeOfDayOpen(false);
    setWaterClarityOpen(false);
    setOpacityOpen(false);
    setWindOpen(false);
    setDepthOpen(false);
    setWeatherConditionOpen(false);
    setStructureOpen(false);
    setInstructionOpen(false);
    setCurrentOpen(false);
    setTypeOpen(!typeOpen);
  };

  const handleSeasonOpen = () => {
    setWaterTempOpen(false);
    settimeOfDayOpen(false);
    setTypeOpen(false);
    setWaterClarityOpen(false);
    setOpacityOpen(false);
    setWindOpen(false);
    setDepthOpen(false);
    setWeatherConditionOpen(false);
    setStructureOpen(false);
    setInstructionOpen(false);
    setCurrentOpen(false);
    setSeasonOpen(!seasonOpen);
  };

  const handleWaterTempOpen = () => {
    settimeOfDayOpen(false);
    setTypeOpen(false);
    setSeasonOpen(false);
    setWaterClarityOpen(false);
    setOpacityOpen(false);
    setWindOpen(false);
    setDepthOpen(false);
    setWeatherConditionOpen(false);
    setStructureOpen(false);
    setInstructionOpen(false);
    setCurrentOpen(false);
    setWaterTempOpen(!waterTempOpen);
  };

  const handletimeOfDayOpen = () => {
    setTypeOpen(false);
    setSeasonOpen(false);
    setWaterTempOpen(false);
    setWaterClarityOpen(false);
    setOpacityOpen(false);
    setWindOpen(false);
    setDepthOpen(false);
    setWeatherConditionOpen(false);
    setStructureOpen(false);
    setInstructionOpen(false);
    setCurrentOpen(false);
    settimeOfDayOpen(!timeOfDayOpen);
  };

  const handleWaterClarityOpen = () => {
    setTypeOpen(false);
    setSeasonOpen(false);
    setWaterTempOpen(false);
    settimeOfDayOpen(false);
    setOpacityOpen(false);
    setWindOpen(false);
    setDepthOpen(false);
    setWeatherConditionOpen(false);
    setStructureOpen(false);
    setInstructionOpen(false);
    setCurrentOpen(false);
    setWaterClarityOpen(!waterClarityOpen);
  };

  const handleOpacityOpen = () => {
    setTypeOpen(false);
    setSeasonOpen(false);
    setWaterTempOpen(false);
    settimeOfDayOpen(false);
    setWaterClarityOpen(false);
    setWindOpen(false);
    setDepthOpen(false);
    setWeatherConditionOpen(false);
    setStructureOpen(false);
    setInstructionOpen(false);
    setCurrentOpen(false);
    setOpacityOpen(!opacityOpen);
  };

  const handleWindOpen = () => {
    setTypeOpen(false);
    setSeasonOpen(false);
    setWaterTempOpen(false);
    settimeOfDayOpen(false);
    setWaterClarityOpen(false);
    setOpacityOpen(false);
    setDepthOpen(false);
    setWeatherConditionOpen(false);
    setStructureOpen(false);
    setInstructionOpen(false);
    setCurrentOpen(false);
    setWindOpen(!windOpen);
  };

  const handleDepthOpen = () => {
    setTypeOpen(false);
    setSeasonOpen(false);
    setWaterTempOpen(false);
    settimeOfDayOpen(false);
    setWaterClarityOpen(false);
    setOpacityOpen(false);
    setWindOpen(false);
    setWeatherConditionOpen(false);
    setStructureOpen(false);
    setInstructionOpen(false);
    setCurrentOpen(false);
    setDepthOpen(!depthOpen);
  };

  const handleWeatherConditionOpen = () => {
    setTypeOpen(false);
    setSeasonOpen(false);
    setWaterTempOpen(false);
    settimeOfDayOpen(false);
    setWaterClarityOpen(false);
    setOpacityOpen(false);
    setWindOpen(false);
    setDepthOpen(false);
    setStructureOpen(false);
    setInstructionOpen(false);
    setCurrentOpen(false);
    setWeatherConditionOpen(!weatherConditionOpen);
  };

  const handleStructureOpen = () => {
    setTypeOpen(false);
    setSeasonOpen(false);
    setWaterTempOpen(false);
    settimeOfDayOpen(false);
    setWaterClarityOpen(false);
    setOpacityOpen(false);
    setWindOpen(false);
    setDepthOpen(false);
    setWeatherConditionOpen(false);
    setInstructionOpen(false);
    setCurrentOpen(false);
    setStructureOpen(!structureOpen);
  };

  const handleInstructionOpen = () => {
    setTypeOpen(false);
    setSeasonOpen(false);
    setWaterTempOpen(false);
    settimeOfDayOpen(false);
    setWaterClarityOpen(false);
    setOpacityOpen(false);
    setWindOpen(false);
    setDepthOpen(false);
    setWeatherConditionOpen(false);
    setStructureOpen(false);
    setCurrentOpen(false);
    setInstructionOpen(!instructionOpen);
  };

  const handleBehaviorOpen = () => {
    setTypeOpen(false);
    setSeasonOpen(false);
    setWaterTempOpen(false);
    settimeOfDayOpen(false);
    setWaterClarityOpen(false);
    setOpacityOpen(false);
    setWindOpen(false);
    setDepthOpen(false);
    setWeatherConditionOpen(false);
    setStructureOpen(false);
    setInstructionOpen(false);
    setCurrentOpen(false);
    setBehaviorOpen(!behaviorOpen);
  };

  const handleCurrentOpen = () => {
    setTypeOpen(false);
    setSeasonOpen(false);
    setWaterTempOpen(false);
    settimeOfDayOpen(false);
    setWaterClarityOpen(false);
    setOpacityOpen(false);
    setWindOpen(false);
    setDepthOpen(false);
    setWeatherConditionOpen(false);
    setStructureOpen(false);
    setInstructionOpen(false);
    setBehaviorOpen(false);
    setCurrentOpen(!currentOpen);
  };

  const handlePatternOpen = () => {
    setTypeOpen(false);
    setSeasonOpen(false);
    setWaterTempOpen(false);
    settimeOfDayOpen(false);
    setWaterClarityOpen(false);
    setOpacityOpen(false);
    setWindOpen(false);
    setDepthOpen(false);
    setWeatherConditionOpen(false);
    setStructureOpen(false);
    setInstructionOpen(false);
    setCurrentOpen(false);
    setBehaviorOpen(false);
    setPatternOpen(!patternOpen);
  };

  const handleSubmit = () => {
    if (
      !name ||
      !typeValue ||
      !seasonValue ||
      !waterTempValue ||
      !timeOfDayValue ||
      !waterClarityValue ||
      !patternValue ||
      !opacityValue ||
      !windValue ||
      !depthValue ||
      !weatherConditionValue ||
      !structureValue ||
      !instructionValue ||
      !behaviorValue
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
          name: name,
          type: typeValue.toString(),
          season: seasonValue.toString(),
          waterTemp: waterTempValue.toString(),
          timeOfDay: timeOfDayValue.toString(),
          waterClarity: waterClarityValue.toString(),
          pattern: patternValue.toString(),
          opacity: opacityValue.toString(),
          wind: windValue.toString(),
          depth: depthValue.toString(),
          weatherCondition: weatherConditionValue.toString(),
          structure: structureValue.toString(),
          instruction: instructionValue.toString(),
          behavior: behaviorValue.toString(),
        })
        .then(res => {
          console.log('Bait added!');
        });
    }
  };
  return (
    <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Add New Bait</Text>
      <Text style={styles.labelText}>Bait Name</Text>
      <TextInput style={styles.itemInput} value={name} onChangeText={setName} />
      {/* {photo && (
        <Image source={{uri: photo}} style={{width: 300, height: 300}} />
      )}
      <TouchableHighlight
        style={styles.button}
        underlayColor="white"
        onPress={handleChoosePhoto}>
        <Text style={styles.buttonText}>Select Photo</Text>
      </TouchableHighlight> */}
      <Text style={styles.labelText}>Bait Type</Text>
      <DropDownPicker
        multiple={true}
        min={0}
        max={5}
        open={typeOpen}
        value={typeValue}
        items={typeItems}
        zIndex={1500}
        setOpen={handleTypeOpen}
        setValue={setTypeValue}
        setItems={setTypeItems}
      />
      <Text style={styles.labelText}>Season</Text>
      <DropDownPicker
        multiple={true}
        min={0}
        max={4}
        open={seasonOpen}
        value={seasonValue}
        items={seasonItems}
        zIndex={1400}
        setOpen={handleSeasonOpen}
        setValue={setSeasonValue}
        setItems={setSeasonItems}
      />
      <Text style={styles.labelText}>Current</Text>
      <DropDownPicker
        open={currentOpen}
        value={currentValue}
        items={currentItems}
        zIndex={1300}
        setOpen={handleCurrentOpen}
        setValue={setCurrentValue}
        setItems={setCurrentItems}
      />
      <Text style={styles.labelText}>Water Temp</Text>
      <DropDownPicker
        multiple={true}
        min={0}
        max={4}
        open={waterTempOpen}
        value={waterTempValue}
        items={waterTempItems}
        zIndex={1200}
        setOpen={handleWaterTempOpen}
        setValue={setWaterTempValue}
        setItems={setWaterTempItems}
      />
      <Text style={styles.labelText}>Time Of Day</Text>
      <DropDownPicker
        multiple={true}
        min={0}
        max={4}
        open={timeOfDayOpen}
        value={timeOfDayValue}
        items={timeOfDayItems}
        zIndex={1100}
        setOpen={handletimeOfDayOpen}
        setValue={settimeOfDayValue}
        setItems={settimeOfDayItems}
      />
      <Text style={styles.labelText}>Water Clarity</Text>
      <DropDownPicker
        multiple={true}
        min={0}
        max={3}
        open={waterClarityOpen}
        value={waterClarityValue}
        items={waterClarityItems}
        zIndex={1000}
        setOpen={handleWaterClarityOpen}
        setValue={setWaterClarityValue}
        setItems={setWaterClarityItems}
      />
      <Text style={styles.labelText}>Pattern</Text>
      <DropDownPicker
        multiple={true}
        min={0}
        max={5}
        open={patternOpen}
        value={patternValue}
        items={patternItems}
        zIndex={900}
        setOpen={handlePatternOpen}
        setValue={setPatternValue}
        setItems={setPatternItems}
      />
      <Text style={styles.labelText}>Opacity</Text>
      <DropDownPicker
        multiple={true}
        min={0}
        max={3}
        open={opacityOpen}
        value={opacityValue}
        items={opacityItems}
        zIndex={800}
        setOpen={handleOpacityOpen}
        setValue={setOpacityValue}
        setItems={setOpacityItems}
      />
      <Text style={styles.labelText}>Wind</Text>
      <DropDownPicker
        multiple={true}
        min={0}
        max={4}
        open={windOpen}
        value={windValue}
        items={windItems}
        zIndex={700}
        setOpen={handleWindOpen}
        setValue={setWindValue}
        setItems={setWindItems}
      />
      <Text style={styles.labelText}>Depth</Text>
      <DropDownPicker
        multiple={true}
        min={0}
        max={4}
        open={depthOpen}
        value={depthValue}
        items={depthItems}
        zIndex={600}
        setOpen={handleDepthOpen}
        setValue={setDepthValue}
        setItems={setDepthItems}
      />
      <Text style={styles.labelText}>Weather Condition</Text>
      <DropDownPicker
        multiple={true}
        min={0}
        max={4}
        open={weatherConditionOpen}
        value={weatherConditionValue}
        items={weatherConditionItems}
        zIndex={500}
        setOpen={handleWeatherConditionOpen}
        setValue={setWeatherConditionValue}
        setItems={setWeatherConditionItems}
      />
      <Text style={styles.labelText}>Structure</Text>
      <DropDownPicker
        multiple={true}
        min={0}
        max={3}
        open={structureOpen}
        value={structureValue}
        items={structureItems}
        zIndex={400}
        setOpen={handleStructureOpen}
        setValue={setStructureValue}
        setItems={setStructureItems}
      />
      <Text style={styles.labelText}>Instruction</Text>
      <DropDownPicker
        multiple={true}
        min={0}
        max={11}
        open={instructionOpen}
        value={instructionValue}
        items={instructionItems}
        zIndex={300}
        setOpen={handleInstructionOpen}
        setValue={setInstructionValue}
        setItems={setInstructionItems}
      />
      <Text style={styles.labelText}>Behavior</Text>
      <DropDownPicker
        multiple={true}
        min={0}
        max={5}
        open={behaviorOpen}
        value={behaviorValue}
        items={behaviorItems}
        zIndex={200}
        setOpen={handleBehaviorOpen}
        setValue={setBehaviorValue}
        setItems={setBehaviorItems}
      />
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
