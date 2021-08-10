import React, { Fragment } from 'react'
import {
  View,
  Text,
  Button
} from 'react-native'
export const Wellcome = (props) => {
  console.log(props.navigation);
  return (
    <Fragment>
      <Text>  ALL COMPONENT (6)</Text>

      {/* <Button
        title="click"
        onPress={() => {
          props.navigation.navigate("Home")
        }}
      />
      <View style={{ paddingTop: 10 }}><Button

        title="click"
        onPress={() => {
          props.navigation.navigate("Page")
        }} /></View>
      <View style={{ paddingTop: 10 }}><Button

        title="click"
        onPress={() => {
          props.navigation.navigate("Namecomponent")
        }} /></View> */}
      <View style={{ paddingTop: 10 }}><Button

        title="View"
        onPress={() => {
          props.navigation.navigate("Viewcomponent")
        }} /></View>
      <View style={{ paddingTop: 10 }}><Button

        title="Text"
        onPress={() => {
          props.navigation.navigate("Textcomponent")
        }} /></View>
      <View style={{ paddingTop: 10 }}><Button

        title="Image"
        onPress={() => {
          props.navigation.navigate("Imagecomponent")
        }} /></View>
      <View style={{ paddingTop: 10 }}><Button

        title="TEXTINPUT"
        onPress={() => {
          props.navigation.navigate("Inputcomponent")
        }} /></View>
      <View style={{ paddingTop: 10 }}><Button
        title="SCROLLVIEW"
        onPress={() => {
          props.navigation.navigate("Scrollviewcomponent")
        }} /></View>
      <View style={{ paddingTop: 10 }}><Button
        title="STYLESHEET"
        onPress={() => {
          props.navigation.navigate("Stylesheetcomponent")
        }} /></View>


    </Fragment>
  ) 
}
