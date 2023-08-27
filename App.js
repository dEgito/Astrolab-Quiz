import { StyleSheet, Text, View } from "react-native";
import Routes from "./src/routes";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inder: require("./assets/Inder.ttf"),
    Bungee: require("./assets/Bungee.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Routes />;
}
