import { View, Text } from "react-native";
import styles from "./styles";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

export default NumberContainer;