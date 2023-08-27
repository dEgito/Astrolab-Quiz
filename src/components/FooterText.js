import {Text, View, StyleSheet} from 'react-native'
import { useFonts, Bungee_400Regular } from '@expo-google-fonts/bungee'

export default function FooterText(){
    let [fontsLoaded, fontError] = useFonts({
    Bungee_400Regular
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return(
    <View style= {{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.AstrolabFooter}>ASTROLAB</Text>
    </View>
  )
};

const styles = StyleSheet.create({
    AstrolabFooter:{
        color: '#FFC700',
        fontSize: 40, 
        textShadowColor: 'rgba(255, 199, 0, 0.40)', 
        textShadowOffset: { width: 0, height: 6 },
        textShadowRadius: 4,
        fontFamily: 'Bungee_400Regular',
  }
})