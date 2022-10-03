import { useRoute, } from '@react-navigation/native';
import { Button, View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';

const RecipeScreen = ({ navigation }, props) => {
  const [textInputValue, setTextInputValue] = useState('');



  const [comments, setComments] = React.useState([]);

  const getStorage = async () => {
    const coms = await AsyncStorage.getItem('ra')
    if (coms !== null) {
      setComments(prevState => [...prevState, ...JSON.parse(coms)])
    }
  }


  let coms = [];
  const setStorage = async (comment) => {
    
    try {
      let storedComs = await AsyncStorage.getItem('ra');
      if (storedComs !== null) {
        coms = JSON.parse(storedComs);
      }
      coms.push(comment)
      setComments(coms)
      await AsyncStorage.setItem('ra', JSON.stringify(coms));
      
    } catch (error) {
    }
  };





  const remove = async () => {
    try {
        await AsyncStorage.removeItem('ra');
        return true;
        
    }
    catch(exception) {
        return false;
    }
}
  const route = useRoute();



  useEffect(getStorage,[])
  return (

    <View style={styles.container}>

      <Text style={{ fontSize: 36, color: 'purple', fontWeight: 'bold' }}>{route.params.nn}</Text>
      <Text>{route.params.ingredients.map(item =>
        <Text style={styles.item}>{item.ingredientName}: {item.quantity} {"\n"}</Text>

      )}</Text>
      <TextInput
        style={styles.input}
        value={textInputValue}
        onChangeText={(data) => setTextInputValue(data)}
      />
      <Button
        color={'purple'}
        title="Post!"
        
        onPress={() => { setStorage(textInputValue) }}
      />
      <ScrollView>
      {comments.map((item) => (
      
        <View>
          <Text style={styles.input}>{item}</Text>
        </View>
    ))}
</ScrollView>  
<Button
        color={'purple'}
        title="Delete all comments"
        
        onPress={() => { remove();  setStorage('');}}
        
      />

    </View>
  );
}

export default RecipeScreen

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