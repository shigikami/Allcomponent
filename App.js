import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Components/Home';
import { Wellcome } from './Components/Wellcome';
import {Page} from './Components/page'
import {Namecomponent} from './Components/Namecomponent'
import {Viewcomponent} from './Components/Viewcomponent'
import {Textcomponent} from './Components/Textcomponnent'
import {Imagecomponent} from './Components/Imagecomponent'
import { Inputcomponent } from './Components/Inputcomponent';
import { Scrollviewcomponent } from './Components/Scrollviewcomponent';
import {Stylesheetcomponent} from './Components/Stylesheetcomponent'

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Wellcome">
        <Stack.Screen
          name="ALL COMPONENT"
          component={Wellcome}
        />
        <Stack.Screen
          name="Home"
          component={Home}
        />
          <Stack.Screen
          name="Page"
          component={Page}
        />
         <Stack.Screen
          name="Namecomponent"
          component={Namecomponent}
        />
         <Stack.Screen
          name="Viewcomponent"
          component={Viewcomponent}
        />
         <Stack.Screen
          name="Textcomponent"
          component={Textcomponent}
        />
         <Stack.Screen
          name="Imagecomponent"
          component={Imagecomponent}
        />
         <Stack.Screen
          name="Inputcomponent"
          component={Inputcomponent}
        />
         <Stack.Screen
          name="Scrollviewcomponent"
          component={Scrollviewcomponent}
        />
        <Stack.Screen
          name="Stylesheetcomponent"
          component={Stylesheetcomponent}
        />
        
         
      </Stack.Navigator>   
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
