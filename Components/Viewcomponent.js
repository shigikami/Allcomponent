/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
   TextBase,
 } from 'react-native';
 
 export const Viewcomponent = () => {
   return (
     <>
       <StatusBar barStyle="dark-content" />
       <SafeAreaView style={{flex: 1, backgroundColor: 'powderblue'}}>
         <View
           style={{
             backgroundColor: 'green',
             width: 350, 
             height: 150,
             margin: 20,
           }}>
           <Text>what's view?</Text>
         </View>
         <View style={{flexDirection: 'row', justifyContent: 'center'}}>
           <View
             style={{
               backgroundColor: 'green',
               width: 170,
               height: 150,
               margin: 5,
             }}></View>
           <View
             style={{
               backgroundColor: 'green',
               width: 170,
               height: 150,
               margin: 5,
             }}></View>
         </View>
         <View style={{flexDirection: 'row' , justifyContent: 'center', marginTop: 10}}>
         <View
             style={{
               backgroundColor: 'green',
               width: 170,
               height: 150,
               margin: 5,
             }}></View>
           <View
             style={{
               backgroundColor: 'green',
               width: 170,
               height: 150,
               margin: 5,
             }}></View>
         </View>
 
         <View
           style={{
             backgroundColor: 'green',
             width: 350,
             height: 200,
             margin: 20,
           }}>
           <Text>what's view?</Text>
         </View>
       </SafeAreaView>
     </>
   );
 };
 
 const styles = StyleSheet.create({});
 
 
 