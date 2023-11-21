import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import StartGame from './screens/StartGame/StartGame'
import GameScreen from './screens/GameScreen/GameScreen';
import GameOver from './screens/GameOver/GameOver';
import Colors from './constants/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  if(!fontsLoaded) {
    return <AppLoading />
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGameIsOver(false);
  }

  const gameOverHandler = (numberofRounds) => {
    setGameIsOver(true);
    setGuessRounds(numberofRounds);
  };

  const startNewGameHandler = () => {
    setGameIsOver(false);
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGame onPickNumber={startGameHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if(gameIsOver && userNumber) {
    screen = <GameOver userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />
  }


  return (
    <LinearGradient colors={[Colors.primary700,Colors.yellow]} style={styles.main}>
      <ImageBackground 
      source={require('./assets/image/game.jpeg')}
      resizeMode='cover'
      style={styles.main}
      imageStyle={{opacity:0.15}}
      >
      <SafeAreaView style={styles.main}>
      {screen}
      </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  ); 
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  }
});