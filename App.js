import { StatusBar } from "expo-status-bar";
import {
  Button,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import LeftArrow from "./assets/icons/LeftArrow";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { useState } from "react";

import StartGame from "./src/pages/StartGame";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inder: require("./App/Fonts/Inder.ttf"),
    Bungee: require("./App/Fonts/Bungee.ttf"),
  });

  const [codeText, setCodeText] = useState("");

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View>
      <StartGame />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Inder",
    textAlign: "center",
  },
  text_bungee: {
    fontFamily: "Bungee",
    textShadowColor: "rgba(255, 199, 0, 0.4)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#FFC700",
    width: 264,
    height: 56,
    paddingTop: 14,
    borderRadius: 30,
  },
});
