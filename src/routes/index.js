import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Game from "../pages/game";
import { View } from "react-native";
import Home from "../pages/home";
import FinalScore from "../pages/FinalScore/FinalScore";
import StartGame from "../pages/StartGame";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="StartGame"
          component={StartGame}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Game"
          component={Game}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FinalScore"
          component={FinalScore}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
