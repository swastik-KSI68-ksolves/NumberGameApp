import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native'
import Colors from '../Constants/Colors'
import Card from '../Components/Card'
import TellText from '../Components/TellText'
import PrimaryButton from '../Components/PrimaryButton'

const PlayGame = ({ userPickedNum }) => {
    let min;
    let max;
    const [guessedNumber, setGuessedNumber] = useState();

    function getRandomNumber(min, max, exclude) {
        let rndNum = Math.floor(Math.random() * (max - min) + 1);
        if (exclude === rndNum) {
            return getRandomNumber(min, max, exclude);
        }
        else {
            return rndNum;
        }
    }

    useState(() => {
        min = 1
        max = 100
    }, []);

    let intialGuess = getRandomNumber(min, max, userPickedNum);


    const onEqualHandler = () => {
        Alert.alert(
            "Done",
            `Mobile found it....`,
            [
                {
                    text: "Sorry",
                    style: "cancel"
                },
                { text: "OK" }
            ]
        );
    }


    if (userPickedNum === guessedNumber) {
        onEqualHandler();
    }

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
            setMax(currentGuess + 1)
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
            setMin(currentGuess + 1)
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