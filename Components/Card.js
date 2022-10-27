import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../Constants/Colors';

const Card = ({ children, style }) => {
    return (
        <View style={[styles.card, style]}>
            {children}
        </View>
    )
}
export default Card;

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 24,
        borderRadius: 10,
        elevation: 5,
        padding: 16,
        backgroundColor: Colors.primary4,
        justifyContent: "center"
    }
})