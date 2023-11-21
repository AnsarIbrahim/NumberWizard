import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.yellow,
    padding: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    margin: deviceWidth < 380 ? 12 : 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.yellow,
    fontFamily: "open-sans-bold",
    fontSize: deviceWidth < 380 ? 28 : 36,
  },
});

export default styles;