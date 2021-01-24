import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import {Login,ViewNotes,AddNotes} from './screens';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
         <Stack.Screen name="Login"    component={Login}/>
        <Stack.Screen name="Notes List" component={ViewNotes} />
        <Stack.Screen name="Notes"  component={AddNotes}/>
    </Stack.Navigator>
   </NavigationContainer>
   );
}
