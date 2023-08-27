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
import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/native";

export default function Game() {
  const { questions, setPunctuation, setBestPunctuation } = useAuthContext();
  const [isTaped, onTaped] = useState(null);
  const [actualQuestionIndex, setActualQuestionIndex] = useState(0);
  const [answerArray, setAnswerArray] = useState([]);
  const navigation = useNavigation();

  const actualQuestion = questions[actualQuestionIndex];

  return (
    <View className="w-full h-full bg-primaryPurple pt-[20%]">
      <View className="px-[32px]">
        <Pressable
          onPress={() => {
            if (actualQuestionIndex === 0) {
              navigation.navigate("StartGame");
              return;
            }
            setActualQuestionIndex((index) => index - 1);
          }}
        >
          <LeftArrow />
        </Pressable>
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
        <View
          style={{
            marginTop: 40,
          }}
        >
          <Text className="text-gold mb-2">
            Pergunta{" "}
            {actualQuestionIndex !== 9 ? `0${actualQuestionIndex + 1}` : "10"}
          </Text>
          <Text style={styles.text_alternative}>{actualQuestion.question}</Text>
        </View>

        {actualQuestion.alternatives.map((text, index) => (
          <Pressable
            style={{
              ...styles.button,
              backgroundColor:
                isTaped === String.fromCharCode(65 + index)
                  ? "#FFC700"
                  : "#333",

              marginBottom: index === 3 ? 16 : 0,
            }}
            onPress={(e) => {
              onTaped(String.fromCharCode(65 + index));
            }}
          >
            <Text
              style={{
                ...styles.text_alternative,
                color:
                  isTaped === String.fromCharCode(65 + index) ? "#333" : "#fff",
              }}
            >
              {String.fromCharCode(65 + index)}. {text}
            </Text>
          </Pressable>
        ))}

        <GoldButton
          text="Responder"
          onPress={() => {
            if (isTaped === null) return;
            const arrayIndex = isTaped.charCodeAt(0) - 65;
            const selectedAnswer = actualQuestion.alternatives[arrayIndex];
            const questionPunctuation =
              selectedAnswer === actualQuestion.correct ? 10 : 0;

            if (actualQuestionIndex === 9) {
              const punctuation = answerArray.reduce(
                (partialSum, a) => partialSum + a,
                questionPunctuation
              );
              setPunctuation(punctuation);
              setBestPunctuation((oldPunctuation) =>
                punctuation > oldPunctuation ? punctuation : oldPunctuation
              );
              navigation.navigate("FinalScore");
              return;
            }

            setAnswerArray((answerArray) => [
              ...answerArray,
              questionPunctuation,
            ]);
            onTaped(null);
            setActualQuestionIndex((index) => index + 1);
          }}
        />
      </ImageBackground>
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
  text_alternative: {
    fontFamily: "Inder",
    color: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    // justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#333",
    width: 290,
    height: 40,
    marginTop: 16,
    paddingLeft: 14,
    borderRadius: 30,
    justifyContent: "center",
  },
});
