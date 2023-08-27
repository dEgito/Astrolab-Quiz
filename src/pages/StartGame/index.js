import {
  Image,
  ImageBackground,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import LeftArrow from "../../../assets/icons/LeftArrow";
import GoldButton from "../../components/GoldButton";
import BackgroundImage from "../../../assets/background.png";
import ImagePlanet from "../../../assets/image_1.png";
import { useState } from "react";

export default function StartGame() {
  const [punctuation, setPunctuation] = useState(0);

  return (
    <View className="w-full h-full bg-primaryPurple pt-[15%]">
      <View className="px-[32px] h-2">
        <LeftArrow />
        <Text
          className="text-[20px] text-gold drop-shadow-gold absolute -bottom-7 left-[42%]"
          style={styles.text_bungee}
        >
          ASTROLAB
        </Text>
      </View>
      <ImageBackground
        className="bg-black rounded-[30px_30px_0px_0px] mt-[30px]"
        source={BackgroundImage}
        style={styles.image}
      >
        <View className="justify-center items-center relative -top-14">
          <Text className="text-[30px] text-white" style={styles.text}>
            Olá{" "}
            <Text className="text-[30px] text-gold" style={styles.text}>
              Nome
            </Text>
            !
          </Text>
          <Text
            className="text-[22px] text-white mt-[42px]"
            style={styles.text}
          >
            Vamos dar início à sua jornada?
          </Text>
        </View>
        <GoldButton
          text="Jogar"
          onPress={() => {
            console.log("cloquinha");
          }}
        />

        <Image source={ImagePlanet} />
        <Text
          className="text-[20px] text-white absolute bottom-10"
          style={styles.text}
        >
          Recorde:{" "}
          <Text className="text-gold" style={styles.text}>
            {punctuation} pts
          </Text>
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
  button: {
    backgroundColor: "#FFC700",
    width: 264,
    height: 56,
    paddingTop: 14,
    borderRadius: 30,
  },
});
