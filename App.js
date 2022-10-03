import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DesertScreen from './screens/DesertScreen';
import HomeScreen from './screens/HomeScreen';
import SaladScreen from './screens/SaladScreen';
import RecipeScreen from './screens/RecipeScreen';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Deserts" component={DesertScreen} />
        <Stack.Screen name="Salads" component={SaladScreen} />
        <Stack.Screen name="Recipe" component={RecipeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
