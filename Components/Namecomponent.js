import axios from 'axios'
import React, { Fragment } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Text, View, Button } from "react-native"

export const Namecomponent = props => {

  const [users, saveUser] = useState([])
  const [loading, setloading] = useState(true)

   
  useEffect(() => {
    console.log("useEffect");
    fetch()
  }, [])

  // const getUser=()=>{
  //   const staticURL = "https://jsonplaceholder.typicode.com/users"
  //   axios({
  //   method: 'POST',
  //   url: staticURL + '/id_user',
  //   data:{}
  //   })
  //   .then(response => {
  //   console.log(response)
  //   })
  //   .catch(error => {
  //   console.log(error.response)
  //   });
  // }

   const fetch = async() => {
    setloading(false)
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(response);
    saveUser(response.data)
    setloading(true)
  }

  console.log("user",users) ;
  return (
    <Fragment>
      <View style={{flex: 1,justifyContent: 'center',alignContent: 'center'}}>
        {users.length>0
        ?
          users.map((user) => (<View  key={user?.id}  style={{padding: 10 , backgroundColor: "gray"}}><Text> <Button title={user.name} /></Text></View>))
        :<View>
          <Text>{loading}no user</Text>
        </View>
        }
      </View>
    </Fragment>
  )
}


