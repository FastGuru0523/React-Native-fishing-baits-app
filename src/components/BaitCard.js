import React, {useEffect, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import ButtonComponent from './ButtonComponent';

const BaitCard = ({detail}) => {
  const [open, setOpen] = useState({
    pattern: false,
    addInfo: false,
    structure: false,
    instruction: false,
  });
  const dropDownImage = require('../assets/images/dropdown.png');

  useEffect(() => {
    console.log('5555555555', detail);
  });

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

      <View style={open.pattern && styles.fullContainer}>
        <View
          style={open.pattern ? styles.openedFeature : styles.featureContainer}>
          <View>
            <Text style={styles.featureText}>Pattern for {detail.season}</Text>
          </View>
          <Pressable
            onPress={() => {
              setOpen({...open, pattern: !open.pattern});
            }}>
            <Text style={styles.ReadMoreText}>
              {open.pattern ? 'Read Less' : 'Read More'}
            </Text>
          </Pressable>
        </View>
        {open.pattern && (
          <View>
            <Text style={styles.descText}>
              {detail.patternDec[detail.season]}
            </Text>
          </View>
        )}
      </View>
      <View style={open.addInfo && styles.fullContainer}>
        <View
          style={open.addInfo ? styles.openedFeature : styles.featureContainer}>
          <View>
            <Text style={styles.featureText}>Additional Info</Text>
          </View>
          <Pressable
            onPress={() => {
              setOpen({addInfo: !open.addInfo});
            }}>
            <Text style={styles.ReadMoreText}>
              {open.addInfo ? 'Read Less' : 'Read More'}
            </Text>
          </Pressable>
        </View>
        {open.addInfo && (
          <View>
            <Text style={styles.descText}>{detail.additionalInfo}</Text>
          </View>
        )}
      </View>
      <View style={open.structure && styles.fullContainer}>
        <View
          style={
            open.structure ? styles.openedFeature : styles.featureContainer
          }>
          <View>
            <Text style={styles.featureText}>Structure</Text>
          </View>
          <Pressable
            style={styles.justifyCenter}
            onPress={() => {
              setOpen({structure: !open.structure});
            }}>
            <Image source={dropDownImage} style={styles.iconImage} />
          </Pressable>
        </View>
        {open.structure && (
          <View>
            <Text style={styles.descText}>
              {detail.structureDec[detail.season]}
            </Text>
          </View>
        )}
      </View>
      <View style={open.instruction && styles.fullContainer}>
        <View
          style={
            open.instruction ? styles.openedFeature : styles.featureContainer
          }>
          <View>
            <Text style={styles.featureText}>Instruction</Text>
          </View>
          <Pressable
            onPress={() => {
              setOpen({instruction: !open.instruction});
            }}>
            <Text style={styles.ReadMoreText}>
              {open.instruction ? 'Read Less' : 'Read More'}
            </Text>
          </Pressable>
        </View>
        {open.instruction && (
          <View>
            <Text style={styles.descText}>{detail.instructionDec}</Text>
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
    color: 'black',
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
    color: 'black',
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
  descText: {
    color: '#000',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
});
export default BaitCard;
