import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        alignItems: "center",
    },
    instructionText: {
        marginBottom: 12,
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1,
    },
    listContainer: {
        flex: 1,
        padding: 16,
        width: "100%",
    },
    buttonContainerWide: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "80%",
    },
});

export default styles;