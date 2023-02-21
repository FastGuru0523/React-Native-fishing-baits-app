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
      <Text style={styles.smallText}>Name</Text>
      <Text style={styles.normalText}>{data.name}</Text>

      <Text style={styles.smallText}>Type</Text>
      <Text style={styles.normalText}>{data.type.toString()}</Text>

      <Text style={styles.smallText}>Season</Text>
      <Text style={styles.normalText}>{data.season.toString()}</Text>

      <Text style={styles.smallText}>Water Temperature</Text>
      <Text style={styles.normalText}>{data.waterTemp.toString()}</Text>

      <Text style={styles.smallText}>Time of day</Text>
      <Text style={styles.normalText}>{data.timeOfDay.toString()}</Text>

      <Text style={styles.smallText}>Water Clarity</Text>
      <Text style={styles.normalText}>{data.waterClarity.toString()}</Text>

      <Text style={styles.smallText}>Pattern</Text>
      <Text style={styles.normalText}>{data.pattern.toString()}</Text>

      <Text style={styles.smallText}>Opacity</Text>
      <Text style={styles.normalText}>{data.opacity.toString()}</Text>

      <Text style={styles.smallText}>Wind</Text>
      <Text style={styles.normalText}>{data.wind.toString()}</Text>

      <Text style={styles.smallText}>Depth</Text>
      <Text style={styles.normalText}>{data.depth.toString()}</Text>

      <Text style={styles.smallText}>Weather Condition:</Text>
      <Text style={styles.normalText}>{data.weatherCondition.toString()}</Text>

      <Text style={styles.smallText}>current</Text>
      <Text style={styles.normalText}>{data.current}</Text>

      <Text style={styles.smallText}>Structure</Text>
      <Text style={styles.normalText}>{data.structure.toString()}</Text>

      <Text style={styles.smallText}>Behavior</Text>
      <Text style={styles.normalText}>{data.behavior.toString()}</Text>

      <Text style={styles.smallText}>Instruction</Text>
      <Text style={styles.normalText}>{data.instruction.toString()}</Text>

      <Text style={styles.smallText}>Addtional Information</Text>
      <Text style={styles.normalText}>{data.additionalInfo}</Text>

      <Text style={styles.smallText}>Instruction Description</Text>
      <Text style={styles.normalText}>{data.instructionDec}</Text>

      <Text style={styles.smallText}>Structure for general</Text>
      <Text style={styles.normalText}>{data.structureDec.general}</Text>

      <Text style={styles.smallText}>Structure for spring</Text>
      <Text style={styles.normalText}>{data.structureDec.spring}</Text>

      <Text style={styles.smallText}>Structure for summer</Text>
      <Text style={styles.normalText}>{data.structureDec.summer}</Text>

      <Text style={styles.smallText}>Structure for fall</Text>
      <Text style={styles.normalText}>{data.structureDec.fall}</Text>

      <Text style={styles.smallText}>Structure for winter</Text>
      <Text style={styles.normalText}>{data.structureDec.winter}</Text>

      <Text style={styles.smallText}>Pattern for spring</Text>
      <Text style={styles.normalText}>{data.patternDec.spring}</Text>

      <Text style={styles.smallText}>Pattern for summer</Text>
      <Text style={styles.normalText}>{data.patternDec.summer}</Text>

      <Text style={styles.smallText}>Pattern for fall</Text>
      <Text style={styles.normalText}>{data.patternDec.fall}</Text>

      <Text style={styles.smallText}>Pattern for winter</Text>
      <Text style={styles.normalText}>{data.patternDec.winter}</Text>

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
    fontSize: 17,
    textAlign: 'left',
    color: '#2a8ab7',
  },
  normalText: {
    width: '100%',
    fontSize: 15,
    textAlign: 'left',
    color: '#555',
    paddingLeft: 15,
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
