import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {addItem, getBaits} from '../services/ItemService';

const AddItem = ({navigation}) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [season, setSeason] = useState('');
  const [waterTemp, setWaterTemp] = useState('');

  const handleSubmit = () => {
    const newBait = {
      name: name,
      type: type,
      season: season,
      waterTemp: waterTemp,
    };
    console.log('==============', newBait);
    addItem(newBait);
    const allBaits = getBaits();
    console.log('all Baits ', allBaits);
    // navigation.navigate('ListItem', allBaits);
  };
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Add Item</Text>
      <Text>Name</Text>
      <TextInput style={styles.itemInput} onChangeText={setName} />
      <Text>Type</Text>
      <TextInput style={styles.itemInput} onChangeText={setType} />
      <Text>Season</Text>
      <TextInput style={styles.itemInput} onChangeText={setSeason} />
      <Text>Water Temp</Text>
      <TextInput style={styles.itemInput} onChangeText={setWaterTemp} />
      <TouchableHighlight
        style={styles.button}
        underlayColor="white"
        onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add</Text>
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
