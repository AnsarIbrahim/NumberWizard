import { useState, useEffect } from "react";
import { View, Image, Text, useWindowDimensions, ScrollView } from "react-native";
import Title from '../../components/Title/Title';
import PrimaryButton from '../../components/Button/PrimaryButton';
import styles from "./styles";

const GameOver = ({ roundsNumber, userNumber, onStartNewGame }) => {
  const window = useWindowDimensions();
  const [imageSize, setImageSize] = useState(300);


  useEffect(() => {
    let size = 300;

    if (window.width < 380) {
      size = 80;
    }

    if(window.height < 400) {
      size = 80;
    }

    setImageSize(size);
  }, [window]);

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>Game Over!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../../assets/image/sucess.png")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
};

export default GameOver;