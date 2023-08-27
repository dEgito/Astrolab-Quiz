import { createContext, useContext, useState } from "react";
import questionsMock from "../mocks/questionsMock";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [username, setUsername] = useState("abs");
  const [punctuation, setPunctuation] = useState(0);
  const [questions, setQuestions] = useState(
    shuffleArray(questionsMock).slice(0, 11)
  );

  const createNewQuestions = () => {
    setQuestions(shuffleArray(questionsMock).slice(0, 11));
  };

  return (
    <AuthContext.Provider
      value={{
        username,
        setUsername,
        punctuation,
        setPunctuation,
        questions,
        createNewQuestions,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
  const arrayCopy = [...array];
  for (var i = arrayCopy.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arrayCopy[i];
    arrayCopy[i] = arrayCopy[j];
    arrayCopy[j] = temp;
  }

  return arrayCopy;
}
