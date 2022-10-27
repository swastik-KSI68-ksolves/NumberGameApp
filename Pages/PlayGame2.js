import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native'
import Colors from '../Constants/Colors'
import Card from '../Components/Card'
import TellText from '../Components/TellText'
import PrimaryButton from '../Components/PrimaryButton'

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + 1);
}

const PlayGame = ({ userPickedNum }) => {

    const [min, setMin] = useState(1)
    const [max, setMax] = useState(5)
    const [guessedNumber, setGuessedNumber] = useState();

    useState(() => {
        setGuessedNumber(getRandomNumber(min, max))
    }, []);


    const onMinusHandler = () => {

        if (userPickedNum > guessedNumber) {
            Alert.alert(
                "You lied",
                `Number is greater than ${guessedNumber}`,
                [
                    {
                        text: "Sorry",
                        style: "cancel"
                    },
                    { text: "OK" }
                ]
            );
        }
        else {
            let currentGuess = guessedNumber
            let Min = min
            // let Max = max
            setMax(currentGuess + 1)
            setMin(Min)
            setGuessedNumber(getRandomNumber(min, max))
            console.debug(guessedNumber, min, max);

        }
    }

    const onPlusHandler = () => {
        if (userPickedNum < guessedNumber) {
            Alert.alert(
                "You lied",
                `Number is less than ${guessedNumber}`,
                [
                    {
                        text: "Sorry",
                        style: "cancel"
                    },
                    { text: "OK" }
                ]
            );
        }
        else {
            let currentGuess = guessedNumber
            let Max = max
            let Min = min
            setMax(Max)
            setMin(currentGuess)
            setGuessedNumber(getRandomNumber(min, max))
            console.debug(guessedNumber, min, max);

        }

    }


    return (
        <View style={styles.container}>
            <Card>
                <View>
                    <TellText>Mobile Guessed - {guessedNumber}</TellText>
                </View>
                <View style={styles.innerContainer2}>
                    <PrimaryButton onPress={onPlusHandler}> + </PrimaryButton>
                    <PrimaryButton onPress={onMinusHandler}> - </PrimaryButton>
                </View>
            </Card>
        </View>
    )
}

export default PlayGame;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        marginTop: 70,
    },

    innerContainer2: {
        flexDirection: "row",
        justifyContent: "center",
        padding: 10,
        alignItems: "center",
    },
    TextInputNumber: {
        height: 50,
        width: 260,
        fontSize: 20,
        marginBottom: 20,
        borderBottomColor: Colors.primary1,
        borderBottomWidth: 1,
        color: Colors.primaryWhite,
        marginVertical: 8,
        fontWeight: "bold",
        textAlign: "center",
        borderRadius: 30,
    },

    textStyle: {
        color: "#000",
        textAlign: "center",
        fontSize: 20,
    },
})