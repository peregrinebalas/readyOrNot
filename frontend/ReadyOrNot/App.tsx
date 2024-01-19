import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Auth from "./components/Auth"
import Profile from "./components/Profile"

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [accessToken, setAccessToken] = React.useState();
  const [userInfo, setUserInfo] = React.useState();
  const [message, setMessage] = React.useState();

  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   androidClientId: '1014185678010-avt0reun737dld6aa8ue60onig85in9t.apps.googleusercontent.com',
  //   iosClientId: '1014185678010-n27tuaikhclnke2vojbn7fum81qq3vh4.apps.googleusercontent.com',
  //   expoClientId: "1014185678010-rd6p4glpbh0hb9vmeur34e48p78cdbiu.apps.googleusercontent.com"
  // });

  // React.useEffect(() => {
  //   setMessage(JSON.stringify(response));
  //   if (response?.type === "success") {
  //     setAccessToken(response.authentication.accessToken);
  //   }
  // }, [response]);

  // async function getUserData() {
  //   let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
  //     headers: { Authorization: `Bearer ${accessToken}`}
  //   });

  //   userInfoResponse.json().then(data => {
  //     setUserInfo(data);
  //   });
  // }

  return (
    <div>
    <View style={ userInfo ? styles.userInfo : styles.container }>
    { userInfo
      ? <Profile userInfo></Profile>
      : <Auth setUserInfo></Auth>
      
    }
    </View>
    <StatusBar style="auto" />
    </div>
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
});