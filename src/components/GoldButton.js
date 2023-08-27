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
  button: {
    backgroundColor: "#FFC700",
    width: 264,
    height: 56,
    paddingTop: 14,
    borderRadius: 30,
  },
});
