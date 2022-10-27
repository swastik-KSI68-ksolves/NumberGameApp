import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../Constants/Colors';


const TellText = ({ children }) => {
    return (
        <Text style={styles.instructionText}>{children}</Text>
    )
}

export default TellText;

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.primaryWhite,
        fontSize: 25,
        textAlign: "center",
        borderColor: "white",
        borderWidth: 5,
        marginVertical: 5,
        padding: 15,
        maxWidth: "80%",
        width: 350
    },
})