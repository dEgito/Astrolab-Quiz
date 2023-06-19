import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { useFonts } from 'expo-font';

export default function Login() {

  return (
    <View
      style={styles.container}
    >
      <View
        style={styles.header}
      >
        <Text style={styles.title}> ASTROLAB</Text>
      </View>

      <ImageBackground
        source={require("../../../assets/bg.png")}
        style={styles.body}
      >

      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#560526',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'yellow',
    fontSize: 24,
    fontFamily: 'Bungee'
  },
  body: {
    flex: 6,

    backgroundColor: '#000',
    borderRadius: 25,
  }
});