import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

// const deviseWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: deviseWidth < 380 ? 150 : 300,
    // height: deviseWidth < 380 ? 150 : 300,
    // borderRadius: deviseWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    color: Colors.primary800,
    fontFamily: "open-sans-bold",
  },
});

export default styles;