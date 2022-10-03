
import { Button, View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from "react";



const customData = require('../Meniu.json');

const pressHandler = (item, navigation) => {
  console.log(item.ingredients.quantity);
  navigation.navigate('Recipe', {
    nn: item.name,
    ingredients: item.ingredients,
  })
}


const items = customData.receptai.filter(kategorija =>
  kategorija.kategorija ==='Salotos'
  )

const SaladScreen = ({ navigation }) => {
  return (
    <View style={styles.container} >

    <ScrollView>
    { items.map(item =>
      <TouchableOpacity onPress={() => pressHandler(item, navigation)}>
        <View>
          <Text style={styles.item}>{item.name}</Text>
        </View>
        </TouchableOpacity>
    )}
</ScrollView>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  item:{
    marginTop: 24,
    padding: 30,
    backgroundColor: 'green',
    fontSize: 24
  }

});


  export default SaladScreen

