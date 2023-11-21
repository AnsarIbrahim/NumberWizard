import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    textAlign: "center",
    color: "#fff",
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderWidth: Platform.select({ android: 2, ios: 0 }),
    borderColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginTop: 24,
    maxWidth: '80%',
    minWidth: '80%',
  },
});

export default styles;