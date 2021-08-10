import React, { Fragment } from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'
const Name = "BUI"
const Hello = ( ) => {

}
export const Home = (props) => {
    return (
      <Fragment>
          <Text>Home screen</Text>
          <Button title="goback" 
          onPress={()=>{
              ///
            props.navigation.goBack()
          }}/>
      </Fragment>
    )
}
