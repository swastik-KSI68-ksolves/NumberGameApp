import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, useWindowDimensions } from 'react-native'
import Colors from '../Constants/Colors'
import Images from "../Constants/Images"
import TellText from "../Components/TellText"
import PrimaryButton from '../Components/PrimaryButton'

const GameOver = ({ userPickedNumber, roundNumbers, playGameAgainHandler }) => {
    const { width, height, fontScale } = useWindowDimensions();
    const fontSize = (fontScale * height) / 30;
    const imageDimensions = height < 415 ? 150 : 260
    const padding = width < 415 ? 35 : 25;
    const margin = width < 391 ? 10 : 20;
    return (
        <View style={[styles.container, { padding: padding, marginTop: height < 415 ? 10 : 30 }]}>
            <TellText>Game Over</TellText>
            <View style={styles.imageContainer}>
                <Image style={[styles.GameOverImage, { width: imageDimensions, height: imageDimensions }]} source={Images.ImageGameOver}></Image>
            </View>
            <Text style={[styles.innerText, { fontSize: fontSize, marginVertical: margin, marginHorizontal: margin }]}>Your phone took
                <Text style={[styles.numbersText, { fontSize: fontSize }]}> {roundNumbers} </Text>
                turns to find Number
                <Text style={[styles.numbersText, { fontSize: fontSize }]}> {userPickedNumber} </Text>
            </Text>
            <PrimaryButton onPress={playGameAgainHandler}>Play again</PrimaryButton>
        </View>
    )
}

export default GameOver;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    GameOverImage: {
        borderWidth: 2,
        borderColor: Colors.primaryBlack,
        borderRadius: 200,
    },
    imageContainer: {
        maxWidth: '80%',
        alignItems: 'center',
        padding: 10,
    },
    innerText: {
        textAlign: "center",
    },
    numbersText: {
        color: Colors.primary3,
    }
})
