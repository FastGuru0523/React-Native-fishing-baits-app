import firestore from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const Item = ({data}) => (
  <View style={styles.itemCard}>
    <Text style={styles.smallText}>Name: {data.name}</Text>
    <Text style={styles.smallText}>Type: {data.type.toString()}</Text>
    <Text style={styles.smallText}>Season: {data.season.toString()}</Text>
    <Text style={styles.smallText}>
      Water Temperature: {data.waterTemp.toString()}
    </Text>
    <Text style={styles.smallText}>
      Time of day: {data.timeOfDay.toString()}
    </Text>
    <Text style={styles.smallText}>
      Water Clarity: {data.waterClarity.toString()}
    </Text>
    <Text style={styles.smallText}>Pattern: {data.pattern.toString()}</Text>
    <Text style={styles.smallText}>Opacity: {data.opacity.toString()}</Text>
    <Text style={styles.smallText}>Wind: {data.wind.toString()}</Text>
    <Text style={styles.smallText}>Depth: {data.depth.toString()}</Text>
    <Text style={styles.smallText}>
      Weather Condition: {data.weatherCondition.toString()}
    </Text>
    <Text style={styles.smallText}>current: {data.current}</Text>
    <Text style={styles.smallText}>Structure: {data.structure.toString()}</Text>
    <Text style={styles.smallText}>Behavior: {data.behavior.toString()}</Text>
    <Text style={styles.smallText}>
      Instruction: {data.instruction.toString()}
    </Text>
  </View>
);

const ListItem = ({navigation}) => {
  const renderItem = ({item}) => <Item data={item.data} />;

  const [allBaits, setAllBaits] = useState([]);
  useEffect(() => {
    firestore()
      .collection('baits')
      .get()
      .then(res => {
        let temp = [];
        res.forEach(doc => {
          const bait = {};
          bait.data = doc.data();
          bait.id = doc.id;
          console.log('bait ', bait);
          temp.push(bait);
        });
        setAllBaits(temp);
      });
  }, []);
  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.title}>Baits List</Text>
      <FlatList
        data={allBaits}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
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
    display: 'flex',
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
  seasonView: {
    width: '25%',
  },
  seasonText: {
    width: '100%',
  },
  smallText: {
    width: '100%',
    padding: 10,
    fontSize: 15,
    textAlign: 'left',
  },
});
export default ListItem;
