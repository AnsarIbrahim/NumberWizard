import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.yellow,
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Colors.yellow,
        fontFamily: 'open-sans-bold',
        fontSize: 36,
    }
    });

export default styles;