import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.buttonContainer}>
        <Button
            color={'red'}
          title="Deserts"
          onPress={() => navigation.navigate('Deserts')}
        />
        <Button
        color={'green'}
          title="Salads"
          onPress={() => navigation.navigate('Salads')}
        />
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
        paddingHorizontal: '30%'

      },

  });