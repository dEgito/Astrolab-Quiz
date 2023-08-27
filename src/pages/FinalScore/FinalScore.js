import { Dimensions, ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import {useFonts,  Inder_400Regular } from '@expo-google-fonts/inder';
import {Poppins_600SemiBold} from '@expo-google-fonts/poppins';
import Bg from '../../assets/bg.png';
import astrolabIcon from '../../assets/astrolab-icon.png'
import GoldButton from '../../componentes/GoldenButton';
import FooterText from '../componentes/FooterText';

export default function FinalScore(){
    let [fontsLoaded, fontError] = useFonts({
        Inder_400Regular,
        Poppins_600SemiBold  });
    
      if (!fontsLoaded && !fontError) {
        return null;
      }
      return (
      <View style={styles.container}>
        <ImageBackground source={Bg} style={styles.backgroundAstrolab}>
          <Text style={styles.TextoPontuacao}>Sua pontuação final foi:</Text>
          <Text style={styles.pontuacaoFinal}>100 pts!</Text>
          <Image source={astrolabIcon} />
          <GoldButton
              style={{fontFamily: 'Inder_400Regular', fontSize: 3}}
              text = 'Jogar novamente'
              onPress={() => {console.log("cloquinha");}}
            >
              <Text style={styles.AstrolabFooter}>Oieeeeeeeeeeee</Text>
          </GoldButton>
        </ImageBackground>
        <FooterText/>
      </View>)
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'center',
      },
      backgroundAstrolab:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      pontuacaoFinal: {
        color: '#FFC700',
        fontSize: 40, 
        textShadowColor: 'rgba(255, 199, 0, 0.40)', 
        textShadowOffset: { width: 0, height: 6 },
        textShadowRadius: 4,
        fontFamily: 'Poppins_600SemiBold'
      },
      TextoPontuacao:{
        fontFamily: 'Inder_400Regular', 
        fontSize: 24, 
        color: 'white', 
        fontSize: 22
      },
      astrolabIcon:{
        margin: 40
      }
});