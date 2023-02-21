import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

const AddDescription = ({navigation, route}) => {
  const baitData = route.params.data;
  const [addInfo, onChangeAddInfo] = useState(baitData.additionalInfo);
  const [instruction, onChangeInstruction] = useState(baitData.instructionDec);
  const [pattern, onChangePattern] = useState({
    spring: baitData.patternDec ? baitData.patternDec.spring : '',
    summer: baitData.patternDec ? baitData.patternDec.summer : '',
    fall: baitData.patternDec ? baitData.patternDec.fall : '',
    winter: baitData.patternDec ? baitData.patternDec.winter : '',
  });
  const [structure, onChangeStructure] = useState({
    general: baitData.structure ? baitData.structure.general : '',
    spring: baitData.structure ? baitData.structure.spring : '',
    summer: baitData.structure ? baitData.structure.summer : '',
    fall: baitData.structure ? baitData.structure.fall : '',
    winter: baitData.structure ? baitData.structure.winter : '',
  });
  const [btnDisabled, setBtnDisabled] = useState(false);

  useEffect(() => {
    console.log('22222222', baitData);
  });

  const handleSubmit = () => {
    console.log('hi');
    setBtnDisabled(true);

    firestore()
      .collection('baits')
      .doc()
      .set({
        name: baitData.name,
        groupType: baitData.groupType,
        type: baitData.type,
        season: baitData.season,
        waterTemp: baitData.waterTemp,
        timeOfDay: baitData.timeOfDay,
        waterClarity: baitData.waterClarity,
        pattern: baitData.pattern,
        opacity: baitData.opacity,
        wind: baitData.wind,
        depth: baitData.depth,
        weatherCondition: baitData.weatherCondition,
        structure: baitData.structure,
        instruction: baitData.instruction,
        behavior: baitData.behavior,
        current: baitData.current,
        imageUri: baitData.imageUri,
        line: baitData.line,
        pound: baitData.pound,
        additionalInfo: addInfo,
        instructionDec: instruction,
        patternDec: pattern,
        structureDec: structure,
      })
      .then(res => {
        console.log('Bait added!');
        setBtnDisabled(false);
        navigation.navigate('ListItem');
      });
  };

  return (
    <ScrollView style={styles.main}>
      <Text style={styles.title}>Add Descriptions</Text>

      <Text style={styles.subTitle}>1. Additional Information</Text>
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={styles.input}
        onChangeText={onChangeAddInfo}
        value={addInfo}
      />

      <Text style={styles.subTitle}>2. Instruction Description</Text>
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={styles.input}
        onChangeText={onChangeInstruction}
        value={instruction}
      />

      <Text style={styles.subTitle}>3. Pattern</Text>

      <Text style={[styles.subTitle, {fontSize: 15, paddingTop: 5}]}>
        - Pattern for Spring
      </Text>
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={[styles.input, {height: 70}]}
        onChangeText={text => onChangePattern({...pattern, spring: text})}
        value={pattern.spring}
      />
      <Text style={[styles.subTitle, {fontSize: 15, paddingTop: 5}]}>
        - Pattern for Summer
      </Text>
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={[styles.input, {height: 70}]}
        onChangeText={text => onChangePattern({...pattern, summer: text})}
        value={pattern.summer}
      />
      <Text style={[styles.subTitle, {fontSize: 15, paddingTop: 5}]}>
        - Pattern for Fall
      </Text>
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={[styles.input, {height: 70}]}
        onChangeText={text => onChangePattern({...pattern, fall: text})}
        value={pattern.fall}
      />
      <Text style={[styles.subTitle, {fontSize: 15, paddingTop: 5}]}>
        - Pattern for Winter
      </Text>
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={[styles.input, {height: 70}]}
        onChangeText={text => onChangePattern({...pattern, winter: text})}
        value={pattern.winter}
      />

      <Text style={styles.subTitle}>4. Structure</Text>

      <Text style={[styles.subTitle, {fontSize: 15, paddingTop: 5}]}>
        - Structure for General
      </Text>
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={[styles.input, {height: 70}]}
        onChangeText={text => onChangeStructure({...structure, general: text})}
        value={structure.general}
      />
      <Text style={[styles.subTitle, {fontSize: 15, paddingTop: 5}]}>
        - Structure for Spring
      </Text>
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={[styles.input, {height: 70}]}
        onChangeText={text => onChangeStructure({...structure, spring: text})}
        value={structure.spring}
      />
      <Text style={[styles.subTitle, {fontSize: 15, paddingTop: 5}]}>
        - Structure for Summer
      </Text>
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={[styles.input, {height: 70}]}
        onChangeText={text => onChangeStructure({...structure, summer: text})}
        value={structure.summer}
      />
      <Text style={[styles.subTitle, {fontSize: 15, paddingTop: 5}]}>
        - Structure for Fall
      </Text>
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={[styles.input, {height: 70}]}
        onChangeText={text => onChangeStructure({...structure, fall: text})}
        value={structure.fall}
      />
      <Text style={[styles.subTitle, {fontSize: 15, paddingTop: 5}]}>
        - Structure for Winter
      </Text>
      <TextInput
        multiline={true}
        numberOfLines={4}
        style={[styles.input, {height: 70}]}
        onChangeText={text => onChangeStructure({...structure, winter: text})}
        value={structure.winter}
      />
      <TouchableHighlight
        style={[styles.button, btnDisabled && {backgroundColor: '#2a8ab7'}]}
        underlayColor="white"
        disabled={btnDisabled}
        onPress={handleSubmit}>
        <Text style={styles.buttonText}>ADD</Text>
      </TouchableHighlight>
      <TouchableOpacity
        style={{paddingTop: 10}}
        onPress={() => {
          navigation.navigate('AdminHome');
        }}>
        <Text style={{textAlign: 'right', paddingRight: 30}}>
          Go to admin home screen...
        </Text>
      </TouchableOpacity>
      <View style={styles.space} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexGrow: 1,
    padding: 30,
    backgroundColor: '#2a8ab7',
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: 'black',
  },
  subTitle: {
    fontSize: 18,
    color: 'white',
  },
  input: {
    height: 100,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 10,
  },
  space: {
    marginVertical: 50,
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
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center',
  },
});
export default AddDescription;
