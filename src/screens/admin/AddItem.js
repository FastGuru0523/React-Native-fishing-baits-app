/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Image,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {ScrollView} from 'react-native-virtualized-view';

const DropdownItems = [
  [
    {label: 'Crankbaits', value: 'Crankbaits'},
    {label: 'Spinnerbaits', value: 'Spinnerbaits'},
    {label: 'Plastic worms', value: 'Plastic worms'},
    {label: 'Topwater baits', value: 'Topwater baits'},
    {label: 'Jigs', value: 'Jigs'},
    {label: 'Swimbaits', value: 'Swimbaits'},
    {label: 'Jerkbaits', value: 'Jerkbaits'},
    {label: 'Tube baits', value: 'Tube baits'},
    {label: 'Grubs', value: 'Grubs'},
    {label: 'Chatterbaits', value: 'Chatterbaits'},
    {label: 'Frogs', value: 'Frogs'},
    {label: 'Crawfish', value: 'Crawfish'},
    {
      label: 'Soft plastic creature baits',
      value: 'Soft plastic creature baits',
    },
  ],
  [
    {label: 'spring', value: 'spring'},
    {label: 'summer', value: 'summer'},
    {label: 'fall', value: 'fall'},
    {label: 'winter', value: 'winter'},
  ],
  [
    {label: '38-40', value: '38-40'},
    {label: '40-42', value: '40-42'},
    {label: '42-44', value: '42-44'},
    {label: '44-46', value: '44-46'},
    {label: '46-48', value: '46-48'},
    {label: '48-50', value: '48-50'},
    {label: '50-52', value: '50-52'},
    {label: '52-54', value: '52-54'},
    {label: '54-56', value: '54-56'},
    {label: '56-58', value: '56-58'},
    {label: '58-60', value: '58-60'},
    {label: '60-62', value: '60-62'},
    {label: '62-64', value: '62-64'},
    {label: '64-66', value: '64-66'},
    {label: '66-68', value: '66-68'},
    {label: '68-70', value: '68-70'},
    {label: '70-72', value: '70-72'},
    {label: '72-74', value: '72-74'},
    {label: '74+', value: '74+'},
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
    {label: 'Rocks', value: 'Rocks'},
    {label: 'Grass', value: 'Grass'},
    {label: 'Dams', value: 'Dams'},
    {label: 'Drop-offs', value: 'Drop-offs'},
    {label: 'Reffs', value: 'Reffs'},
    {label: 'Brush Piles', value: 'Brush Piles'},
    {label: 'Points', value: 'Points'},
  ],
  [
    {label: 'Skittish', value: 'Skittish'},
    {label: 'Lock Jaw', value: 'Lock Jaw'},
    {label: 'Suspended', value: 'Suspended'},
    {label: 'On the Move', value: 'On the Move'},
    {label: 'Hidden in Cover', value: 'Hidden in Cover'},
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
    {label: 'Yes', value: 'Yes'},
    {label: 'No', value: 'No'},
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
  [
    {label: 'Braided', value: 'Braided'},
    {label: 'Monofilament', value: 'Monofilament'},
    {label: 'Fluorocarbon', value: 'Fluorocarbon'},
    {label: 'Copolymer', value: 'Copolymer'},
  ],
  [
    {label: '2-6 lb', value: '2-6 lb'},
    {label: '6-8 lb', value: '6-8 lb'},
    {label: '8-10 lb', value: '8-10 lb'},
    {label: '10-12 lb', value: '10-12 lb'},
    {label: '12-15 lb', value: '12-15 lb'},
    {label: '15-20 lb', value: '15-20 lb'},
  ],
];

const Fields = [
  'type',
  'season',
  'waterTemp',
  'timeOfDay',
  'waterClarity',
  'opacity',
  'wind',
  'depth',
  'weatherCondition',
  'structure',
  'behavior',
  'instruction',
  'current',
  'pattern',
  'line',
  'pound',
];

const typeItems = {
  Crankbaits: [
    {label: 'Lipless Crankbaits', value: 'Lipless Crankbaits'},
    {label: 'Diving Crankbaits', value: 'Diving Crankbaits'},
    {label: 'Shallow Running Crankbaits', value: 'Shallow Running Crankbaits'},
    {label: 'Medium Diving Crankbaits', value: 'Medium Diving Crankbaits'},
    {label: 'Deep Diving Crankbaits', value: 'Deep Diving Crankbaits'},
    {label: 'Rattle Traps', value: 'Rattle Traps'},
    {label: 'Squarebill Crankbaits', value: 'Squarebill Crankbaits'},
    {label: 'Lipless Rattle Traps', value: 'Lipless Rattle Traps'},
    {label: 'Jerkbaits', value: 'Jerkbaits'},
    {label: 'Minnow Crankbaits', value: 'Minnow Crankbaits'},
    {label: 'Stick baits', value: 'Stick baits'},
    {label: 'Blade baits', value: 'Blade baits'},
    {label: 'Flat-sided Crankbaits', value: 'Flat-sided Crankbaits'},
    {label: 'Bull Crankbait', value: 'Bull Crankbait'},
    {label: 'Wake baits', value: 'Wake baits'},
  ],
  Spinnerbaits: [
    {label: 'Single Blade Spinnerbaits', value: 'Single Blade Spinnerbaits'},
    {label: 'Double Blade Spinnerbaits', value: 'Double Blade Spinnerbaits'},
    {label: 'Chatterbaits', value: 'Chatterbaits'},
    {label: 'Buzzbaits', value: 'Buzzbaits'},
    {label: 'Bladed jigs', value: 'Bladed jigs'},
    {label: 'Inline Spinners', value: 'Inline Spinners'},
    {
      label: 'Colorado/Indiana Blade Spinnerbaits',
      value: 'Colorado/Indiana Blade Spinnerbaits',
    },
    {
      label: 'Willow-leaf Blade Spinnerbaits',
      value: 'Willow-leaf Blade Spinnerbaits',
    },
    {label: 'French Blade Spinnerbaits', value: 'French Blade Spinnerbaits'},
    {label: 'Triple Blade Spinnerbaits', value: 'Triple Blade Spinnerbaits'},
    {
      label: 'Skirt and Trailer combinations',
      value: 'Skirt and Trailer combinations',
    },
    {label: 'Offset Spinnerbaits', value: 'Offset Spinnerbaits'},
    {
      label: 'Silicone Skirts Spinnerbaits',
      value: 'Silicone Skirts Spinnerbaits',
    },
    {label: 'Football Head Spinnerbaits', value: 'Football Head Spinnerbaits'},
    {label: 'Flipping Spinnerbaits', value: 'Flipping Spinnerbaits'},
  ],
};

const AddItem = ({navigation}) => {
  const [open, setOpen] = useState(null);
  const [result, setResult] = useState({
    type: null,
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
    filePath: null,
    line: [],
    pound: [],
    additionalInfo: '',
    instructionDec: '',
    structureDec: {
      general: '',
      spring: '',
      summer: '',
      fall: '',
      winter: '',
    },
    patternDec: {
      spring: '',
      summer: '',
      fall: '',
      winter: '',
    },
  });
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [subTypeOpen, setSubTypeOpen] = useState(false);
  const [subTypeValue, setSubTypeValue] = useState();
  const [pickerOpen, setPickerOpen] = useState(false);
  // const TextRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    setResult({
      type: null,
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
      filePath: null,
      line: [],
      pound: [],
    });
    setSubTypeValue([]);
  }, []);

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else {
      return true;
    }
  };

  const captureImage = async type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        console.log('base64 -> ', response.base64);
        // console.log('uri -> ', response.uri);
        // console.log('width -> ', response.width);
        // console.log('height -> ', response.height);
        // console.log('fileSize -> ', response.fileSize);
        // console.log('type -> ', response.type);
        // console.log('fileName -> ', response.fileName);
        // setFilePath(response);
        setResult({filePath: response.base64});
      });
    }
  };

  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.assets[0].uri);
      //   console.log('uri -> ', response.uri);
      //   console.log('width -> ', response.width);
      //   console.log('height -> ', response.height);
      //   console.log('fileSize -> ', response.fileSize);
      //   console.log('type -> ', response.type);
      //   console.log('fileName -> ', response.fileName);
      // setFilePath(response);
      setResult({...result, filePath: response.assets[0].uri});
    });
  };

  const ImagePicker = () => {
    return (
      <SafeAreaView style={{paddingTop: 5}}>
        <View style={styles.container}>
          <Image
            source={{
              uri: result.filePath,
            }}
            style={styles.imageStyle}
          />
          {/* <Image source={{uri: filePath.uri}} style={styles.imageStyle} /> */}
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.buttonStyle}
            onPress={() => captureImage('photo')}>
            <Text style={styles.textStyle}>Launch Camera for Image</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.buttonStyle}
            onPress={() => captureImage('video')}>
            <Text style={styles.textStyle}>Launch Camera for Video</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.buttonStyle}
            onPress={() => chooseFile('photo')}>
            <Text style={styles.textStyle}>Choose Image</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.buttonStyle}
            onPress={() => chooseFile('video')}>
            <Text style={styles.textStyle}>Choose Video</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

  const handleChange = text => {
    // TextRef.current = text;
    inputRef.current = text;
  };

  const handleOpen = index => {
    open !== index ? setOpen(index) : setOpen(null);
  };

  const handlePick = (text, stateName) => {
    console.log('stateName ', stateName);
    const temp = result[stateName];
    if (stateName === 'current' || stateName === 'type') {
      temp === text()
        ? setResult({...result, [stateName]: null})
        : setResult({...result, [stateName]: text()});
      if (stateName === 'type') {
        setSubTypeValue([]);
      }
      console.log('isChanged ', result.current);
    } else if (!temp.includes(text()[0])) {
      setResult({...result, [stateName]: [...result[stateName], text()[0]]});
    } else {
      setResult({
        ...result,
        [stateName]: [...result[stateName].filter(t => t !== text()[0])],
      });
    }
  };

  // const handleSubTypePicker = text => {
  //   const temp = subTypeValue;
  //   if (!temp.includes(text()[0])) {
  //     console.log('true');
  //     setSubTypeValue([...subTypeValue, text()[0]]);
  //   } else {
  //     setSubTypeValue([...subTypeValue.filter(t => t !== text()[0])]);
  //   }
  // };

  const handleSubmit = () => {
    // setBtnDisabled(true);
    if (
      !inputRef.current ||
      !subTypeValue.length ||
      !result.season.length ||
      !result.waterTemp.length ||
      !result.timeOfDay.length ||
      !result.waterClarity.length ||
      !result.pattern.length ||
      !result.opacity.length ||
      !result.wind.length ||
      !result.depth.length ||
      !result.weatherCondition.length ||
      !result.structure.length ||
      !result.instruction.length ||
      !result.behavior.length ||
      !result.current ||
      !result.line ||
      !result.pound
    ) {
      Alert.alert(
        'Warning!',
        'Please fill up all fields',
        [{text: 'OK', onPress: () => {}}],
        {cancelable: false},
      );
    } else {
      const baitData = {
        name: inputRef.current,
        groupType: result.type,
        type: subTypeValue,
        season: result.season,
        waterTemp: result.waterTemp,
        timeOfDay: result.timeOfDay,
        waterClarity: result.waterClarity,
        pattern: result.pattern,
        opacity: result.opacity,
        wind: result.wind,
        depth: result.depth,
        weatherCondition: result.weatherCondition,
        structure: result.structure,
        instruction: result.instruction,
        behavior: result.behavior,
        current: result.current,
        imageUri: result.filePath,
        line: result.line,
        pound: result.pound,
        additionalInfo: result.additionalInfo,
        instructionDec: result.instructionDec,
        patternDec: result.patternDec,
        structureDec: result.structureDec,
      };
      navigation.navigate('AddDescription', {data: baitData});
    }
  };

  const Dropdowns = () => {
    return Fields.map((field, index) => {
      return field === 'current' || field === 'type' ? (
        <View key={index}>
          <Text style={styles.labelText}>{field}</Text>
          <DropDownPicker
            maxHeight={2000}
            open={open === index}
            value={result[field]}
            items={DropdownItems[index]}
            zIndex={2000 - index * 100}
            setOpen={() => handleOpen(index)}
            setValue={text => handlePick(text, field)}
          />
          {field === 'type' && (
            <View style={{paddingTop: 20}}>
              <DropDownPicker
                maxHeight={2000}
                open={subTypeOpen}
                value={subTypeValue}
                items={result.type ? typeItems[result.type] : []}
                zIndex={2000 - index * 100 - 50}
                setOpen={setSubTypeOpen}
                setValue={text => setSubTypeValue(text)}
              />
            </View>
          )}
        </View>
      ) : (
        <View key={index}>
          <Text style={styles.labelText}>{field}</Text>
          <DropDownPicker
            multiple={true}
            min={0}
            max={15}
            maxHeight={2000}
            open={open === index}
            value={result[field]}
            items={DropdownItems[index]}
            zIndex={2000 - index * 100}
            setOpen={() => handleOpen(index)}
            setValue={text => handlePick(text, field)}
          />
        </View>
      );
    });
  };

  return (
    <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Add New Bait</Text>
      <View>
        <Text style={styles.labelText}>Bait Name</Text>
        <Text style={styles.subTitleText}>{inputRef.current}</Text>
        <TextInput
          style={styles.itemInput}
          onChangeText={text => handleChange(text)}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.imagePickerStyle}
          onPress={() => {
            setPickerOpen(!pickerOpen);
          }}>
          <Text style={styles.imagePickerText}>Choose the bait image.</Text>
        </TouchableOpacity>
        {pickerOpen && <ImagePicker />}
      </View>
      <View>
        <Dropdowns />
      </View>
      <TouchableHighlight
        style={styles.button}
        underlayColor="white"
        disabled={btnDisabled}
        onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Descriptions</Text>
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
    marginVertical: 100,
  },

  imagePickerStyle: {
    backgroundColor: 'white',
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 0.5,
  },
  imagePickerText: {
    fontSize: 15,
    color: 'black',
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 10,
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
    color: 'black',
  },
  subTitleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
    color: 'white',
  },
  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginVertical: 10,
    width: 250,
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
  },
});

export default AddItem;
