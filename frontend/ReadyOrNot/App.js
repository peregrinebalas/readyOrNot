import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Constants from 'expo-constants';
import * as Google from "expo-google-app-auth";

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      name: "",
      email: "",
      photoUrl: ""
    }
  }
  signIn = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: '1014185678010-avt0reun737dld6aa8ue60onig85in9t.apps.googleusercontent.com',
        //iosClientId: IOS_CLIENT_ID,
        scopes: ["profile", "email"]
      })

      if (result.type === "success") {
        this.setState({
          signedIn: true,
          name: result.user.name,
          email: result.user.email,
          photoUrl: result.user.photoUrl
        })
        console.log(result)
        // fetch('localhost:3000/api/v1/users')
        // console.log(Constants)
      } else {
        console.log("cancelled")
      }
    } catch (error) {
      console.log("error", error)
    }
  }

  signOut = () => {
    this.setState({
      signedIn: false,
      name: "",
      email: "",
      photoUrl: ""
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>ReadyOrNot</Text>
        {this.state.signedIn ? (
          <LoggedInPage name={this.state.name} email={this.state.email} photoUrl={this.state.photoUrl} signOut={this.signOut}/>
        ) : (
          <LoginPage signIn={this.signIn}/>
        )}
      </View>
    );
  }
}

const LoginPage = props => {
  return (
    <View>
      <Text style={styles.header}>Sign In With Google</Text>
      <Button title="Sign in with Google" onPress={() => props.signIn()} />
    </View>
  )
}

const LoggedInPage = props => {
  return (
    <View>
      <Text style={styles.header}>Welcome: {props.name}</Text>
      <Text style={styles.header}>Contact @ {props.email}</Text>
      <Image style={styles.image} source={{ uri: props.photoUrl }} />
      <Button title="Sign Out" onPress={() => props.signOut()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#fff",
  alignItems: "center",
  justifyContent: "center"
},
header: {
  fontSize: 25
},
image: {
  marginTop: 15,
  width: 150,
  height: 150,
  borderColor: "rgba(0,0,0,0.2)",
  borderWidth: 3,
  borderRadius: 150
}
});
