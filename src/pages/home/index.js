import React, { useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, TextInput, Button, Pressable } from 'react-native'
import Bg from "../../../assets/bg.png"

export default function Home() {
  const [text, onChangeText] = useState('');

  return (
    <View
      style={styles.container}
    >
      <ImageBackground source={Bg} style={styles.image}>
        <Text style={{ color: 'white', fontSize: 22, fontFamily: 'Inder' }}>BEM VINDO AO</Text>
        <Text style={{
          color: '#FFC700', fontSize: 40, textShadowColor: 'rgba(255, 199, 0, 0.40)', textShadowOffset: { width: 0, height: 6 },
          textShadowRadius: 4, fontFamily: 'Bungee'
        }}>ASTROLAB</Text>
        <Image
          style={{ marginVertical: 40 }}
          source={require("../../../assets/home-icon.png")}
        />
        <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Inder' }}>Digite seu nome</Text>

        <TextInput
          placeholder={'Nome'}
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Pressable style={styles.button} onPress={() => { }}>
          <Text style={{ fontFamily: 'Inder' }}>Entrar</Text>
        </Pressable>
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
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  input: {
    borderRadius: 4,
    backgroundColor: '#fff',
    width: 230,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontFamily: 'Inder'
  },
  button: {
    marginTop: 40,
    backgroundColor: '#FFC700',
    width: 230,
    height: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});