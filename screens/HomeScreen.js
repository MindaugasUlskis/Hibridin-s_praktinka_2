import * as React from 'react';
import { Button, View, Text, StyleSheet, ScrollView } from 'react-native';
const customData = require('../Meniu.json');

const pressHandler = (item, navigation) => {
  navigation.navigate('Meniu', {
    nn: item

  })
}
const HomeScreen = ({ navigation } ) => {
    return (
      <View style={styles.buttonContainer}>
        <ScrollView>
    { customData.recipe.map (item =>
      <Button
      color={'purple'}
    title={item.katName}
    onPress={() => pressHandler(item.katRecipies, navigation)}
  />
    )}
</ScrollView>
      </View>
    );
  }
  
  export default HomeScreen

  const styles = StyleSheet.create({
    
    buttonContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignContent: 'center',
        paddingVertical: '75%',
        paddingHorizontal: '30%',


      },

  });