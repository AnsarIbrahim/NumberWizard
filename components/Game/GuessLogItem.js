import { View, Text } from "react-native";
import styles from "./styles";

const GuessLogItem = ({ roundNumber, guess }) => {
  return (
   <View style={styles.listItem}>
    <Text style={styles.listItemText}>#{roundNumber}</Text>
    <Text style={styles.listItemText}>Opponent's Guess: {guess}</Text>
   </View>
  )
}

export default GuessLogItem