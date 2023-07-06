//React
import {useCallback, useEffect, useState} from "react";
//Css
import './App.css';

//Components
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import GameOverScreen from './components/GameOverScreen';

//Data
import {wordsList} from './data/words';

const stages = [
  {id:1, name:"start"},
  {id:2, name:"game"},
  {id:3, name:"end"}
]

const guessesQtd = 3;

function App() {

  const [gameStage, setGameStage] = useState (stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedword] = useState (""); //Pegar a palavra
  const [pickedCategory, setPickedCategory] = useState (""); //Pegar a categoria
  const [letters, setLetters] = useState ([]); // "explodir" a palavra em letras

  const [guessedLetters, setGessedLetters] = useState ([]);   //Letras adivinhadas
  const [wrongLetters, setWrongLetters] = useState ([]);   //Letras erradas
  const [guesses, setGuesses] = useState (guessesQtd);   //Tentativas
  const [score, setScore] = useState (0);   //Pontuação

  const pickWordAndCategory = useCallback(() => {
    //pega uma key aleatória (categoria)
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];  //math floor, arredonda para baixo o valor

    //pegar uma palavra aleatória
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return {word, category};  //para desestruturar ele
  }, [words]);

  //startar game
  const startGame = useCallback(() => {
    //limpar todas as letras
    clearLetterState();

    const {word, category} = pickWordAndCategory();
    
    //criar um array de palavras
    let wordLetters = word.split(""); //split - separa a palavra por letras
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    //setar os estados
    setPickedword(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    setGameStage(stages[1].name);
  }, [pickWordAndCategory] );

  // process the letter input
  const verifyLetter = (letter) => {

    const normalizedLetter = letter.toLowerCase();

    //checar se a letra já foi utilizada
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return; 
      }

      // Se a letra estiver certa, senão
    if (letters.includes(normalizedLetter)) {
      setGessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);
      
      setGuesses((actualGuessed) => actualGuessed -1)
    } 
  };

  const clearLetterState = () => {
    setGessedLetters([]);
    setWrongLetters([]);
  }

  useEffect(() => {
    if(guesses <=0) {
      clearLetterState();

      setGameStage(stages[2].name);

    }
  }, [guesses]);

  //checar a vitória
  useEffect(() => {
    
    const uniqueLetters = [...new Set(letters)]  // ?????????????????

    //win conditional
    if(guessedLetters.length === uniqueLetters.length) {
      //add score
      setScore((actualScore) => actualScore + 100);

      //reiniciar o game com uma nova palavra
      startGame();
    }

  }, [guessedLetters, letters, startGame])

  // restart the game
  const retry = () => {
    setScore(0);
    setGuesses(guessesQtd);
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && 
        <GameScreen 
          verifyLetter={verifyLetter} 
          pickedWord={pickedWord}
          pickedCategory={pickedCategory} 
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />}
      {gameStage === 'end' && <GameOverScreen retry={retry} score={score}/>}
    </div>
  );
}

export default App;
