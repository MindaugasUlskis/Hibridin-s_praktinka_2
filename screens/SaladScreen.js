import { useRoute, } from '@react-navigation/native';
import { Button, View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';

import React, {  } from 'react';
const customData = require('../Meniu.json');
const SaladScreen = ({ navigation }, props) => {
 


  const pressHandler = (item, navigation) => {
    navigation.navigate('Recipe', {
      recipe: item
  
    })
  }


  const route = useRoute();
let filtername = route.params.nn
 

  return (
    <ScrollView>
    { filtername.map (item =>
      <Button
      onPress={() => pressHandler(item, navigation)}
      color={'red'}
    title={item.name}
  />
    )}
</ScrollView>
  );
}

export default SaladScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  item: {
    flexDirection: 'column',
    marginTop: 24,
    padding: 30,
    fontSize: 24

  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,

  },
  item:{
    marginTop: 24,
    padding: 30,
    backgroundColor: 'green',
    fontSize: 24
  }

});