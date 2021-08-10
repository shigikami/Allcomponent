
 import React from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,
   Text,
   StatusBar,
   
 } from 'react-native';
 
 export const Textcomponent = () => {
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
           <Text>What’s view?
Answer here:
</Text>
         </View>
         <View style={{flexDirection: 'row', justifyContent: 'center'}}>
           <View
             style={{
               backgroundColor: 'green',
               width: 170,
               height: 150,
               margin: 5,
             }}><Text 
             style={{
               marginTop: 60,
               margin: 40

             }}>number one</Text></View>
           <View
             style={{
               backgroundColor: 'green',
               width: 170,
               height: 150,
               margin: 5,
             }}><Text style={{
              marginTop: 60,
              margin: 40

            }}>number two</Text></View>
         </View>
         <View style={{flexDirection: 'row' , justifyContent: 'center', marginTop: 10}}>
         <View
             style={{
               backgroundColor: 'green',
               width: 170,
               height: 150,
               margin: 5,
             }}><Text style={{
              marginTop: 60,
              margin: 40

            }}>number three</Text></View>
           <View
             style={{
               backgroundColor: 'green',
               width: 170,
               height: 150,
               margin: 5,
             }}><Text style={{
              marginTop: 60,
              margin: 40

            }}>number four</Text></View>
         </View>
 
         <View
           style={{
             backgroundColor: 'green',
             width: 350,
             height: 200,
             margin: 20,
           }}>
           <Text>When tag View is importance?
Answer here:
</Text>
         </View>
       </SafeAreaView>
     </>
   );
 };
 
 const styles = StyleSheet.create({});
 
 
 