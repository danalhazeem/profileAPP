import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


const Profile = ({ user }) => {
  return (
    <View style={styles.container}>
           <Text style={{ color: "gray", fontSize: 20 }}>Followers</Text>
        <Text style={{ color: "gray", fontSize: 20 }}>Likes</Text>
        <Text style={{ color: "gray", fontSize: 20 }}>photo</Text>
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Profile;
