import { View, Image, Text } from "react-native";
import Title from '../../components/Title/Title';
import PrimaryButton from '../../components/Button/PrimaryButton';
import styles from "./styles";

const GameOver = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../../assets/image/sucess.png')} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number{' '}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOver;