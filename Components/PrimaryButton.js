import { View, Text, StyleSheet, Pressable } from 'react-native'
import Colors from '../Constants/Colors';

const PrimaryButton = ({ children, onPress }) => {
    return (
        <View style={styles.outerContainer}>
            <Pressable style={styles.innerContainer}
                onPress={onPress}

            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({

    outerContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden",

    },
    innerContainer: {
        backgroundColor: Colors.primary3,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 12,
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontSize: 20
    }

})
