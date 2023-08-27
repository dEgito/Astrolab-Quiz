import {
  ImageBackground,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import LeftArrow from "../../../assets/icons/LeftArrow";
import GoldButton from "../../components/GoldButton";
import { useState } from "react";

export default function StartGame() {
  const [isTaped, onTaped] = useState('');

  return (
    <View className="w-full h-full bg-primaryPurple pt-[20%]">
      <View className="px-[32px]">
        <LeftArrow />
        <Text
          className="text-[20px] text-gold drop-shadow-gold absolute -bottom-5 left-[42%]"
          style={styles.text_bungee}
        >
          ASTROLAB
        </Text>
      </View>
      <ImageBackground
        className="bg-black rounded-[30px_30px_0px_0px] mt-[30px]"
        source={require("../../../assets/background.png")}
        style={styles.image}
      >
        <View style={{
          marginTop: 40,
        }}>
          <Text className="text-gold mb-2">
            Pergunta 01
          </Text>
          <Text style={styles.text_alternative}>
            Qual é o nome do planeta mais próximo do Sol?
          </Text>
        </View>

        <Pressable style={{ ...styles.button, backgroundColor: isTaped === 'a' ? "#FFC700" : "#333" }} onPress={(e) => { onTaped('a') }}>
          <Text style={styles.text_alternative}>A.   Entrar</Text>
        </Pressable>
        <Pressable style={{ ...styles.button, backgroundColor: isTaped === 'b' ? "#FFC700" : "#333" }} onPress={() => { onTaped('b') }}>
          <Text style={styles.text_alternative}>B.   Entrar</Text>
        </Pressable>
        <Pressable style={{ ...styles.button, backgroundColor: isTaped === 'c' ? "#FFC700" : "#333", }} onPress={() => { onTaped('c') }}>
          <Text style={styles.text_alternative}>C.   Entrar</Text>
        </Pressable>
        <Pressable style={{ ...styles.button, backgroundColor: isTaped === 'd' ? "#FFC700" : "#333", marginBottom: 16 }} onPress={() => { onTaped('d') }}>
          <Text style={styles.text_alternative}>D.   Entrar</Text>
        </Pressable>
        <GoldButton
          text="Responder"
          onPress={() => {
            console.log("cloquinha");
          }}
        />
      </ImageBackground >
    </View >
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
  text_alternative: {
    fontFamily: "Inder",
    color: '#fff'
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    // justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#333",
    width: 290,
    height: 40,
    marginTop: 16,
    paddingLeft: 14,
    borderRadius: 30,
    justifyContent: "center",
  },
});