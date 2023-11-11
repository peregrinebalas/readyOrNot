export default function(userInfo) Profile {

    return (
        <div>
            <Image source={{uri: this.userInfo.picture}} style={styles.profilePic} />
            <Text>Welcome {this.userInfo.name}</Text>
            <Text>{this.userInfo.email}</Text>
        </div>
    )
}