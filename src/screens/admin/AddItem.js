import React, {useRef, useState} from 'react';
import {
  Button,
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
    {label: 'Yes', value: 'Yes'},
    {label: 'No', value: 'No'},
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
    {label: 'Clear', value: 'Clear'},
    {label: 'Stained', value: 'Stained'},
    {label: 'Dirty', value: 'Dirty'},
    {label: 'General', value: 'General'},
    {label: 'Laydown & Brush', value: 'Laydown & Brush'},
    {label: 'Rocks', value: 'Rocks'},
    {label: 'Grass', value: 'Grass'},
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

const AddItem = ({navigation}) => {
  // const [name, setName] = useState('');
  // const [photo, setPhoto] = useState('');
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

  const handleTest = () => {
    console.log('SSS', TextRef.current);
  };

  const handleChange = text => {
    TextRef.current = text;
    console.log(text);
  };

  const handleOpen = index => {
    open !== index ? setOpen(index) : setOpen(null);
    console.log('open ', open);
  };

  const handlePick = text => {
    const temp = result.type;
    if (!temp.includes(text()[0])) {
      setResult({...result, type: [...result.type, text()[0]]});
    } else {
      setResult({
        ...result,
        type: [...result.type.filter(t => t !== text()[0])],
      });
    }
  };

  // const handlePick = (text, stateName) => {
  //   const temp = result[stateName];
  //   if (!temp.includes(text()[0])) {
  //     setResult({...result, stateName: [...result[stateName], text()[0]]});
  //   } else {
  //     setResult({
  //       ...result,
  //       stateName: [...result[stateName].filter(t => t !== text()[0])],
  //     });
  //   }
  // };

  return (
    <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Add New Bait</Text>
      <View>
        <Text style={styles.labelText}>Bait Name</Text>
        <TextInput
          style={styles.itemInput}
          onChangeText={text => handleChange(text)}
        />

        <Button onPress={handleTest} title="Test" />
      </View>
      <Text style={styles.labelText}>Bait Type</Text>
      <DropDownPicker
        multiple={true}
        min={0}
        max={5}
        open={open == 0}
        value={result.type}
        items={DropdownItems[0]}
        zIndex={1500}
        setOpen={() => handleOpen(0)}
        setValue={handlePick}
      />
      <Text style={styles.labelText}>Season</Text>
      <DropDownPicker
        multiple={true}
        min={0}
        max={4}
        open={open == 1}
        value={result.season}
        items={DropdownItems[1]}
        zIndex={1400}
        setOpen={() => handleOpen(1)}
        setValue={handlePick}
      />
      {/*<Text style={styles.labelText}>Current</Text>
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
      /> */}
      {/* <Text style={styles.labelText}>Pattern</Text>
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
      /> */}
      <TouchableHighlight
        style={styles.button}
        underlayColor="white"
        // onPress={handleSubmit}
      >
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
