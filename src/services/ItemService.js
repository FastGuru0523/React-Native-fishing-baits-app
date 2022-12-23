import firestore from '@react-native-firebase/firestore';

export const addItem = newBait => {
  console.log('new Bait', newBait);
  firestore()
    .collection('baits')
    .doc()
    .set({
      name: newBait.name,
      type: newBait.type,
      season: newBait.season,
      waterTemp: newBait.waterTemp,
    })
    .then(() => {
      console.log('Bait added!');
    });
};

export const getBaits = () => {
  console.log('getBaits function');
  const allBaits = firestore()
    .collection('baits')
    .get()
    .then(() => {
      console.log('get Baits data!');
    });
  console.log(allBaits);
  return allBaits;
};
