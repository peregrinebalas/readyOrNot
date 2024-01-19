import { StyleSheet, Text, Image } from 'react-native';


export default function Profile(userInfo: any) {

    return (
        <div>
            <Image source={{uri: userInfo.picture}} style={styles.profilePic} />
            <Text>Welcome {userInfo.name}</Text>
            <Text>{userInfo.email}</Text>
        </div>
    )
}

const styles = StyleSheet.create({
    profilePic: {
      width: 50,
      height: 50
    }
  });