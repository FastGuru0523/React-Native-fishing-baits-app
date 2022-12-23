import {Text, View} from 'react-native';

const ListItem = ({navigation, allBaits}) => {
  return (
    <View>
      <Text>ListItem Screen</Text>
      {allBaits.map(item => {
        return (
          <View key={item.key}>
            <Text>{item.name}</Text>
            <Text>{item.type}</Text>
            <Text>{item.season}</Text>
            <Text>{item.waterTemp}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default ListItem;
