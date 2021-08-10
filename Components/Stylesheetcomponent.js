import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

 export const Stylesheetcomponent = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#EEFF41',
              height: 150,
              width: 150,
              marginTop: 50,
              marginBottom: 30,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              borderWidth: 1,
              borderColor: '#EEFF41',
            }}>
            <Text style={{}}>Circle</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              backgroundColor: 'white',
              borderRadius: 10,
              borderColor: 'blue',
              borderWidth: 1,
            }}>
            <View
              style={{
                backgroundColor: 'blue',
                borderColor: 'red',
                height: 70,
                width: 70,
                borderRadius: 100,
                borderWidth: 1,
                margin: 20,
                marginLeft: 5,
                marginRight: 50,
              }}></View>
            <View
              style={{
                backgroundColor: 'red',
                borderColor: 'blue',
                height: 70,
                width: 70,
                borderRadius: 100,
                borderWidth: 1,
                margin: 20,
                marginLeft: 150,
                marginRight: 5,
              }}></View>
          </View>

          {/* head */}
          <View
            style={{
              marginTop: 20,
              backgroundColor: '#EEEEEE',
              borderRadius: 10,
              height: 310,
              width: 350,
              borderColor: 'black',
              borderWidth: 1,
            }}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: 'black',
                  backgroundColor: 'white',
                  height: 50,
                  width: 60,
                  margin: 20,
                }}></View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: 'black',
                  backgroundColor: 'white',
                  height: 50,
                  width: 60,
                  margin: 20,
                  marginLeft: 40
                }}></View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: 'black',
                  backgroundColor: 'white',
                  height: 50,
                  width: 60,
                  margin: 20,
                  marginLeft: 40
                }}></View>
            </View>
                  {/* center */}

            <View
              style={{
                flexDirection: 'row',
                marginBottom: 10
              }}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: 'black',
                  backgroundColor: 'white',
                  height: 50,
                  width: 60,
                  margin: 5,
                  marginLeft: 70
                }}></View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: 'black',
                  backgroundColor: 'white',
                  height: 50,
                  width: 60,
                  margin: 5,
                }}></View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: 'black',
                  backgroundColor: 'white',
                  height: 50,
                  width: 60,
                  margin: 5,
                }}></View>
            </View>
              {/* buttom */}
            <View
              style={{
                borderWidth: 1,
                borderColor: 'black',
                backgroundColor: 'white',
                height: 50,
                width: 60,
                marginTop: 0,
                marginLeft: 20,
              }}></View>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'black',
                backgroundColor: 'white',
                height: 50,
                width: 60,
                marginTop: 20,
                marginLeft: 20,
              }}></View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
