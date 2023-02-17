/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import firestore from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ListItem = ({navigation}) => {
  const deleteItem = key => {
    firestore()
      .collection('baits')
      .doc(key)
      .delete()
      .then(res => getItems());
  };

  const getItems = () => {
    firestore()
      .collection('baits')
      .get()
      .then(res => {
        let temp = [];
        res.forEach(doc => {
          const bait = {};
          bait.data = doc.data();
          bait.id = doc.id;
          // console.log('bait ', bait);
          temp.push(bait);
        });
        setAllBaits(temp);
      });
  };

  const Item = ({data, baitId}) => (
    <View style={styles.itemCard}>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <Image
          style={{width: 250, height: 200, resizeMode: 'stretch'}}
          source={{
            uri: data.imageUri,
          }}
        />
      </View>
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
      <Text style={styles.smallText}>
        Structure: {data.structure.toString()}
      </Text>
      <Text style={styles.smallText}>Behavior: {data.behavior.toString()}</Text>
      <Text style={styles.smallText}>
        Instruction: {data.instruction.toString()}
      </Text>
      <View style={styles.btnView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('EditItem', {itemId: baitId});
          }}>
          <Text style={[styles.btnText, {backgroundColor: '#2a8ab7'}]}>
            Edit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            deleteItem(baitId);
          }}>
          <Text style={styles.btnText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderItem = ({item}) => <Item baitId={item.id} data={item.data} />;

  const [allBaits, setAllBaits] = useState([]);
  useEffect(() => {
    getItems();
  }, []);
  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.title}>Baits List</Text>
      {!allBaits.length && (
        <Text style={{textAlign: 'center', fontSize: 18, color: 'white'}}>
          There's no loaded bait...
        </Text>
      )}
      <FlatList
        data={allBaits}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AdminHome');
        }}>
        <Text style={{textAlign: 'right', paddingRight: 30}}>
          Go to admin home screen...
        </Text>
      </TouchableOpacity>
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
    color: 'black',
  },
  btnText: {
    fontSize: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#ff4d4d',
    borderRadius: 3,
    color: '#fefefe',
    textAlign: 'center',
    marginRight: 10,
  },

  btnView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
export default ListItem;
