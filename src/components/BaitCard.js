import React, {useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import ButtonComponent from './ButtonComponent';

const BaitCard = ({detail}) => {
  const [state, setState] = useState({
    pattern: false,
    addInfo: false,
    structure: false,
    instruction: false,
  });
  const dropDownImage = require('../assets/images/dropdown.png');

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: detail.imageUri,
          }}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.baitName}>{detail.name}</Text>
      </View>

      <View style={state.pattern && styles.fullContainer}>
        <View
          style={
            state.pattern ? styles.openedFeature : styles.featureContainer
          }>
          <View>
            <Text style={styles.featureText}>Pattern for Spring</Text>
          </View>
          <Pressable
            onPress={() => {
              setState({pattern: !state.pattern});
            }}>
            <Text style={styles.ReadMoreText}>
              {state.pattern ? 'Read Less' : 'Read More'}
            </Text>
          </Pressable>
        </View>
        {state.pattern && (
          <View>
            <Text>
              Spring Clear Bream/bluegill-natural patterns green/yellow base
              with small amounts of chartreuse and orange highlights. Shad- What
              base with chartreuse or sexy shad pattern.
            </Text>
          </View>
        )}
      </View>
      <View style={state.addInfo && styles.fullContainer}>
        <View
          style={
            state.addInfo ? styles.openedFeature : styles.featureContainer
          }>
          <View>
            <Text style={styles.featureText}>Additional Info</Text>
          </View>
          <Pressable
            onPress={() => {
              setState({addInfo: !state.addInfo});
            }}>
            <Text style={styles.ReadMoreText}>
              {state.addInfo ? 'Read Less' : 'Read More'}
            </Text>
          </Pressable>
        </View>
        {state.addInfo && (
          <View>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              ullamcorper risus nisl, vitae molestie tellus rutrum eget.Lorem
              ipsum dolor sit amet, consectetur.
            </Text>
          </View>
        )}
      </View>
      <View style={state.structure && styles.fullContainer}>
        <View
          style={
            state.structure ? styles.openedFeature : styles.featureContainer
          }>
          <View>
            <Text style={styles.featureText}>Pattern for Spring</Text>
          </View>
          <Pressable
            style={{justifyContent: 'center'}}
            onPress={() => {
              setState({structure: !state.structure});
            }}>
            <Image source={dropDownImage} style={styles.iconImage} />
          </Pressable>
        </View>
        {state.structure && (
          <View>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              ullamcorper risus nisl, vitae molestie tellus rutrum eget.Lorem
              ipsum dolor sit amet, consectetur.
            </Text>
          </View>
        )}
      </View>
      <View style={state.instruction && styles.fullContainer}>
        <View
          style={
            state.instruction ? styles.openedFeature : styles.featureContainer
          }>
          <View>
            <Text style={styles.featureText}>Instruction</Text>
          </View>
          <Pressable
            onPress={() => {
              setState({instruction: !state.instruction});
            }}>
            <Text style={styles.ReadMoreText}>
              {state.instruction ? 'Read Less' : 'Read More'}
            </Text>
          </Pressable>
        </View>
        {state.instruction && (
          <View>
            <Text>
              Wake Baits When the bait fish start migrating into the backs of
              pockets, the wake bait triggers and aggressive feeding response. “
              During the fall, you can throw it around schooling fish first
              thing in the morning, and pretty much get bit on it all day long.
              When it’s overcast skies and there’s just a very ripple on the
              water.
            </Text>
          </View>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComponent text={'Buy Now'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 13,
    marginVertical: 22,
    paddingHorizontal: 21,
    paddingVertical: 28,
  },
  baitName: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 24,
    backgroundColor: '#efefef',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 35,
    textAlign: 'center',
  },
  fullContainer: {
    backgroundColor: '#eee',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginTop: 15,
  },
  featureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 6,
    borderColor: '#eee',
    borderWidth: 1,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 8,
  },
  openedFeature: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  featureText: {
    color: '#0a6f9d',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '500',
    fontFamily: 'Montserrat',
  },
  ReadMoreText: {
    fontSize: 13,
    lineHeight: 16,
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    marginTop: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    width: 245,
    height: 105,
    resizeMode: 'contain',
  },
  iconImage: {
    width: 20,
    height: 11,
  },
});
export default BaitCard;
