import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

export const Scrollviewcomponent = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            backgroundColor: 'green',
            width: 350,
            height: 150,
            margin: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 60,
              height: 60,
            }}
            source={{
              uri: 'https://image.flaticon.com/icons/png/512/88/88483.png',
            }}
          />
          <Text 
          style={{ margin:20}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

          </Text>
          
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View
            style={{
              backgroundColor: 'gray',
              width: 170,
              height: 150,
              margin: 5,
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: 60,
                height: 60,
              }}
              source={{
                uri: 'https://image.flaticon.com/icons/png/512/88/88483.png',
              }}
            />
            <Text
              style={{
                marginTop: 20,
                margin: 40,
              }}>
              number one
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'gray',
              width: 170,
              height: 150,
              margin: 5,
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: 60,
                height: 60,
              }}
              source={{
                uri: 'https://image.flaticon.com/icons/png/512/88/88483.png',
              }}
            />
            <Text
              style={{
                marginTop: 20,
                margin: 40,
              }}>
              number two
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <View
            style={{
              backgroundColor: 'gray',
              width: 170,
              height: 150,
              margin: 5,
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: 60,
                height: 60,
              }}
              source={{
                uri: 'https://image.flaticon.com/icons/png/512/88/88483.png',
              }}
            />
            <Text
              style={{
                marginTop: 20,
                margin: 40,
              }}>
              number three
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'gray',
              width: 170,
              height: 150,
              margin: 5,
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: 60,
                height: 60,
              }}
              source={{
                uri: 'https://image.flaticon.com/icons/png/512/88/88483.png',
              }}
            />
            <Text
              style={{
                marginTop: 20,
                margin: 30,
              }}>
              number four
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View
            style={{
              backgroundColor: 'gray',
              width: 170,
              height: 150,
              margin: 5,
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: 60,
                height: 60,
              }}
              source={{
                uri: 'https://image.flaticon.com/icons/png/512/88/88483.png',
              }}
            />
            <Text
              style={{
                marginTop: 20,
                margin: 40,
              }}>
              number one
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'gray',
              width: 170,
              height: 150,
              margin: 5,
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: 60,
                height: 60,
              }}
              source={{
                uri: 'https://image.flaticon.com/icons/png/512/88/88483.png',
              }}
            />
            <Text
              style={{
                marginTop: 20,
                margin: 40,
              }}>
              number two
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <View
            style={{
              backgroundColor: 'gray',
              width: 170,
              height: 150,
              margin: 5,
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: 60,
                height: 60,
              }}
              source={{
                uri: 'https://image.flaticon.com/icons/png/512/88/88483.png',
              }}
            />
            <Text
              style={{
                marginTop: 20,
                margin: 40,
              }}>
              number three
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'gray',
              width: 170,
              height: 150,
              margin: 5,
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: 60,
                height: 60,
              }}
              source={{
                uri: 'https://image.flaticon.com/icons/png/512/88/88483.png',
              }}
            />
            <Text
              style={{
                marginTop: 20,
                margin: 30,
              }}>
              number four
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <View
            style={{
              backgroundColor: 'gray',
              width: 170,
              height: 150,
              margin: 5,
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: 60,
                height: 60,
              }}
              source={{
                uri: 'https://image.flaticon.com/icons/png/512/88/88483.png',
              }}
            />
            <Text
              style={{
                marginTop: 20,
                margin: 40,
              }}>
              number one
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'gray',
              width: 170,
              height: 150,
              margin: 5,
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: 60,
                height: 60,
              }}
              source={{
                uri: 'https://image.flaticon.com/icons/png/512/88/88483.png',
              }}
            />
            <Text
              style={{
                marginTop: 20,
                margin: 40,
              }}>
              number two
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 10,
          }}>
          <View
            style={{
              backgroundColor: 'gray',
              width: 170,
              height: 150,
              margin: 5,
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: 60,
                height: 60,
              }}
              source={{
                uri: 'https://image.flaticon.com/icons/png/512/88/88483.png',
              }}
            />
            <Text
              style={{
                marginTop: 20,
                margin: 40,
              }}>
              number three
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'gray',
              width: 170,
              height: 150,
              margin: 5,
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: 60,
                height: 60,
              }}
              source={{
                uri: 'https://image.flaticon.com/icons/png/512/88/88483.png',
              }}
            />
            <Text
              style={{
                marginTop: 20,
                margin: 30,
              }}>
              number four
            </Text>
          </View>
        </View>
        

      
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});

