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
    .then(res => {
      console.log('Bait added!');
    });
};

export const getBaits = () => {
  console.log('getBaits function');
  let allBaits = [];
  firestore()
    .collection('baits')
    .get()
    .then(res => {
      res.forEach(doc => {
        allBaits.push(doc.data());
      });
    });
};
