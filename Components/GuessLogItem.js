import { View, Text, StyleSheet } from "react-native"
import Colors from "../Constants/Colors";

const GuessLogItem = ({ roundNumber, guess }) => {
    return (
        <View style={styles.listItem}>
            <Text>#{roundNumber}</Text>
            <Text>Opponent's Guess: {guess}</Text>
        </View>
    )
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary2,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.primaryBlack,
        flexDirection: "row",
        justifyContent: "space-between",
        width: '100%',
        elevation: 4,
    }
})