// import React from 'react';
// import { StyleSheet, Text, View, Image, Button } from 'react-native';
// // import * as Google from "expo-google-app-auth";
// import * as AuthSession from 'expo-auth-session';


// export default class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       signedIn: false,
//       name: "",
//       email: "",
//       photoUrl: ""
//     }
//   }
//   signIn = async () => {
//     try {
//       const result = await Google.logInAsync({
//         androidClientId: '1014185678010-avt0reun737dld6aa8ue60onig85in9t.apps.googleusercontent.com',
//         iosClientId: IOS_CLIENT_ID,
//         scopes: ["profile", "email"]
//       })

//       if (result.type === "success") {
//         this.setState({
//           signedIn: true,
//           name: result.user.name,
//           email: result.user.email,
//           photoUrl: result.user.photoUrl
//         })
//         console.log(result)
//         // fetch('localhost:3000/api/v1/users')
//         // console.log(Constants)
//       } else {
//         console.log("cancelled")
//       }
//     } catch (error) {
//       console.log("error", error)
//     }
//   }

//   signOut = () => {
//     this.setState({
//       signedIn: false,
//       name: "",
//       email: "",
//       photoUrl: ""
//     })
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>ReadyOrNot</Text>
//         {this.state.signedIn ? (
//           <LoggedInPage name={this.state.name} email={this.state.email} photoUrl={this.state.photoUrl} signOut={this.signOut}/>
//         ) : (
//           <LoginPage signIn={this.signIn}/>
//         )}
//       </View>
//     );
//   }
// }

// const LoginPage = props => {
//   return (
//     <View>
//       <Text style={styles.header}>Sign In With Google</Text>
//       <Button title="Sign in with Google" onPress={() => props.signIn()} />
//     </View>
//   )
// }

// const LoggedInPage = props => {
//   return (
//     <View>
//       <Text style={styles.header}>Welcome: {props.name}</Text>
//       <Text style={styles.header}>Contact @ {props.email}</Text>
//       <Image style={styles.image} source={{ uri: props.photoUrl }} />
//       <Button title="Sign Out" onPress={() => props.signOut()} />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//   flex: 1,
//   backgroundColor: "#fff",
//   alignItems: "center",
//   justifyContent: "center"
// },
// header: {
//   fontSize: 25
// },
// image: {
//   marginTop: 15,
//   width: 150,
//   height: 150,
//   borderColor: "rgba(0,0,0,0.2)",
//   borderWidth: 3,
//   borderRadius: 150
// }
// });


// expo install expo-web-browser expo-auth-session expo-random
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [accessToken, setAccessToken] = React.useState();
  const [userInfo, setUserInfo] = React.useState();
  const [message, setMessage] = React.useState();

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '1014185678010-avt0reun737dld6aa8ue60onig85in9t.apps.googleusercontent.com',
    iosClientId: IOS_CLIENT_ID,
    expoClientId: "694235095257-7t7h7mv877d2jfu7r508ct1egmesbqdm.apps.googleusercontent.com"
  });

  React.useEffect(() => {
    setMessage(JSON.stringify(response));
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
    }
  }, [response]);

  async function getUserData() {
    let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${accessToken}`}
    });

    userInfoResponse.json().then(data => {
      setUserInfo(data);
    });
  }

  function showUserInfo() {
    if (userInfo) {
      return (
        <View style={styles.userInfo}>
          <Image source={{uri: userInfo.picture}} style={styles.profilePic} />
          <Text>Welcome {userInfo.name}</Text>
          <Text>{userInfo.email}</Text>
        </View>
      );
    }
  }

  return (
    <View style={styles.container}>
      {showUserInfo()}
      <Button 
        title={accessToken ? "Get User Data" : "Login"}
        onPress={accessToken ? getUserData : () => { promptAsync({useProxy: false, showInRecents: true}) }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInfo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePic: {
    width: 50,
    height: 50
  }
});