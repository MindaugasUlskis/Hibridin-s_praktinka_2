import { useRoute, } from '@react-navigation/native';
import { Button, View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import uuid from 'react-native-uuid';

const RecipeScreen = ({ navigation }) => {
  
  const [textInputValue, setTextInputValue] = useState('');
  const [comments, setComments] = React.useState([]);
 
  const getStorage = async () => {
    const coms = await AsyncStorage.getItem(route.params.recipe.name)
    if (coms !== null) {
      setComments(prevState => [...prevState, ...JSON.parse(coms)])
      console.log(JSON.parse(coms));
    }
  }


const setStorage = async (comment) => {
  let upcoms = [];
  try {
    let storedComs = await AsyncStorage.getItem(route.params.recipe.name);
    if (storedComs !== null) {
      upcoms = JSON.parse(storedComs)
    }
    upcoms.push(comment)
    await AsyncStorage.setItem(route.params.recipe.name, JSON.stringify(upcoms))
    setComments([])
    setComments(prevState => [...prevState, ...upcoms])
  } catch (error) {
  }
};
const del = async (id) =>{
  const coms = await AsyncStorage.getItem(route.params.recipe.name)
  upcoms = JSON.parse(coms)
  filteredComs = upcoms.filter((com) => com.id !== id)
  setComments([])
  setComments(prevState => [...prevState, ...filteredComs])
  await AsyncStorage.setItem(route.params.recipe.name, JSON.stringify(filteredComs))

}

    const route = useRoute();
    useEffect(getStorage,[])
    console.log(comments)

    return (

        <View style={styles.container}>

            <Text style={{ fontSize: 36, color: 'purple', fontWeight: 'bold' }}>{route.params.recipe.name}</Text>
            <Text>{route.params.recipe.ingredients.map(item =>
                <Text style={styles.item}>{item.ingredientName}: {item.quantity} {"\n"}</Text>

            )}</Text>
            <TextInput
                style={styles.input}
                placeholder="comment"
                onChangeText={(value) => setTextInputValue(value)}
                underlineColorAndroid='transparent'


            />
            <ScrollView>
      {comments.map((item) => (
      
      <TouchableOpacity onPress={() => { del(item.id)}}>
        <View>
          <Text style={styles.input}>{item.keyname}</Text>
        </View>
        </TouchableOpacity>
    ))} 
</ScrollView>  
            <Button

                onPress={() => { setStorage({keyname: textInputValue, txt: route.params.recipe.name, id: t=uuid.v4()}) }}
                color={'purple'}
                title="Post!"

            />

            <Button
                onPress={() => { getStorage() }}
                color={'purple'}
                title="Delete all comments"

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
    item: {
        marginTop: 24,
        padding: 30,
        fontSize: 24
    }

});