import { Pressable, StyleSheet, Text } from "react-native";

export default function GoldButton({ text, onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text className="text-[20px] text-black" style={styles.text}>
        {text}
      </Text>
    </Pressable>
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