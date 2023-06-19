import Routes from './src/routes'

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    Bungee: require('./assets/fonts/Bungee-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer
      style={styles.container}
    >
      <Routes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});