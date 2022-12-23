import firestore from '@react-native-firebase/firestore';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const AddItem = ({navigation}) => {
  const [name, setName] = useState('');
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
  const handleSubmit = () => {
    firestore()
      .collection('baits')
      .doc()
      .set({
        name: name,
        type: typeValue,
        season: seasonValue,
        waterTemp: waterTempValue,
      })
      .then(res => {
        console.log('Bait added!');
      });
  };
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Add New Bait</Text>
      <Text style={styles.labelText}>Bait Name</Text>
      <TextInput style={styles.itemInput} onChangeText={setName} />
      <Text style={styles.labelText}>Bait Type</Text>
      <DropDownPicker
        open={typeOpen}
        value={typeValue}
        items={typeItems}
        zIndex={300}
        setOpen={setTypeOpen}
        setValue={setTypeValue}
        setItems={setTypeItems}
      />
      <Text style={styles.labelText}>Bait Season</Text>
      <DropDownPicker
        open={seasonOpen}
        value={seasonValue}
        items={seasonItems}
        zIndex={200}
        setOpen={setSeasonOpen}
        setValue={setSeasonValue}
        setItems={setSeasonItems}
      />
      <Text style={styles.labelText}>Bait Water Temp</Text>
      <DropDownPicker
        open={waterTempOpen}
        value={waterTempValue}
        items={waterTempItems}
        zIndex={100}
        setOpen={setWaterTempOpen}
        setValue={setWaterTempValue}
        setItems={setWaterTempItems}
      />

      <TouchableHighlight
        style={styles.button}
        underlayColor="white"
        onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Bait</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
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
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});

export default AddItem;
