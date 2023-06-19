import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import LeftArrow from "./assets/icons/LeftArrow";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { useState } from "react";

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
    <View className="w-full h-full bg-primaryPurple pt-[20%]">
      <View className="px-[32px]">
        <LeftArrow />
        <Text
          className="text-white text-[24px] mx-auto relative -top-[4px] mb-2"
          style={styles.text}
        >
          VERIFICAÇÃO
        </Text>
        <Text className="text-gold mx-auto text-[16px]" style={styles.text}>
          Enviamos o código para o seu e-mail
        </Text>
      </View>
      <ImageBackground
        className="bg-black rounded-[30px_30px_0px_0px] mt-[30px]"
        source={require("./assets/background.png")}
        style={styles.image}
      >
        <View className="justify-center items-center relative -top-14">
          <Text className="text-[20px] text-white" style={styles.text}>
            Digite o código de ativação:
          </Text>
          <TextInput
            className="w-[180px] h-[40px] bg-white text-center text-lg mt-[40px] rounded"
            value={codeText}
            onChangeText={setCodeText}
            placeholder="000 000"
          />
          <Text
            className="text-[16px] text-white mt-[64px]"
            style={styles.text}
          >
            Não recebeu? REENVIAR
          </Text>
        </View>
        <Text
          className="text-[20px] text-gold drop-shadow-gold absolute bottom-10"
          style={styles.text_bungee}
        >
          ASTROLABS
        </Text>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Inder",
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
});
