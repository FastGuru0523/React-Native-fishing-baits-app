import firestore from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ListItem = ({navigation}) => {
  const [allBaits, setAllBaits] = useState([]);
  useEffect(() => {
    firestore()
      .collection('baits')
      .get()
      .then(res => {
        let temp = [];
        res.forEach(doc => {
          temp.push(doc.data());
        });
        setAllBaits(temp);
      });
  }, []);
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Baits List</Text>
      {allBaits.map((item, key) => (
        <View key={key} style={styles.itemCard}>
          <Text style={styles.smallText}>{item.name}</Text>
          <Text style={styles.smallText}>{item.type}</Text>
          <Text style={styles.smallText}>{item.season}</Text>
          <Text style={styles.smallText}>{item.waterTemp}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
    backgroundColor: '#2a8ab7',
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
  itemCard: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    marginRight: 20,
    marginLeft: 10,
    padding: 10,
    alignSelf: 'stretch',
  },
  smallText: {
    width: 100,
    fontSize: 15,
    textAlign: 'left',
  },
});
export default ListItem;
