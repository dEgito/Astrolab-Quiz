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

export default function StartGame() {
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
        {/* <Pressable
          style={styles.button}
          onPress={() => {
            console.log("abapo");
          }}
        >
          <Text className="text-[20px] text-black" style={styles.text}>
            Jogar
          </Text>
        </Pressable> */}
        <GoldButton
          text="Jogar"
          onPress={() => {
            console.log("cloquinha");
          }}
        />
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
