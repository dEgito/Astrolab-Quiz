import { Pressable, StyleSheet, Text } from "react-native";
import {useFonts,  Inder_400Regular } from '@expo-google-fonts/inder';

export default function GoldButton({ text, onPress }) {
  let [fontsLoaded, fontError] = useFonts({
    Inder_400Regular
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
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
    fontFamily: 'Inder_400Regular',
    textAlign: "center",
    fontSize: 16
  },
  button: {
    backgroundColor: "#FFC700",
    width: 264,
    height: 56,
    borderRadius: 30,
    justifyContent: "center",
    marginTop: 12,
    shadowColor: 'rgba(85, 105, 187, 0.66)',
  },
});
