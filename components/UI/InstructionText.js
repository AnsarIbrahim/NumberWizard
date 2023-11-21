import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.insertText, style]}>{children}</Text>;
};


const styles = StyleSheet.create({
  insertText: {
    fontFamily: 'open-sans',
    color: Colors.yellow,
    fontSize: 24,
},
});

export default InstructionText;