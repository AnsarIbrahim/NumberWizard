import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const styles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderColor: Colors.primary800,
        borderWidth: 1,
        marginVertical: 10,
        backgroundColor: Colors.yellow,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        shadowOpacity: 0.26,
        elevation: 5,
        width: '100%',
    },
    listItemText: {
        fontSize: 18,
        fontFamily: 'open-sans',
    }
});

export default styles;